import { Checkbox } from "@rwx/ui/components/checkbox";
import {
  type Component,
  For,
  type JSX,
  type ParentComponent,
  createUniqueId,
} from "solid-js";

export const CoursesSidebar = () => {
  return (
    <div class="space-y-7">
      <div>
        <h6 class="mb-5 font-semibold text-xl">Категории</h6>
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
        <h6 class="mb-5 font-semibold text-xl">Преподаватели</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Некто Первый</TextCheckbox>
          <TextCheckbox endText="15">Некто Второй</TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 font-semibold text-xl">Цена</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Все</TextCheckbox>
          <TextCheckbox endText="15">Бесплатные</TextCheckbox>
          <TextCheckbox endText="15">Платные</TextCheckbox>
        </div>
      </div>
      <div>
        <h6 class="mb-5 font-semibold text-xl">Отзывы</h6>
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
        <h6 class="mb-5 font-semibold text-xl">Уровень</h6>
        <div class="space-y-2">
          <TextCheckbox endText="15">Все</TextCheckbox>
          <TextCheckbox endText="15">Начинающий</TextCheckbox>
          <TextCheckbox endText="15">Продвинутый</TextCheckbox>
          <TextCheckbox endText="15">Эксперт</TextCheckbox>
        </div>
      </div>
    </div>
  );
};

interface TextCheckboxProps {
  endText?: JSX.Element;
}

const TextCheckbox: ParentComponent<TextCheckboxProps> = (props) => {
  const id = createUniqueId();
  return (
    <div class="group flex items-center">
      <Checkbox id={id} class="cursor-pointer" />
      <label
        for={`${id}-input`}
        class="flex grow cursor-pointer select-none items-center justify-between gap-1 pl-2 text-neutral-800 group-has-checked:font-medium group-has-checked:text-black"
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
    <div class="flex items-center gap-1">
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
