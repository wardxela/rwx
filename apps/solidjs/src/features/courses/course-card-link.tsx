import type { Component } from "solid-js";
import { Match, Show, Switch } from "solid-js";

import {
  formatTimeDelta,
  getRussianOrdinalPluralWord,
} from "~/shared/utils/intl";

export interface CourseCardLinkProps {
  preview: string;
  title: string;
  author: string;
  category: string;
  durationMs: number;
  studentsCount: number;
  price: number;
  oldPrice?: number;
  lessonsCount?: number;
  level?: string;
}

export const CourseCardLink: Component<CourseCardLinkProps> = (props) => {
  const durationText = () => formatTimeDelta(props.durationMs);

  const studentsText = () =>
    getRussianOrdinalPluralWord({
      count: props.studentsCount,
      one: "Студент",
      few: "Студента",
      many: "Студентов",
    });

  const lessontsText = () =>
    getRussianOrdinalPluralWord({
      count: props.lessonsCount ?? 0,
      one: "Занятие",
      few: "Занятия",
      many: "Занятий",
    });

  return (
    <div class="@container">
      <div class="relative flex h-full @lg:flex-row flex-col rounded-2xl border border-gray-200">
        <img
          src={props.preview}
          alt="course"
          class="@lg:h-auto h-52 @lg:min-h-62 @lg:max-w-1/3 rounded-t-2xl @lg:rounded-l-2xl @lg:rounded-tr-none object-cover"
        />
        <div class="absolute top-5 left-5 grid h-10 place-items-center rounded-lg bg-black px-3 py-2 text-white">
          <div class="font-medium">{props.category}</div>
        </div>
        <div class="flex grow flex-col @xl:p-5 p-4 @xl:text-base text-sm">
          <div class="mb-3">
            <span class="text-neutral-600">Автор: </span>
            <span>{props.author}</span>
          </div>
          <h6 class="mb-4 font-semibold @xl:text-xl text-lg">{props.title}</h6>
          <div class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2.5">
            <div class="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-primary"
              >
                <title>Duration</title>
                <path
                  d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="text-neutral-600 text-sm">{durationText()}</div>
            </div>
            <div class="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-primary"
              >
                <title>Students</title>
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <div class="text-neutral-600 text-sm">
                {props.studentsCount} {studentsText()}
              </div>
            </div>
            <Show when={props.level !== undefined}>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Difficutly</title>
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
                <div class="text-neutral-600 text-sm">{props.level}</div>
              </div>
            </Show>
            <Show when={props.lessonsCount !== undefined}>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Lessons</title>
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
                <div class="text-neutral-600 text-sm">
                  {props.lessonsCount} {lessontsText()}
                </div>
              </div>
            </Show>
          </div>
          <hr class="mt-auto mb-4 h-px border-gray-200" />
          <div class="flex items-center justify-between">
            <div class="flex flex-wrap items-center gap-2 @xl:text-base text-sm">
              <Show when={props.oldPrice !== undefined}>
                <div class="text-neutral-400 line-through">
                  {props.oldPrice}₽
                </div>
              </Show>
              <Switch>
                <Match when={!props.price}>
                  <div class="text-green-600">Бесплатно</div>
                </Match>
                <Match when={props.price}>
                  <div class="font-medium text-orange-500">{props.price}₽</div>
                </Match>
              </Switch>
            </div>
            <a href="/courses/1" class="font-medium @xl:text-base text-sm">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
