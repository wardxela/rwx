import { debounce } from "@solid-primitives/scheduled";
import {
  createAsync,
  useMatch,
  useNavigate,
  useSearchParams,
} from "@solidjs/router";
import type { JSX, ParentComponent } from "solid-js";
import { For, Show, Suspense, createEffect, createSignal } from "solid-js";
import { getBlogCategories, getCategories, getPosts, getTags } from "#queries";
import { Button } from "#ui/button";
import { Skeleton } from "#ui/skeleton";

export const BlogSidebar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const blogMatch = useMatch(() => "/blog");

  const [selectedCategories, setSelectedCategories] = createSignal<number[]>(
    Array.isArray(searchParams.categories)
      ? searchParams.categories.map(Number)
      : searchParams.categories
        ? [Number(searchParams.categories)]
        : [],
  );
  const [selectedTags, setSelectedTags] = createSignal<number[]>(
    Array.isArray(searchParams.tags)
      ? searchParams.tags.map(Number)
      : searchParams.tags
        ? [Number(searchParams.tags)]
        : [],
  );

  const updateFilters = debounce(() => {
    if (!blogMatch()) {
      const params = new URLSearchParams();
      for (const category of selectedCategories()) {
        params.append("categories", category.toString());
      }
      for (const tag of selectedTags()) {
        params.append("tags", tag.toString());
      }
      navigate(`/blog?${params.toString()}`);
    } else {
      setSearchParams({
        categories: selectedCategories(),
        tags: selectedTags(),
        offset: 0,
      });
    }
  }, 300);

  return (
    <div class="space-y-7">
      <CategoriesFilters
        selected={selectedCategories()}
        onChange={(updated) => {
          setSelectedCategories(updated);
          updateFilters();
        }}
      />
      <RecentPosts />
      <TagsFilters
        selected={selectedTags()}
        onChange={(updated) => {
          setSelectedTags(updated);
          updateFilters();
        }}
      />
    </div>
  );
};

function RecentPosts() {
  const posts = createAsync(() => getPosts({ limit: 3 }));

  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Недавние Записи</h6>
      <ul class="space-y-4">
        <Suspense
          fallback={
            <For each={Array.from({ length: 3 })}>
              {() => (
                <li class="flex gap-4">
                  <Skeleton class="size-24 rounded-xl" />
                  <div class="grow space-y-2 py-2">
                    <Skeleton class="h-4" />
                    <Skeleton class="h-4 w-2/3" />
                    <Skeleton class="h-4 w-3/4" />
                  </div>
                </li>
              )}
            </For>
          }
        >
          <For each={posts()?.page}>
            {(post) => (
              <li>
                <a href={`/blog/${post.id}`} class="group flex gap-4">
                  <img
                    alt={post.title}
                    src={post.image ?? "/placeholder.jpg"}
                    class="aspect-square max-w-24 shrink-0 rounded-xl object-cover transition group-hover:brightness-90"
                  />
                  <div class="grow font-medium transition group-hover:text-primary">
                    {post.title}
                  </div>
                </a>
              </li>
            )}
          </For>
        </Suspense>
      </ul>
    </div>
  );
}

interface CategoriesFiltersProps {
  selected: number[];
  onChange: (categories: number[]) => void;
}

function CategoriesFilters(props: CategoriesFiltersProps) {
  const categories = createAsync(() => getBlogCategories());
  const [showAll, setShowAll] = createSignal(false);

  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Категории</h6>
      <ul class="space-y-2">
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
              <li>
                <CategoryCheckbox
                  value={props.selected.includes(category.id)}
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
                </CategoryCheckbox>
              </li>
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
      </ul>
    </div>
  );
}

interface TagCheckboxProps {
  endText?: JSX.Element;
  showCheck?: boolean;
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

const CategoryCheckbox: ParentComponent<TagCheckboxProps> = (props) => {
  return (
    <label class="group">
      <input
        type="checkbox"
        class="sr-only"
        checked={props.value}
        onInput={(e) => props.onChange?.(e.currentTarget.checked)}
      />
      <div class="flex grow cursor-pointer select-none items-center justify-between gap-1 text-neutral-800 group-has-checked:font-medium group-has-checked:text-black">
        <div>{props.children}</div>
        <Show when={props.endText}>
          <div>{props.endText}</div>
        </Show>
      </div>
    </label>
  );
};

interface TagsFiltersProps {
  selected: number[];
  onChange: (categories: number[]) => void;
}

function TagsFilters(props: TagsFiltersProps) {
  const tags = createAsync(() => getTags());
  const [showAll, setShowAll] = createSignal(false);

  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Теги</h6>
      <div class="flex flex-wrap gap-2">
        <Suspense
          fallback={
            <>
              <Skeleton class="h-11.5 w-20 rounded-lg" />
              <Skeleton class="h-11.5 w-30 rounded-lg" />
              <Skeleton class="h-11.5 w-30 rounded-lg" />
              <Skeleton class="h-11.5 w-34 rounded-lg" />
              <Skeleton class="h-11.5 w-40 rounded-lg" />
            </>
          }
        >
          <For each={showAll() ? tags() : tags()?.slice(0, 6)}>
            {(tag) => (
              <TagCheckbox
                value={props.selected.includes(tag.id)}
                onChange={(checked) => {
                  props.onChange(
                    checked
                      ? [...props.selected, tag.id]
                      : props.selected.filter((id) => id !== tag.id),
                  );
                }}
                endText="?"
              >
                {tag.name}
              </TagCheckbox>
            )}
          </For>
          <Show when={!showAll()}>
            <Button variant="ghost" onClick={() => setShowAll(!showAll())}>
              Показать все
            </Button>
          </Show>
        </Suspense>
      </div>
    </div>
  );
}

interface TagCheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

const TagCheckbox: ParentComponent<TagCheckboxProps> = (props) => {
  return (
    <label>
      <input
        class="peer sr-only"
        type="checkbox"
        checked={props.value}
        onInput={(e) => props.onChange?.(e.currentTarget.checked)}
      />
      <div class="inline-flex cursor-pointer gap-2.5 rounded-lg border border-gray-200 px-5 py-2 text-lg leading-7 transition hover:bg-neutral-100 peer-checked:bg-neutral-200!">
        {props.children}
      </div>
    </label>
  );
};
