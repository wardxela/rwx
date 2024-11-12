import type { Component } from "solid-js";

import { getRussianOrdinalPluralWord } from "~/shared/utils/intl";

export interface CourseCategoryLinkProps {
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
      class="group inline-flex aspect-square flex-col items-center justify-center gap-6 rounded-3xl border border-gray-200 transition hover:-translate-y-4 hover:shadow-lg"
    >
      <div class="relative grid h-8 w-8 place-items-center">
        <img src={props.imgSrc} alt="icon" />
      </div>
      <div class="flex flex-col items-center justify-start gap-3">
        <div class="text-xl font-semibold capitalize transition group-hover:text-orange-500">
          {props.title}
        </div>
        <div class="text-lg leading-7 text-neutral-600">
          {props.count} {coursesText()}
        </div>
      </div>
    </a>
  );
};
