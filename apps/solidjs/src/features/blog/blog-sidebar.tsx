import type { JSX, ParentComponent } from "solid-js";
import { Show } from "solid-js";

export const BlogSidebar = () => {
  return (
    <div class="space-y-7">
      <div>
        <h6 class="mb-5 font-semibold text-xl">Категории</h6>
        <ul class="space-y-4">
          <li>
            <TextCheckbox endText="15">Коммерческие</TextCheckbox>
          </li>
          <li>
            <TextCheckbox endText="15">Офис</TextCheckbox>
          </li>
          <li>
            <TextCheckbox endText="15">Магазин</TextCheckbox>
          </li>
          <li>
            <TextCheckbox endText="15">Образование</TextCheckbox>
          </li>
          <li>
            <TextCheckbox endText="15">Академия</TextCheckbox>
          </li>
          <li>
            <TextCheckbox endText="15">Дом</TextCheckbox>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-5 font-semibold text-xl">Недавние Записи</h6>
        <ul class="space-y-4">
          <li>
            <a href="/" class="group flex gap-4">
              <img
                alt="DYNAMIC_DATA"
                src="/course-preview.png"
                class="aspect-square max-w-24 shrink-0 rounded-xl object-cover transition group-hover:brightness-90"
              />
              <div class="grow font-medium transition group-hover:text-primary">
                Best LearnPress WordPress Theme Collection for 2023
              </div>
            </a>
          </li>
          <li>
            <a href="/" class="group flex gap-4">
              <img
                alt="DYNAMIC_DATA"
                src="/course-preview.png"
                class="aspect-square max-w-24 shrink-0 rounded-xl object-cover transition group-hover:brightness-90"
              />
              <div class="grow font-medium transition group-hover:text-primary">
                Best LearnPress WordPress Theme Collection for 2023
              </div>
            </a>
          </li>
          <li>
            <a href="/" class="group flex gap-4">
              <img
                alt="DYNAMIC_DATA"
                src="/course-preview.png"
                class="aspect-square max-w-24 shrink-0 rounded-xl object-cover transition group-hover:brightness-90"
              />
              <div class="grow font-medium transition group-hover:text-primary">
                Best LearnPress WordPress Theme Collection for 2023
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 class="mb-5 font-semibold text-xl">Теги</h6>
        <div class="flex flex-wrap gap-2">
          <TagCheckbox>Бесплатные курсы</TagCheckbox>
          <TagCheckbox>Маркетинг</TagCheckbox>
          <TagCheckbox>Идея</TagCheckbox>
          <TagCheckbox>ЧИП</TagCheckbox>
          <TagCheckbox>Преподаватель</TagCheckbox>
        </div>
      </div>
    </div>
  );
};

interface CheckboxTextProps {
  endText?: JSX.Element;
  showCheck?: boolean;
}

const TextCheckbox: ParentComponent<CheckboxTextProps> = (props) => {
  return (
    <label class="flex cursor-pointer items-center gap-1 text-neutral-400 leading-none hover:text-neutral-600">
      <input type="checkbox" class="peer sr-only" />
      <Show when={props.showCheck}>
        <div class="grid size-3 place-items-center rounded-sm border border-neutral-600 text-transparent transition peer-checked:border-black peer-checked:text-black">
          <svg
            width="10"
            height="10"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Чекбокс</title>
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </Show>
      <div class="transition peer-checked:font-medium peer-checked:text-black">
        {props.children}
      </div>
      <Show when={props.endText}>
        <div class="ml-auto transition peer-checked:font-medium peer-checked:text-black">
          {props.endText}
        </div>
      </Show>
    </label>
  );
};

const TagCheckbox: ParentComponent = (props) => {
  return (
    <label>
      <input class="peer sr-only" type="checkbox" />
      <div class="inline-flex cursor-pointer gap-2.5 rounded-lg border border-gray-200 px-5 py-2 text-lg leading-7 transition hover:bg-neutral-100 peer-checked:bg-neutral-200!">
        {props.children}
      </div>
    </label>
  );
};
