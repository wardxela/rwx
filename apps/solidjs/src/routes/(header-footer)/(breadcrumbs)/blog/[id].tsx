import type { Component } from "solid-js";
import { For, Show } from "solid-js";

import { Button } from "@rwx/ui/components/button";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";

export default function Page() {
  return (
    <>
      <h1 class="mb-4 font-semibold text-xl leading-7 sm:mb-5 sm:text-4xl sm:leading-10">
        Lorem Ipsum is simply dummy text
      </h1>
      <div class="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:mb-10">
        <div class="flex items-center gap-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Автор</title>
            <path
              d="M3.33366 3.33335C3.33366 1.86002 4.52699 0.666687 6.00033 0.666687C7.47366 0.666687 8.66699 1.86002 8.66699 3.33335C8.66699 4.80669 7.47366 6.00002 6.00033 6.00002C4.52699 6.00002 3.33366 4.80669 3.33366 3.33335Z"
              fill="#FF782D"
            />
            <path
              d="M0.666992 9.33335C0.666992 7.56002 4.22033 6.66669 6.00033 6.66669C7.78032 6.66669 11.3337 7.56002 11.3337 9.33335V11.3334H0.666992V9.33335Z"
              fill="#FF782D"
            />
          </svg>
          <span class="text-neutral-600">Determined-poitras</span>
        </div>
        <div class="flex items-center gap-1">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Дата</title>
            <g clip-path="url(#clip0_3233_1176)">
              <path
                d="M13.3333 2.79964H12.6667V1.46631H11.3333V2.79964H4.66668V1.46631H3.33334V2.79964H2.66668C1.93334 2.79964 1.33334 3.39964 1.33334 4.13298V14.7996C1.33334 15.533 1.93334 16.133 2.66668 16.133H13.3333C14.0667 16.133 14.6667 15.533 14.6667 14.7996V4.13298C14.6667 3.39964 14.0667 2.79964 13.3333 2.79964ZM13.3333 14.7996H2.66668V6.13298H13.3333V14.7996Z"
                fill="#FF782D"
              />
            </g>
            <defs>
              <clipPath id="clip0_3233_1176">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.799805)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="text-neutral-600">Jan 24, 22023</span>
        </div>
        <div class="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Комментарии</title>
            <path
              d="M12.333 0.333313H1.66634C0.933008 0.333313 0.333008 0.933313 0.333008 1.66665V13.6666L2.99967 11H12.333C13.0663 11 13.6663 10.4 13.6663 9.66665V1.66665C13.6663 0.933313 13.0663 0.333313 12.333 0.333313Z"
              fill="#FF782D"
            />
          </svg>
          <span class="text-neutral-600">20 Comments</span>
        </div>
      </div>
      <img
        src="/blog-article.png"
        alt="blog preview"
        class="mb-5 w-full rounded-3xl sm:mb-10"
      />
      <div class="mb-5 space-y-4 text-neutral-600 leading-7 sm:mb-10 sm:text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
          donec turpis egestas volutpat. Quisque nec non amet quis. Varius
          tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
          ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
          cras purus. At eget euismod cursus non. Molestie dignissim sed
          volutpat feugiat vel enim eu turpis imperdiet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
          donec turpis egestas volutpat. Quisque nec non amet quis. Varius
          tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
          ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
          cras purus.
        </p>
      </div>
      <div class="mb-7 flex flex-wrap items-center gap-2 sm:mb-14">
        <div class="mr-3 text-lg text-neutral-600">Теги:</div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          Бесплатные курсы
        </div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          Маркетинг
        </div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          Идея
        </div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          LMS
        </div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          ЧИП
        </div>
        <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
          Преподаватель
        </div>
      </div>
      <div class="mb-7 flex items-center gap-4 sm:mb-14 md:gap-7">
        <a
          href="/blog/1"
          class="group flex grow items-center gap-6 rounded-lg border border-neutral-200 transition hover:bg-neutral-100 sm:grow-0 sm:rounded-3xl sm:p-8"
        >
          <div class="grid h-12 w-full shrink-0 place-items-center rounded-lg bg-neutral-100 text-neutral-400 transition group-hover:bg-neutral-300 group-hover:text-neutral-600 sm:w-12">
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Предыдущая статья</title>
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="hidden sm:block">
            <div class="mb-3 text-lg text-neutral-600">Назад</div>
            <div class="font-semibold text-xl">
              Best LearnPress WordPress Theme Collection for 2023
            </div>
          </div>
        </a>
        <a
          href="/blog/1"
          class="group flex grow items-center gap-6 rounded-lg border border-neutral-200 transition hover:bg-neutral-100 sm:grow-0 sm:rounded-3xl sm:p-8"
        >
          <div class="hidden sm:block">
            <div class="mb-3 text-lg text-neutral-600">Назад</div>
            <div class="font-semibold text-xl">
              Best LearnPress WordPress Theme Collection for 2023
            </div>
          </div>
          <div class="grid h-12 w-full shrink-0 place-items-center rounded-lg bg-neutral-100 text-neutral-400 transition group-hover:bg-neutral-300 group-hover:text-neutral-600 sm:w-12">
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Следующая статья</title>
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
      <div>
        <h6 class="mb-3 font-semibold text-xl">Комментарии</h6>
        <div class="mb-5 text-neutral-600 sm:mb-10 sm:text-lg">
          20 комментариев
        </div>
        <div class="mb-4 font-semibold text-lg sm:mb-7">
          Оставить комментарий
        </div>
        <form class="mb-10 grid grid-cols-2 gap-4 sm:gap-7">
          <TextField validationState="invalid">
            <TextFieldInput
              class="border-destructive"
              type="text"
              required
              placeholder="Имя*"
            />
            <TextFieldErrorMessage>Обязательное поле</TextFieldErrorMessage>
          </TextField>
          <TextField validationState="invalid">
            <TextFieldInput
              class="border-destructive"
              type="email"
              required
              placeholder="Email*"
            />
            <TextFieldErrorMessage>Неверный формат почты</TextFieldErrorMessage>
          </TextField>
          <TextField class="col-span-2">
            <TextFieldTextArea required placeholder="Комментарий*" />
          </TextField>
          <div>
            <Button>Отправить</Button>
          </div>
        </form>
        <div class="space-y-5">
          <ArticleComment
            author="John Doe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet."
            date="Jan 24, 2023"
          />
          <ArticleComment
            author="John Doe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet."
            date="Jan 24, 2023"
          />
          <ArticleComment
            author="John Doe"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet."
            date="Jan 24, 2023"
            comments={[
              {
                author: "John Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet.",
                date: "Jan 24, 2023",
              },
              {
                author: "John Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet.",
                date: "Jan 24, 2023",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

interface ArticleCommentProps {
  author: string;
  text: string;
  date: string;
  comments?: ArticleCommentProps[];
}

const ArticleComment: Component<ArticleCommentProps> = (props) => {
  return (
    <div>
      <div class="grid grid-cols-[56px_1fr] gap-2.5 border-neutral-200 border-t pt-5 sm:gap-5">
        <img
          src="/person.png"
          alt="person"
          class="aspect-square size-12 object-cover sm:size-14"
        />
        <div>
          <div class="mb-3 flex justify-between gap-2">
            <div class="font-semibold text-sm sm:text-base">{props.author}</div>
            <div class="text-neutral-600 text-sm sm:text-base">
              {props.date}
            </div>
          </div>
          <div class="text-neutral-600 leading-7 sm:text-lg">{props.text}</div>
        </div>
      </div>
      <Show when={props.comments?.length}>
        <div class="mt-5 ml-10 space-y-5">
          <For each={props.comments}>
            {(comment) => (
              <ArticleComment
                author={comment.author}
                text={comment.text}
                date={comment.date}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
