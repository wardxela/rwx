import { Badge } from "@rwx/ui/components/badge";
import { Button } from "@rwx/ui/components/button";
import { Label } from "@rwx/ui/components/label";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";
import {
  type RouteSectionProps,
  action,
  createAsync,
  json,
  redirect,
  useAction,
  useSubmission,
} from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { ErrorBoundary, Show, Suspense } from "solid-js";
import { z } from "zod";
import { SelectCategory } from "~/features/categories/select-category";
import { SelectTags } from "~/features/tags/select-tags";
import api from "~/shared/api";
import { NotFound } from "~/shared/components/not-found";
import { getMyPosts, getPost, getPosts } from "~/shared/queries";

const Editor = clientOnly(() =>
  import("~/features/blog/editor").then((module) => ({
    default: module.Editor,
  })),
);

const deletePostAction = action(async (id: string) => {
  await api.DELETE("/blog/posts/{id}", {
    params: { path: { id } },
  });
  return redirect("/author/blog", {
    revalidate: [getPosts.key, getMyPosts.key],
  });
});

const UpdatePostSchema = z.object({
  title: z.string().min(3).max(100).optional(),
  content: z.unknown(),
  excerpt: z.string().max(1000).optional(),
  image: z.string().optional(),
  published: z.boolean().optional(),
  categoryId: z.string().uuid().nullable().optional(),
  tags: z.array(z.string()).optional(),
});

const updatePostAction = action(async (id: string, data: unknown) => {
  const validated = UpdatePostSchema.safeParse(data);
  if (!validated.success) {
    return json(
      { errors: validated.error.formErrors.fieldErrors },
      { revalidate: "nothing" },
    );
  }
  await api.PUT("/blog/posts/{id}", {
    params: { path: { id } },
    // @ts-expect-error Content is treated as Record<string, never>
    body: validated.data,
  });
  return json(
    { errors: null },
    {
      revalidate: [getPosts.key, getMyPosts.key, getPost.keyFor(id)],
    },
  );
});

export default function Page(props: RouteSectionProps) {
  const updatePost = useAction(updatePostAction);
  const postSubmission = useSubmission(updatePostAction);
  const postId = () => props.params.id!;
  const post = createAsync(() => getPost(postId()));

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <div>
          <div class="grid grid-cols-[1fr_400px] gap-14 p-10">
            <div>
              <div class="mb-6 flex items-center">
                <h1 class="font-semibold">Редактор записи</h1>
                <Show when={!post()?.published}>
                  <Badge class="ml-6" variant="secondary">
                    Черновик
                  </Badge>
                </Show>
              </div>
              <div class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-6">
                <TextField
                  class="col-span-2"
                  validationState={
                    postSubmission.result?.errors?.title ? "invalid" : "valid"
                  }
                >
                  <TextFieldLabel>Название</TextFieldLabel>
                  <TextFieldInput
                    type="text"
                    placeholder="Lorem ipsum..."
                    value={post()?.title}
                    onBlur={(e) =>
                      updatePost(postId(), {
                        title: e.currentTarget.value,
                      })
                    }
                  />
                  <TextFieldErrorMessage>
                    {postSubmission.result?.errors?.title?.join(", ")}
                  </TextFieldErrorMessage>
                </TextField>
                <TextField class="col-span-2">
                  <TextFieldLabel>Изображение</TextFieldLabel>
                  <TextFieldInput type="file" />
                </TextField>
                <TextField class="col-span-5 row-start-2">
                  <TextFieldLabel>Краткое описание</TextFieldLabel>
                  <TextFieldTextArea
                    placeholder="Lorem ipsum dolor sit amet..."
                    value={post()?.excerpt ?? ""}
                    onBlur={(e) =>
                      updatePost(postId(), {
                        excerpt: e.currentTarget.value,
                      })
                    }
                  />
                </TextField>
              </div>
              <div>
                <div class="mb-2 font-medium text-sm leading-none">
                  Редактор
                </div>
                <div class="rounded-xl border border-input p-16">
                  <Editor
                    initialData={post()?.content}
                    onSave={(data) => updatePost(postId(), { content: data })}
                  />
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="rounded-xl border border-input bg-white">
                <h2 class="border-input border-b p-4 font-semibold text-sm">
                  Настройки
                </h2>
                <div class="space-y-4 px-4 py-6">
                  <div class="flex flex-col gap-2">
                    <Label>Категория</Label>
                    <SelectCategory
                      selected={post()?.category ?? null}
                      onChange={(value) => {
                        updatePost(postId(), { categoryId: value?.id ?? null });
                      }}
                    />
                  </div>
                  <div class="flex flex-col gap-2">
                    <Label>Теги</Label>
                    <SelectTags
                      selected={post()?.tags ?? []}
                      onChange={(value) => {
                        updatePost(postId(), {
                          tags: value.map((tag) => tag.id),
                        });
                      }}
                    />
                  </div>
                </div>
                <div class="flex gap-2 border-input border-t p-4">
                  <form
                    class="ml-auto"
                    method="post"
                    action={deletePostAction.with(postId())}
                  >
                    <Button type="submit" variant="secondary">
                      Удалить
                    </Button>
                  </form>
                  <form>
                    <Show
                      when={post()?.published}
                      fallback={
                        <Button
                          type="button"
                          onClick={() => {
                            updatePost(postId(), { published: true });
                          }}
                        >
                          Опубликовать
                        </Button>
                      }
                    >
                      <Button
                        type="button"
                        onClick={() => {
                          updatePost(postId(), { published: false });
                        }}
                      >
                        Скрыть
                      </Button>
                    </Show>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
