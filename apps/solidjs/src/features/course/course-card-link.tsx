import type { Component } from "solid-js";
import { Match, Show, Switch } from "solid-js";

import type { paths } from "@rwx/api";
import { A } from "@solidjs/router";
import { formatTimeDelta, getRussianOrdinalPluralWord } from "#intl";
import { Skeleton } from "#ui/skeleton";

export interface CourseCardLinkProps {
  data: paths["/courses"]["get"]["responses"]["200"]["content"]["application/json"]["page"][number];
  href: string;
}

export const CourseCardLink: Component<CourseCardLinkProps> = (props) => {
  const durationText = () => formatTimeDelta(props.data.duration);

  const studentsText = () =>
    getRussianOrdinalPluralWord({
      count: props.data.studentsCount,
      one: "Студент",
      few: "Студента",
      many: "Студентов",
    });

  const lessonsText = () =>
    getRussianOrdinalPluralWord({
      count: props.data.lessonsCount,
      one: "Занятие",
      few: "Занятия",
      many: "Занятий",
    });

  return (
    <div class="@container">
      <div class="relative flex h-full @lg:flex-row flex-col rounded-2xl border border-gray-200">
        <img
          src={props.data.image ?? "/placeholder.jpg"}
          alt={props.data.title}
          class="@lg:h-auto h-52 @lg:min-h-62 @lg:max-w-1/3 rounded-t-2xl @lg:rounded-l-2xl @lg:rounded-tr-none object-cover"
        />
        <Show when={props.data.category}>
          <div class="absolute top-5 left-5 grid h-10 place-items-center rounded-lg bg-black px-3 py-2 text-white">
            <div class="font-medium">{props.data.category?.name}</div>
          </div>
        </Show>
        <div class="flex grow flex-col @xl:p-5 p-4 @xl:text-base text-sm">
          <div class="mb-3">
            <span class="text-neutral-600">Автор: </span>
            <span>
              {props.data.author.firstName} {props.data.author.lastName}
            </span>
          </div>
          <h6 class="mb-4 font-semibold @xl:text-xl text-lg">
            {props.data.title}
          </h6>
          <div class="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2.5">
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
              <div class="text-neutral-600 text-sm leading-4">
                {durationText()}
              </div>
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
              <div class="text-neutral-600 text-sm leading-4">
                {props.data.studentsCount} {studentsText()}
              </div>
            </div>
            <Show when={props.data.lessonsCount !== undefined}>
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
                <div class="text-neutral-600 text-sm leading-4">
                  {props.data.lessonsCount} {lessonsText()}
                </div>
              </div>
            </Show>
            <div class="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="text-primary"
              >
                <title>Rating</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                />
              </svg>
              <div class="text-neutral-600 text-sm leading-4">
                {props.data.averageRating}
              </div>
            </div>
          </div>
          <hr class="my-4 h-px border-gray-200" />
          <div class="flex items-center justify-between">
            <div class="flex flex-wrap items-center gap-2 @xl:text-base text-sm">
              <Show when={props.data.oldPrice !== undefined}>
                <div class="text-neutral-400 line-through">
                  {props.data.oldPrice}₽
                </div>
              </Show>
              <Show
                when={props.data.price}
                fallback={<div class="text-green-600">Бесплатно</div>}
              >
                <div class="font-medium text-orange-500">
                  {props.data.price}₽
                </div>
              </Show>
            </div>
            <A href={props.href} class="font-medium @xl:text-base text-sm">
              Подробнее
            </A>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CourseLinkSkeleton() {
  return (
    <div class="flex flex-col">
      <Skeleton class="h-52 rounded-2xl" />
      <div class="flex grow flex-col px-4 py-5">
        <Skeleton class="mb-3 h-4 w-2/5" />
        <Skeleton class="mb-4 h-4" />
        <div class="mb-6 grid w-3/4 grid-cols-3 gap-2">
          <Skeleton class="h-4" />
          <Skeleton class="h-4" />
          <Skeleton class="h-4" />
          <Skeleton class="h-4" />
        </div>
        <div class="flex justify-between gap-2">
          <Skeleton class="h-4 w-1/3" />
          <Skeleton class="h-4 w-1/4" />
        </div>
      </div>
    </div>
  );
}
