import EditorJS, { type OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
// @ts-expect-error
import Link from "@editorjs/link";
import List from "@editorjs/list";
import { type Component, createUniqueId, onCleanup, onMount } from "solid-js";

export interface EditorProps {
  initialData: unknown;
  onSave?: (data: OutputData) => void;
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
        editor.save().then((content) => props.onSave?.(content));
      },
    });
  });

  onCleanup(() => {
    editor.destroy();
  });

  return <div id={id} />;
};
