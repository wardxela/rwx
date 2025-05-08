import { clientOnly } from "@solidjs/start";
import { For, Show, createSignal } from "solid-js";
import { SelectCategory } from "#features/categories/select-category";
import { SelectTags } from "#features/tags/select-tags";
import { Badge } from "#ui/badge";
import { Button } from "#ui/button";
import { ImageUpload } from "#ui/image-upload";
import { Label } from "#ui/label";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "#ui/text-field";

const Editor = clientOnly(() =>
  import("#ui/editor").then((module) => ({
    default: module.Editor,
  })),
);

export default function Page() {
  const [title, setTitle] = createSignal("");
  const [description, setDescription] = createSignal("");
  const [price, setPrice] = createSignal("");
  const [oldPrice, setOldPrice] = createSignal("");
  const [published, setPublished] = createSignal(false);

  return (
    <div class="grid-cols-[1fr_400px] gap-14 p-10 xl:grid">
      <div>
        <div class="mb-6 flex items-center">
          <h1 class="font-semibold">Редактор курса</h1>
        </div>
        <div class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <TextField class="col-span-3">
            <TextFieldLabel>Название курса</TextFieldLabel>
            <TextFieldInput
              type="text"
              placeholder="Название курса..."
              value={title()}
              onInput={(e) => setTitle(e.currentTarget.value)}
            />
          </TextField>
          <TextField class="col-span-2">
            <TextFieldLabel>Цена</TextFieldLabel>
            <TextFieldInput
              type="number"
              placeholder="99.99"
              value={price()}
              onInput={(e) => setPrice(e.currentTarget.value)}
            />
          </TextField>
          <TextField class="col-span-2">
            <TextFieldLabel>Старая цена</TextFieldLabel>
            <TextFieldInput
              type="number"
              placeholder="199.99"
              value={oldPrice()}
              onInput={(e) => setOldPrice(e.currentTarget.value)}
            />
          </TextField>
          <TextField class="col-span-6">
            <TextFieldLabel>Описание</TextFieldLabel>
            <TextFieldTextArea
              placeholder="Описание курса..."
              value={description()}
              onInput={(e) => setDescription(e.currentTarget.value)}
            />
          </TextField>
          <div class="col-span-full">
            <ImageUpload onChange={(file) => console.log(file)} />
          </div>
        </div>
        <div class="mb-8">
          <div class="mb-2 font-medium text-sm leading-none">FAQ</div>
          <Editor initialData={{}} />
        </div>
        <ModulesEditor />
      </div>
      <div class="space-y-4">
        <div class="rounded-xl border border-input bg-white">
          <div class="flex items-center justify-between border-input border-b px-4 py-2">
            <h2 class="py-2 font-semibold text-sm">Предпросмотр</h2>
            <Show
              when={published()}
              fallback={
                <Badge class="ml-6" variant="secondary">
                  Черновик
                </Badge>
              }
            >
              <Badge variant="default">Опубликовано</Badge>
            </Show>
          </div>
          <div class="p-4">
            <Show
              // when={post()?.image}
              when={true}
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
              test
              {/* <img
                src={post()!.image!}
                alt=""
                class="aspect-[2/1] w-full rounded-lg object-cover"
              /> */}
            </Show>
          </div>{" "}
        </div>
        <div class="rounded-xl border border-input bg-white">
          <h2 class="border-input border-b p-4 font-semibold text-sm">
            Настройки
          </h2>
          <div class="space-y-4 px-4 py-6">
            <div class="flex flex-col gap-2">
              <Label>Категория</Label>
              <SelectCategory selected={null} onChange={() => {}} />
            </div>
            <div class="flex flex-col gap-2">
              <Label>Теги</Label>
              <SelectTags selected={[]} onChange={() => {}} />
            </div>
          </div>
          <div class="flex gap-2 border-input border-t p-4">
            <form
              class="ml-auto"
              method="post"
              // action={deletePostAction.with(postId())}
            >
              <Button type="submit" variant="secondary">
                Удалить
              </Button>
            </form>
            <form>
              <Show
                when={true}
                fallback={
                  <Button
                    type="button"
                    // onClick={() => update({ published: true })}
                  >
                    Опубликовать
                  </Button>
                }
              >
                <Button
                  type="button"
                  // onClick={() => update({ published: false })}
                >
                  Скрыть
                </Button>
              </Show>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const ModulesEditor = () => {
  const [modules, setModules] = createSignal<
    Array<{ id: number; title: string }>
  >([]);

  const addModule = () => {
    const newId = modules().length + 1;
    setModules([...modules(), { id: newId, title: `Модуль ${newId}` }]);
  };

  return (
    <div class="rounded-xl border border-input p-4">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="font-medium">Модули курса</h3>
        <Button onClick={addModule}>Добавить модуль</Button>
      </div>
      <ul class="space-y-2">
        <For each={modules()}>
          {(module) => (
            <li class="flex items-center justify-between rounded border p-2">
              <span>{module.title}</span>
              <Button variant="ghost" size="sm">
                Редактировать уроки
              </Button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
