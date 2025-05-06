import {
  action,
  createAsync,
  json,
  query,
  redirect,
  useSubmission,
} from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { z } from "zod";
import api from "#api";
import { PostLink, PostLinkSkeleton } from "#features/blog/post-link";
import { getMyPosts, getPosts } from "#queries";
import { Button } from "#ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#ui/dialog";
import { Skeleton } from "#ui/skeleton";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
} from "#ui/text-field";

const CreatePostSchema = z.object({
  title: z.string().min(3).max(100),
});

const createPost = action(async (formData: FormData) => {
  const data = CreatePostSchema.safeParse({
    title: formData.get("title"),
  });
  if (!data.success) {
    return json({
      data: null,
      errors: data.error.errors,
    });
  }
  const response = await api.POST("/blog", {
    body: data.data,
  });
  if (!response.data) {
    return json({
      data: null,
      errors: [],
    });
  }
  return redirect(`/author/blog/${response.data.id}`, {
    revalidate: [getPosts.key, getMyPosts.key],
  });
}, "/blog:post");

export default function Page() {
  const posts = createAsync(() => getMyPosts());
  const submission = useSubmission(createPost);

  const titleError = () =>
    submission.result?.errors?.find((error) => error.path.includes("title"));

  return (
    <div class="px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold">Блог</h1>
        <Dialog>
          <DialogTrigger as={Button}>Создать</DialogTrigger>
          <DialogContent>
            <form action={createPost} method="post">
              <DialogHeader>
                <DialogTitle>Написать статью</DialogTitle>
                <DialogDescription>
                  Поделитесь своими мыслями и знаниями с сообществом. Создайте
                  увлекательную статью, которая будет полезна вашим ученикам.
                </DialogDescription>
                <div class="grid gap-4 py-4">
                  <TextField
                    name="title"
                    class="grid grid-cols-4 items-start gap-4"
                    validationState={titleError() ? "invalid" : "valid"}
                  >
                    <TextFieldLabel class="mt-3 ml-2 justify-self-start text-right">
                      Название
                    </TextFieldLabel>
                    <div class="col-span-3">
                      <TextFieldInput type="text" />
                      <TextFieldErrorMessage>
                        {titleError()?.message}
                      </TextFieldErrorMessage>
                    </div>
                  </TextField>
                </div>
                <DialogFooter>
                  <Button type="submit">Создать</Button>
                </DialogFooter>
              </DialogHeader>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Suspense
        fallback={
          <>
            <PostLinkSkeleton />
            <PostLinkSkeleton />
            <PostLinkSkeleton />
            <PostLinkSkeleton />
          </>
        }
      >
        <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          <For each={posts()?.page}>
            {(post) => (
              <PostLink
                link={`/author/blog/${post.id}`}
                title={post.title}
                excerpt={post.excerpt}
                updatedAt={post.updatedAt}
                image={post.image}
              />
            )}
          </For>
        </div>
      </Suspense>
    </div>
  );
}
