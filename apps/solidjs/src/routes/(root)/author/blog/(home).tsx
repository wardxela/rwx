import {
  action,
  createAsync,
  json,
  redirect,
  useSubmission,
} from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { z } from "zod/v4";
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
import { CommonPagination, useSearchParamsPagination } from "#ui/pagination";
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
  const validated = CreatePostSchema.safeParse({
    title: formData.get("title"),
  });
  if (!validated.success) {
    return json({
      data: null,
      errors: z.flattenError(validated.error).fieldErrors,
    });
  }
  const response = await api.POST("/blog/posts", {
    body: validated.data,
  });
  if (!response.data) {
    return json({
      data: null,
      errors: null,
    });
  }
  return redirect(`/author/blog/${response.data}`, {
    revalidate: [getPosts.key, getMyPosts.key],
  });
}, "/blog/posts:post");

const pageSize = 8;

export default function Page() {
  const submission = useSubmission(createPost);
  const { offset, intermidiatePage, setCurrentPage } =
    useSearchParamsPagination({ size: pageSize });

  const posts = createAsync(() =>
    getMyPosts({
      limit: pageSize,
      offset: offset(),
    }),
  );

  const titleError = () => submission.result?.errors?.title;

  const pagesCount = () => Math.ceil((posts()?.total ?? 0) / pageSize);

  return (
    <div class="flex h-full flex-col px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Блог</h1>
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
                        {titleError()}
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
      <div class="mb-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        <Suspense
          fallback={
            <For each={Array.from({ length: 4 })}>
              {() => <PostLinkSkeleton />}
            </For>
          }
        >
          <Show when={posts()?.page.length} fallback="У вас нет записей">
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
          </Show>
        </Suspense>
      </div>
      <Suspense>
        <Show when={pagesCount() > 1}>
          <div class="mt-auto flex justify-center">
            <CommonPagination
              count={pagesCount()}
              page={intermidiatePage()}
              onPageChange={setCurrentPage}
            />
          </div>
        </Show>
      </Suspense>
    </div>
  );
}
