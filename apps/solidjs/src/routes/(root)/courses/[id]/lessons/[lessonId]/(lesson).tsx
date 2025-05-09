import edjsHTML from "editorjs-html";

import { type RouteSectionProps, createAsync } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { getCourseLesson, getCourseStructure } from "#queries";

const edjsParser = edjsHTML();

export default function Page(props: RouteSectionProps) {
  const lessonId = () => props.params.lessonId!;
  const lesson = createAsync(() => getCourseLesson(lessonId()));

  const content = () => {
    const json = lesson()?.content;
    if (!json) {
      return "";
    }
    try {
      // @ts-expect-error It is OutputData
      return edjsParser.parse(json);
    } catch {
      return "Запись в разработке...";
    }
  };

  return (
    <Suspense>
      <div class="prose mx-auto max-w-4xl" innerHTML={content()} />
    </Suspense>
  );
}
