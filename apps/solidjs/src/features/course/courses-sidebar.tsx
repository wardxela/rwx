import { debounce } from "@solid-primitives/scheduled";
import { createAsync, useSearchParams } from "@solidjs/router";
import {
  type Component,
  For,
  type JSX,
  type ParentComponent,
  Show,
  Suspense,
  createSignal,
  createUniqueId,
} from "solid-js";
import { getCourseAuthors, getCourseCategories } from "#queries";
import { Button } from "#ui/button";
import { Checkbox } from "#ui/checkbox";
import { Skeleton } from "#ui/skeleton";
import { TextField, TextFieldInput } from "#ui/text-field";

export const CoursesSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedAuthors, setSelectedAuthors] = createSignal<string[]>(
    Array.isArray(searchParams.authors)
      ? searchParams.authors
      : searchParams.authors
        ? [searchParams.authors]
        : [],
  );

  const [selectedCategories, setSelectedCategories] = createSignal<number[]>(
    Array.isArray(searchParams.categories)
      ? searchParams.categories.map(Number)
      : searchParams.categories
        ? [Number(searchParams.categories)]
        : [],
  );

  const updateFilters = debounce(
    (data?: { minPrice?: string; maxPrice?: string }) => {
      setSearchParams({
        ...data,
        categories: selectedCategories(),
        authors: selectedAuthors(),
        offset: 0,
      });
    },
    300,
  );

  return (
    <div class="space-y-7">
      <CategoriesFilters
        selected={selectedCategories()}
        onChange={(updated) => {
          setSelectedCategories(updated);
          updateFilters();
        }}
      />
      <AuthorsFilters
        selected={selectedAuthors()}
        onChange={(updated) => {
          setSelectedAuthors(updated);
          updateFilters();
        }}
      />
      <div>
        <h6 class="mb-5 font-semibold text-xl">Цена</h6>
        <div class="grid grid-cols-2 gap-2">
          <TextField>
            <TextFieldInput
              ref={(el) => {
                el.value = searchParams.minPrice?.toString() ?? "";
              }}
              type="number"
              min="0"
              class="min-w-0"
              placeholder="От"
              onInput={(e) =>
                updateFilters({ minPrice: e.currentTarget.value })
              }
            />
          </TextField>
          <TextField>
            <TextFieldInput
              ref={(el) => {
                el.value = searchParams.maxPrice?.toString() ?? "";
              }}
              type="number"
              min="0"
              class="min-w-0"
              placeholder="До"
              onInput={(e) =>
                updateFilters({ maxPrice: e.currentTarget.value })
              }
            />
          </TextField>
        </div>
      </div>
    </div>
  );
};

interface CategoriesFiltersProps {
  selected: number[];
  onChange: (categories: number[]) => void;
}

const CategoriesFilters = (props: CategoriesFiltersProps) => {
  const categories = createAsync(() => getCourseCategories());
  const [showAll, setShowAll] = createSignal(false);

  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Категории</h6>
      <div class="space-y-2">
        <Suspense
          fallback={
            <For each={Array.from({ length: 6 })}>
              {() => (
                <li class="flex h-6 gap-2">
                  <Skeleton class="grow" />
                  <Skeleton class="w-5" />
                </li>
              )}
            </For>
          }
        >
          <For each={showAll() ? categories() : categories()?.slice(0, 6)}>
            {(category) => (
              <TextCheckbox
                checked={props.selected.includes(category.id)}
                onChange={(checked) => {
                  props.onChange(
                    checked
                      ? [...props.selected, category.id]
                      : props.selected.filter((id) => id !== category.id),
                  );
                }}
                // @ts-expect-error
                endText={category.count}
              >
                {category.name}
              </TextCheckbox>
            )}
          </For>
          <Show when={!showAll()}>
            <Button
              class="w-full"
              variant="ghost"
              onClick={() => setShowAll(!showAll())}
            >
              Показать все
            </Button>
          </Show>
        </Suspense>
      </div>
    </div>
  );
};

interface AuthorsFiltersProps {
  selected: string[];
  onChange: (authors: string[]) => void;
}

const AuthorsFilters = (props: AuthorsFiltersProps) => {
  const authors = createAsync(() => getCourseAuthors());
  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Преподаватели</h6>
      <div class="space-y-2">
        <Suspense
          fallback={
            <For each={Array.from({ length: 6 })}>
              {() => (
                <li class="flex h-6 gap-2">
                  <Skeleton class="grow" />
                  <Skeleton class="w-5" />
                </li>
              )}
            </For>
          }
        >
          <For each={authors()}>
            {(author) => (
              <TextCheckbox
                checked={props.selected.includes(author.id)}
                onChange={(checked) => {
                  props.onChange(
                    checked
                      ? [...props.selected, author.id]
                      : props.selected.filter((id) => id !== author.id),
                  );
                }}
                // @ts-expect-error
                endText={author.count}
              >
                {author.firstName} {author.lastName}
              </TextCheckbox>
            )}
          </For>
        </Suspense>
      </div>
    </div>
  );
};

interface TextCheckboxProps {
  endText?: JSX.Element;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const TextCheckbox: ParentComponent<TextCheckboxProps> = (props) => {
  const id = createUniqueId();
  return (
    <div class="group flex items-center">
      <Checkbox
        id={id}
        class="cursor-pointer"
        checked={props.checked}
        onChange={props.onChange}
      />
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
