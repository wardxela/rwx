import { Button } from "@rwx/ui/components/button";
import { Checkbox } from "@rwx/ui/components/checkbox";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@rwx/ui/components/drawer";
import { TextField, TextFieldInput } from "@rwx/ui/components/text-field";
import { Toggle } from "@rwx/ui/components/toggle";
import {
  type Component,
  For,
  type JSX,
  Show,
  createSignal,
  createUniqueId,
} from "solid-js";
import type { ParentComponent } from "solid-js/types/server/rendering.js";
import { CourseCardLink } from "~/features/courses/course-card-link";

export default function Page() {
  const [isGridView, setIsGridView] = createSignal(true);

  return (
    <div class="container grid gap-7 lg:grid-cols-[1fr_270px] pt-8 pb-12 sm:pt-16 sm:pb-24">
      <div>
        <div class="sm:flex gap-2 mb-8 sm:mb-10 items-center justify-between">
          <h1 class="text-2xl sm:text-4xl font-semibold leading-10 mb-4">
            Все курсы
          </h1>
          <div class="flex gap-2 items-center">
            <TextField>
              <TextFieldInput type="search" placeholder="Поиск" />
            </TextField>
            <Toggle
              pressed={isGridView()}
              onChange={setIsGridView}
              class="cursor-pointer text-primary ml-auto sm:ml-0"
            >
              {(state) => (
                <Show
                  when={state.pressed()}
                  fallback={
                    <svg
                      class="size-4"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>List view</title>
                      <path
                        d="M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      />
                    </svg>
                  }
                >
                  <svg
                    class="size-4"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Grid view</title>
                    <path
                      d="M7 2H1.5C1.22386 2 1 2.22386 1 2.5V7H7V2ZM8 2V7H14V2.5C14 2.22386 13.7761 2 13.5 2H8ZM7 8H1V12.5C1 12.7761 1.22386 13 1.5 13H7V8ZM8 13V8H14V12.5C14 12.7761 13.7761 13 13.5 13H8ZM1.5 1C0.671573 1 0 1.67157 0 2.5V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H1.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Show>
              )}
            </Toggle>
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
                <div class="h-full overflow-auto max-h-[70vh] p-5">
                  <Sidebar />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div
          classList={{
            "grid gap-4": true,
            "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]": isGridView(),
          }}
        >
          <CourseCardLink
            view={isGridView() ? "vertical" : "horizontal"}
            preview="/course-preview.png"
            author="Артем Неизвестный"
            title="Создай веб-сайт с помощью  LMS plugin"
            category="Фотосъемка"
            lessonsCount={10}
            durationMs={2 * 2592000000}
            studentsCount={156}
            oldPrice={19999}
            price={0}
          />
          <CourseCardLink
            view={isGridView() ? "vertical" : "horizontal"}
            preview="/course-preview.png"
            author="Артем Неизвестный"
            title="Создай веб-сайт с помощью  LMS plugin"
            category="Фотосъемка"
            lessonsCount={11}
            durationMs={2 * 2592000000}
            studentsCount={156}
            oldPrice={19999}
            price={0}
          />
          <CourseCardLink
            view={isGridView() ? "vertical" : "horizontal"}
            preview="/course-preview.png"
            author="Артем Неизвестный"
            title="Создай веб-сайт с помощью  LMS plugin"
            category="Фотосъемка"
            lessonsCount={0}
            durationMs={2 * 2592000000}
            studentsCount={156}
            oldPrice={19999}
            price={0}
          />
          <CourseCardLink
            view={isGridView() ? "vertical" : "horizontal"}
            preview="/course-preview.png"
            author="Артем Неизвестный"
            title="Создай веб-сайт с помощью  LMS plugin"
            category="Фотосъемка"
            durationMs={5 * 604800000}
            studentsCount={101}
            oldPrice={19999}
            price={11999}
          />
        </div>
      </div>
      <div class="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div class="space-y-7">
      <div>
        <h6 class="mb-5 text-xl font-semibold">Категории</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Коммерческие</TextCheckbox>
          <TextCheckbox endText="15">Офис</TextCheckbox>
          <TextCheckbox endText="15">Магазин</TextCheckbox>
          <TextCheckbox endText="15">Образование</TextCheckbox>
          <TextCheckbox endText="15">Академия</TextCheckbox>
          <TextCheckbox endText="15">Дом</TextCheckbox>
          <TextCheckbox endText="15">Студия</TextCheckbox>
          <TextCheckbox endText="15">Университет</TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 text-xl font-semibold">Преподаватели</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Некто Первый</TextCheckbox>
          <TextCheckbox endText="15">Некто Второй</TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 text-xl font-semibold">Цена</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Все</TextCheckbox>
          <TextCheckbox endText="15">Бесплатные</TextCheckbox>
          <TextCheckbox endText="15">Платные</TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 text-xl font-semibold">Отзывы</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">
            <Stars count={3} />
          </TextCheckbox>
          <TextCheckbox endText="15">
            <Stars count={4} />
          </TextCheckbox>
          <TextCheckbox endText="15">
            <Stars />
          </TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 text-xl font-semibold">Уровень</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Все</TextCheckbox>
          <TextCheckbox endText="15">Начинающий</TextCheckbox>
          <TextCheckbox endText="15">Продвинутый</TextCheckbox>
          <TextCheckbox endText="15">Эксперт</TextCheckbox>
        </div>
      </div>
    </div>
  );
}

interface TextCheckboxProps {
  endText?: JSX.Element;
}

const TextCheckbox: ParentComponent<TextCheckboxProps> = (props) => {
  const id = createUniqueId();
  return (
    <div class="flex items-center gap-2 group">
      <Checkbox id={id} />
      <label
        for={`${id}-input`}
        class="flex items-center gap-1 justify-between grow text-neutral-400 hover:text-neutral-600 select-none group-has-checked:font-medium group-has-checked:text-black"
      >
        <div>{props.children}</div>
        <div>{props.endText}</div>
      </label>
    </div>
  );
};

interface StarsProps {
  count?: 1 | 2 | 3 | 4 | 5;
}

const Stars: Component<StarsProps> = (props) => {
  return (
    <div class="flex gap-1 items-center">
      <For each={Array(5)}>
        {(_, index) => <Star isActive={index() <= (props.count ?? 5) - 1} />}
      </For>
    </div>
  );
};

interface StarProps {
  isActive?: boolean;
}

const Star: Component<StarProps> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>star</title>
      <path
        d="M6.99992 11.0134L11.1199 13.5L10.0266 8.81337L13.6666 5.66004L8.87325 5.25337L6.99992 0.833374L5.12659 5.25337L0.333252 5.66004L3.97325 8.81337L2.87992 13.5L6.99992 11.0134Z"
        classList={{
          "fill-neutral-400": !props.isActive,
          "fill-yellow-500": props.isActive,
        }}
      />
    </svg>
  );
};
