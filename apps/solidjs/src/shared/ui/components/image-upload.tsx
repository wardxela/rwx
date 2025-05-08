import { Show, createSignal } from "solid-js";
import { Label } from "./label";

export interface ImageUploadProps {
  onChange?: (file: File) => void;
}

export const ImageUpload = (props: ImageUploadProps) => {
  const [dragActive, setDragActive] = createSignal(false);
  const [file, setFile] = createSignal<File | null>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer?.files;
    if (!files) {
      return;
    }

    handleFiles(files);
  };

  const handleChange = (e: Event) => {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    handleFiles(files);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files?.[0]) {
      return;
    }
    const file = files[0];

    // Check file type
    if (!file.type.match("image.*")) {
      alert("Please upload an image file");
      return;
    }

    // Check file size (10MB = 10 * 1024 * 1024 bytes)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size should be less than 10MB");
      return;
    }

    setFile(file);

    props.onChange?.(file);
  };

  return (
    <div>
      <Label class="my-2 block">Изображение</Label>
      <div
        class={`flex justify-center rounded-lg border border-dashed px-6 py-10 transition ${dragActive() ? "border-primary bg-primary/10" : "border-gray-900/25"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div class="text-center">
          <svg
            class="mx-auto size-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="mt-4 flex justify-center text-gray-600 text-sm/6">
            <label class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary">
              <span>Загрузите файл</span>
              <input
                type="file"
                class="sr-only"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
            <p class="pl-1">или перетащите</p>
          </div>
          <p class="text-gray-600 text-xs/5">PNG, JPG, GIF до 10MB</p>
          <Show when={file()}>
            <p class="mt-2 text-gray-600 text-sm">
              Отравлен файл: {file()?.name}
            </p>
          </Show>
        </div>
      </div>
    </div>
  );
};
