import type { Component} from "solid-js";
import { Match, Show, Switch } from "solid-js";

import {
  formatTimeDelta,
  getRussianOrdinalPluralWord,
} from "~/shared/utils/intl";

export interface CourseRelevantCardProps {
  preview: string;
  title: string;
  author: string;
  category: string;
  durationMs: number;
  studentsCount: number;
  price: number;
  oldPrice?: number;
}

export const CourseRelevantCard: Component<CourseRelevantCardProps> = (
  props,
) => {
  const durationText = () => formatTimeDelta(props.durationMs);

  const studentsText = () =>
    getRussianOrdinalPluralWord({
      count: props.studentsCount,
      one: "Студент",
      few: "Студента",
      many: "Студентов",
    });

  return (
    <div class="relative rounded-2xl border border-gray-200">
      <img
        src={props.preview}
        alt="course"
        class="aspect-[1.64/1] w-full rounded-t-2xl"
      />
      <div class="absolute top-5 left-5 grid h-10 place-items-center rounded-lg bg-black px-3 py-2 text-white">
        <div class="font-medium">{props.category}</div>
      </div>
      <div class="p-5">
        <div class="mb-3">
          <span class="text-neutral-600">Автор: </span>
          <span>{props.author}</span>
        </div>
        <h6 class="mb-4 text-xl font-semibold">{props.title}</h6>
        <div class="mb-4 flex flex-wrap items-center gap-6">
          <div class="flex items-center gap-2">
            <img src="/duration.svg" alt="duration" class="size-4" />
            <div class="text-sm text-neutral-600">{durationText()}</div>
          </div>
          <div class="flex items-center gap-2">
            <img src="/students.svg" alt="students" class="size-4" />
            <div class="text-sm text-neutral-600">
              {props.studentsCount} {studentsText()}
            </div>
          </div>
        </div>
        <hr class="mb-4 h-px border-gray-200" />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Show when={props.oldPrice !== undefined}>
              <div class="text-neutral-400 line-through">{props.oldPrice}₽</div>
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
          <a href="/" class="font-medium">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};
