import { cn } from "#ui/utils";

import type { Component } from "solid-js";

import { getRussianOrdinalPluralWord } from "#intl";

export interface CourseCategoryLinkProps {
  class?: string | undefined;
  href: string;
  imgSrc: string;
  title: string;
  count: number;
}

export const CourseCategoryLink: Component<CourseCategoryLinkProps> = (
  props,
) => {
  const coursesText = () =>
    getRussianOrdinalPluralWord({
      count: props.count,
      one: "Курс",
      few: "Курса",
      many: "Курсов",
    });

  return (
    <a
      href={props.href}
      class={cn(
        "group hover:-translate-y-2 sm:hover:-translate-y-4 inline-flex aspect-square flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 transition hover:shadow-lg sm:gap-6",
        props.class,
      )}
    >
      <div class="relative grid h-8 w-8 place-items-center">
        <img src={props.imgSrc} alt="icon" />
      </div>
      <div class="flex flex-col items-center justify-start gap-2 sm:gap-3">
        <div class="font-semibold text-lg capitalize transition group-hover:text-orange-500 sm:text-xl">
          {props.title}
        </div>
        <div class="text-neutral-600 leading-7 sm:text-lg">
          {props.count} {coursesText()}
        </div>
      </div>
    </a>
  );
};
