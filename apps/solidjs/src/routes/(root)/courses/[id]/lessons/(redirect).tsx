import { type RouteSectionProps, createAsync } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { RedirectEffect } from "#features/site/redirect";
import { getCourseStructure } from "#queries";

export default function Page(props: RouteSectionProps) {
  const courseId = () => props.params.id!;
  const structure = createAsync(() => getCourseStructure(courseId()));

  return (
    <Suspense>
      <Show when={structure()}>
        <RedirectEffect
          link={`/courses/${courseId()}/lessons/${structure()?.[0]?.lessons?.[0]?.id}`}
        />
      </Show>
    </Suspense>
  );
}
