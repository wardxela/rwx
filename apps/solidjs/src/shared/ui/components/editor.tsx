import CodeTool from "@editorjs/code";
import EditorJS, { type OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
// @ts-expect-error
import Link from "@editorjs/link";
import List from "@editorjs/list";
import { type Component, createUniqueId, onCleanup, onMount } from "solid-js";
import api from "#api";

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
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file: File) {
                const formData = new FormData();
                formData.append("file", file);
                const image = await api.POST("/files/upload", {
                  // @ts-expect-error
                  body: formData,
                });
                if (!image.data) {
                  return {
                    success: 0,
                  };
                }
                return {
                  success: 1,
                  file: {
                    url: `${import.meta.env.VITE_API_URL}${image.data.url}`,
                  },
                };
              },
            },
          },
        },
        list: List,
        code: CodeTool,
      },
      i18n: {
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "Нажмите, чтобы настроить",
                "or drag to move": "или перетащите",
              },
            },
            inlineToolbar: {
              converter: {
                "Convert to": "Конвертировать в",
              },
            },
            toolbar: {
              toolbox: {
                Add: "Добавить",
              },
            },
            popover: {
              Filter: "Поиск",
              "Nothing found": "Ничего не найдено",
            },
          },

          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            Text: "Параграф",
            Heading: "Заголовок",
            List: "Список",
            Warning: "Примечание",
            Checklist: "Чеклист",
            Quote: "Цитата",
            Code: "Код",
            Delimiter: "Разделитель",
            "Raw HTML": "HTML-фрагмент",
            Table: "Таблица",
            Link: "Ссылка",
            Marker: "Маркер",
            Bold: "Полужирный",
            Italic: "Курсив",
            InlineCode: "Моноширинный",
            Image: "Картинка",
          },

          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            warning: {
              // <-- 'Warning' tool will accept this dictionary section
              Title: "Название",
              Message: "Сообщение",
            },

            /**
             * Link is the internal Inline Tool
             */
            link: {
              "Add a link": "Вставьте ссылку",
            },
            /**
             * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
             */
            stub: {
              "The block can not be displayed correctly.":
                "Блок не может быть отображен",
            },
            image: {
              Caption: "Подпись",
              "Select an Image": "Выберите файл",
              "With border": "Добавить рамку",
              "Stretch image": "Растянуть",
              "With background": "Добавить подложку",
            },
            code: {
              "Enter a code": "Код",
            },
            linkTool: {
              Link: "Ссылка",
              "Couldn't fetch the link data": "Не удалось получить данные",
              "Couldn't get this link data, try the other one":
                "Не удалось получить данные по ссылке, попробуйте другую",
              "Wrong response format from the server": "Неполадки на сервере",
            },
            header: {
              Header: "Заголовок",
            },
            paragraph: {
              "Enter something": "Введите текст",
            },
            list: {
              Ordered: "Нумерованный",
              Unordered: "Маркированный",
            },
          },

          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            delete: {
              Delete: "Удалить",
            },
            moveUp: {
              "Move up": "Переместить вверх",
            },
            moveDown: {
              "Move down": "Переместить вниз",
            },
          },
        },
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
