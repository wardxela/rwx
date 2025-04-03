import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
// @ts-expect-error
import Link from "@editorjs/link";
import List from "@editorjs/list";
import { Checkbox } from "@rwx/ui/components/checkbox";
import { Label } from "@rwx/ui/components/label";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";

export default function Page() {
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
    <div>
      <div class="mx-auto max-w-5xl px-10 py-8">
        <h1 class="mb-2 font-semibold">Блог</h1>
        <div class="mb-8 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
          <TextField class="col-span-2">
            <TextFieldLabel>Название</TextFieldLabel>
            <TextFieldInput type="text" placeholder="Lorem ipsum..." />
          </TextField>
          <TextField class="col-span-2">
            <TextFieldLabel>Изображение</TextFieldLabel>
            <TextFieldInput type="file" />
          </TextField>
          <TextField class="col-span-4 row-start-2">
            <TextFieldLabel>Краткое описание</TextFieldLabel>
            <TextFieldTextArea placeholder="Lorem ipsum dolor sit amet..." />
          </TextField>
          <div class="col-span-2 row-start-3 flex items-start space-x-2">
            <Checkbox id="draft" />
            <div class="grid gap-1.5 leading-none">
              <Label for="draft-input">Опубликовать</Label>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-2 font-medium text-sm leading-none">Редактор</div>
          <div class="rounded-xl border border-input py-16">
            <div ref={setupEditor} />
          </div>
        </div>
      </div>
    </div>
  );
}
