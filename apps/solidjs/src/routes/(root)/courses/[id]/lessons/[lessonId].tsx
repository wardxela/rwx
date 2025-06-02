import { A, type RouteSectionProps, createAsync } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { Authenticated } from "#features/auth/guards";
import { UserAvatar } from "#features/user/avatar";
import { getCourseStructure } from "#queries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#ui/accordion";
import { Button } from "#ui/button";

export default function Layout(props: RouteSectionProps) {
  const courseId = () => props.params.id!;
  const structure = createAsync(() => getCourseStructure(courseId()));

  const defaultValue = () => {
    const id = structure()?.[0]?.id;
    if (!id) {
      return [];
    }
    return [id];
  };

  return (
    <Authenticated>
      <div class="fixed inset-0 bg-neutral-100">
        <div class="fixed top-0 left-0 flex h-18 w-full items-center border-neutral-100 border-r border-b bg-white px-4 md:w-100 md:border-r md:px-10">
          <div class="font-medium text-primary leading-none">Курс</div>
          {/* Mobile menu button goes here later if needed */}
          <div class="ml-auto flex items-center gap-3 md:hidden">
            <A href="/profile">
              <UserAvatar />
            </A>
          </div>
        </div>
        <header class="fixed top-0 right-0 left-full hidden h-18 items-center border-neutral-100 border-b bg-white px-10 md:left-100 md:flex">
          <A
            href={`/courses/${courseId()}`}
            class="group flex items-center gap-2.5"
          >
            <div class="group-hover:-translate-x-1 grid size-8 place-items-center rounded-full bg-primary/10 transition">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-primary"
              >
                <title>Back</title>
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-neutral-800 text-sm leading-none group-hover:text-primary">
              Вернуться к описанию курса
            </span>
          </A>
          <div class="ml-auto flex items-center gap-3">
            <A href="/profile">
              <UserAvatar />
            </A>
          </div>
        </header>
        <div class="fixed top-18 left-0 hidden h-full w-0 border-neutral-100 border-r bg-white pt-2.5 md:block md:w-100 md:border-r">
          <Suspense>
            <Accordion collapsible defaultValue={defaultValue()}>
              <For each={structure()}>
                {(module) => (
                  <AccordionItem class="px-10" value={module.id}>
                    <AccordionTrigger class="text-neutral-700">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <For each={module.lessons}>
                        {(lesson) => (
                          <div class="py-4 pl-2.5">
                            <A
                              href={`/courses/${courseId()}/lessons/${lesson.id}`}
                              class="leading-none"
                              activeClass="text-primary"
                              inactiveClass="text-neutral-600"
                            >
                              {lesson.title}
                            </A>
                          </div>
                        )}
                      </For>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </For>
            </Accordion>
          </Suspense>
        </div>
        <div class="h-full overflow-y-auto px-4 pt-26 pb-10 md:px-0 md:pl-110">
          {props.children}
        </div>
      </div>
    </Authenticated>
  );
}
