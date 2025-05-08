import EditorJS, { type OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
// @ts-expect-error
import Link from "@editorjs/link";
import List from "@editorjs/list";
import { type Component, createUniqueId, onCleanup, onMount } from "solid-js";

export interface EditorProps {
  initialData: unknown;
  onInit?: (editor: EditorJS) => void;
  onDestroy?: (editor: EditorJS) => void;
}

export const Editor: Component<EditorProps> = (props) => {
  let editor: EditorJS;

  const id = createUniqueId();

  onMount(() => {
    editor = new EditorJS({
      holder: id,
      data: props.initialData as OutputData,
      tools: {
        header: Header,
        link: Link,
        image: Image,
        list: List,
      },
      onChange() {
        // IDEA: SAVE IN LOCAL STORAGE
        // editor.save().then((content) => props.onSave?.(content));
      },
    });
    props.onInit?.(editor);
  });

  onCleanup(() => {
    props.onDestroy?.(editor);
    editor.destroy();
  });

  return (
    <div class="rounded-xl border border-input p-16">
      <div id={id} />
    </div>
  );
};
