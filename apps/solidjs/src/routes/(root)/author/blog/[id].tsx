import type EditorJS from "@editorjs/editorjs";
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
import { z } from "zod/v4";
import api from "#api";
import { SelectCategory } from "#features/categories/select-category";
import { NotFound } from "#features/site/not-found";
import { SelectTags } from "#features/tags/select-tags";
import { getMyPosts, getPost, getPosts, uploadFileAction } from "#queries";
import { Badge } from "#ui/badge";
import { Button } from "#ui/button";
import { ImageUpload } from "#ui/image-upload";
import { Label } from "#ui/label";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "#ui/text-field";
import { Toast } from "#ui/toast";

const Editor = clientOnly(() =>
  import("#ui/editor").then((module) => ({
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
}, "/blog/posts/{id}:delete");

const updatePostSchema = z.object({
  title: z.string().min(3).max(100).optional(),
  content: z.unknown().optional(),
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
      {
        data: null,
        errors: z.flattenError(validated.error).fieldErrors,
      },
      { revalidate: "nothing" },
    );
  }
  await api.PUT("/blog/posts/{id}", {
    params: { path: { id } },
    // @ts-expect-error Content is treated as Record<string, never>
    body: validated.data,
  });
  return json(
    {
      data: true,
      errors: null,
    },
    {
      revalidate: [getPosts.key, getMyPosts.key, getPost.keyFor(id)],
    },
  );
}, "/blog/posts/{id}:put");

export default function Page(props: RouteSectionProps) {
  const postId = () => props.params.id!;

  const updatePost = useAction(updatePostAction);
  const uploadFile = useAction(uploadFileAction);
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
    });
  };

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <div class="grid-cols-[1fr_400px] gap-14 p-10 xl:grid">
          <div>
            <div class="mb-6 flex items-center">
              <h1 class="font-semibold">Редактор записи</h1>
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
              <div class="col-span-full">
                <ImageUpload
                  onChange={async (file) => {
                    const formData = new FormData();
                    formData.append("file", file);
                    const url = await uploadFile(formData);
                    if (!url) {
                      return;
                    }
                    update({
                      image: url,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <div class="mb-2 font-medium text-sm leading-none">Редактор</div>
              <Editor
                initialData={post()?.content}
                onInit={(ed) => {
                  editor = ed;
                }}
                onDestroy={() => {
                  editor = null;
                }}
              />
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
              <div class="flex items-center justify-between border-input border-b px-4 py-2">
                <h2 class="py-2 font-semibold text-sm">Превью</h2>
                <Show
                  when={post()?.published}
                  fallback={
                    <Badge class="ml-6" variant="secondary">
                      Черновик
                    </Badge>
                  }
                >
                  <Button as="a" variant="link" href={`/blog/${postId()}`}>
                    Ссылка
                    <svg
                      class="ml-1"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Link</title>
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .354.146"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Button>
                </Show>
              </div>
              <div class="p-4">
                <Show
                  when={post()?.image}
                  fallback={
                    <div class="flex aspect-[2/1] items-center justify-center rounded-lg border border-input bg-gray-50">
                      <svg
                        class="size-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <title>Preview</title>
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  }
                >
                  <img
                    src={post()!.image!}
                    alt={post()!.title}
                    class="aspect-[2/1] w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </Show>
              </div>
            </div>
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
      </Suspense>
      <Toast
        when={Boolean(postSubmission.result?.errors)}
        action={(toast) => toast.error("Не удалось обновить запись")}
      />
      <Toast
        when={Boolean(postSubmission.result?.data)}
        action={(toast) => toast.success("Запись успешно обновлена")}
      />
    </ErrorBoundary>
  );
}
