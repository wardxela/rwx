import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
// @ts-expect-error
import Link from "@editorjs/link";
import List from "@editorjs/list";
import { Badge } from "@rwx/ui/components/badge";
import { Button } from "@rwx/ui/components/button";
import { Label } from "@rwx/ui/components/label";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";
import {
  type RouteSectionProps,
  action,
  createAsync,
  redirect,
} from "@solidjs/router";
import { ErrorBoundary, Show, Suspense } from "solid-js";
import { SelectCategory } from "~/features/categories/select-category";
import { SelectTags } from "~/features/tags/select-tags";
import api from "~/shared/api";
import { NotFound } from "~/shared/components/not-found";
import { getMyPosts, getPost, getPosts } from "~/shared/queries";

const deletePost = action(async (id: string) => {
  await api.DELETE("/blog/posts/{id}", {
    params: { path: { id } },
  });
  return redirect("/author/blog", {
    revalidate: [getPosts.key, getMyPosts.key],
  });
});

export default function Page(props: RouteSectionProps) {
  const post = createAsync(() => getPost(props.params.id!));

  const setupEditor = (el: HTMLDivElement) => {
    new EditorJS({
      holder: el,
      tools: {
        header: Header,
        link: Link,
        image: Image,
        list: List,
      },
    });
  };

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
                <TextField class="col-span-2">
                  <TextFieldLabel>Название</TextFieldLabel>
                  <TextFieldInput
                    type="text"
                    placeholder="Lorem ipsum..."
                    value={post()?.title}
                  />
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
                  />
                </TextField>
              </div>
              <div>
                <div class="mb-2 font-medium text-sm leading-none">
                  Редактор
                </div>
                <div class="rounded-xl border border-input p-16">
                  <div ref={setupEditor} />
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
                    <SelectCategory />
                  </div>
                  <div class="flex flex-col gap-2">
                    <Label>Теги</Label>
                    <SelectTags />
                  </div>
                </div>
                <div class="flex gap-2 border-input border-t p-4">
                  <form
                    class="ml-auto"
                    method="post"
                    action={deletePost.with(props.params.id!)}
                  >
                    <Button type="submit" variant="secondary">
                      Удалить
                    </Button>
                  </form>
                  <Button>Опубликовать</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
