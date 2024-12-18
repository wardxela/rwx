import { Button } from "@rwx/ui/components/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@rwx/ui/components/drawer";
import type { JSX, ParentComponent } from "solid-js";
import { Show } from "solid-js";
import { CoursesSidebar } from "../courses/courses-sidebar";

export const BlogSidebar = () => {
  return (
    <div class="space-y-7">
      <div>
        <h6 class="mb-5 font-semibold text-xl">Категории</h6>
        <ul class="space-y-2">
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

export const BlogSidebarMobile = () => {
  return (
    <Drawer>
      <DrawerTrigger
        as={Button<"button">}
        variant="ghost"
        size="icon"
        class="lg:hidden"
      >
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
          <title>Filters</title>
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </DrawerTrigger>
      <DrawerContent>
        <div class="h-full max-h-[70vh] overflow-auto p-5">
          <CoursesSidebar />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

interface CheckboxTextProps {
  endText?: JSX.Element;
  showCheck?: boolean;
}

const TextCheckbox: ParentComponent<CheckboxTextProps> = (props) => {
  return (
    <label class="group">
      <input type="checkbox" class="sr-only" />
      <div class="flex grow cursor-pointer select-none items-center justify-between gap-1 text-neutral-800 group-has-checked:font-medium group-has-checked:text-black">
        <div>{props.children}</div>
        <Show when={props.endText}>
          <div>{props.endText}</div>
        </Show>
      </div>
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
