import type EditorJS from "@editorjs/editorjs";
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
import { toast } from "solid-sonner";
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

const updatePostSchema = z.object({
  title: z.string().min(3).max(100).optional(),
  content: z.unknown(),
  excerpt: z.string().max(1000).optional(),
  image: z.string().optional(),
  published: z.boolean().optional(),
  categoryId: z.number().nullable().optional(),
  tags: z.array(z.number()).optional(),
});

type UpdatePostSchema = z.infer<typeof updatePostSchema>;

const updatePostAction = action(async (id: string, data: UpdatePostSchema) => {
  const validated = updatePostSchema.safeParse(data);
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
  const postId = () => props.params.id!;

  const updatePost = useAction(updatePostAction);
  const postSubmission = useSubmission(updatePostAction);
  const post = createAsync(() => getPost(postId()));

  let editor: EditorJS | null = null;
  let titleInputRef!: HTMLInputElement;
  let excerptInputRef!: HTMLTextAreaElement;

  const update = (data?: UpdatePostSchema) => {
    updatePost(postId(), {
      title: titleInputRef.value,
      excerpt: excerptInputRef.value,
      ...data,
    }).then((response) => {
      if (response.errors) {
        toast("Не удалось обновить запись");
      } else {
        toast("Запись успешно обновлена");
      }
    });
  };

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <div>
          <div class="grid-cols-[1fr_400px] gap-14 p-10 xl:grid">
            <div>
              <div class="mb-6 flex items-center">
                <h1 class="font-semibold">Редактор записи</h1>
                <Show
                  when={post()?.published}
                  fallback={
                    <Badge class="ml-6" variant="secondary">
                      Черновик
                    </Badge>
                  }
                >
                  <Button
                    variant="link"
                    class="ml-6 py-0"
                    as="a"
                    href={`/blog/${postId()}`}
                  >
                    Ссылка
                  </Button>
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
                    ref={titleInputRef}
                    type="text"
                    placeholder="Lorem ipsum..."
                    value={post()?.title}
                    onBlur={(e) => {
                      if (e.currentTarget.value === post()?.title) {
                        return;
                      }
                      update();
                    }}
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
                    ref={excerptInputRef}
                    placeholder="Lorem ipsum dolor sit amet..."
                    value={post()?.excerpt ?? ""}
                    onBlur={(e: { currentTarget: { value: string } }) => {
                      if (e.currentTarget.value === post()?.excerpt) {
                        return;
                      }
                      update();
                    }}
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
                    onInit={(ed) => {
                      editor = ed;
                    }}
                    onDestroy={() => {
                      editor = null;
                    }}
                  />
                </div>
                <div class="flex p-4">
                  <Button
                    class="ml-auto"
                    onClick={async () => {
                      if (!editor) {
                        return;
                      }
                      editor.save().then((data) => update({ content: data }));
                    }}
                  >
                    Сохранить
                  </Button>
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
                        update({ categoryId: value?.id ?? null });
                      }}
                    />
                  </div>
                  <div class="flex flex-col gap-2">
                    <Label>Теги</Label>
                    <SelectTags
                      selected={post()?.tags ?? []}
                      onChange={(value) => {
                        update({ tags: value.map((tag) => tag.id) });
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
                          onClick={() => update({ published: true })}
                        >
                          Опубликовать
                        </Button>
                      }
                    >
                      <Button
                        type="button"
                        onClick={() => update({ published: false })}
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
