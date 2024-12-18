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
          <div class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <div class="flex items-center gap-2">
              <img src="/duration.svg" alt="duration" class="size-4" />
              <div class="text-neutral-600 text-sm">{durationText()}</div>
            </div>
            <div class="flex items-center gap-2">
              <img src="/students.svg" alt="students" class="size-4" />
              <div class="text-neutral-600 text-sm">
                {props.studentsCount} {studentsText()}
              </div>
            </div>
            <Show when={props.lessonsCount !== undefined}>
              <div class="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Количество занятий</title>
                  <g clip-path="url(#clip0_3288_1511)">
                    <path
                      d="M10.6666 0.666626H2.66659C1.93325 0.666626 1.33325 1.26663 1.33325 1.99996V11.3333H2.66659V1.99996H10.6666V0.666626ZM9.99992 3.33329L13.9999 7.33329V14C13.9999 14.7333 13.3999 15.3333 12.6666 15.3333H5.32659C4.59325 15.3333 3.99992 14.7333 3.99992 14L4.00659 4.66663C4.00659 3.93329 4.59992 3.33329 5.33325 3.33329H9.99992ZM9.33325 7.99996H12.9999L9.33325 4.33329V7.99996Z"
                      fill="#FF782D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3288_1511">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
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
            <a href="/" class="font-medium @xl:text-base text-sm">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
