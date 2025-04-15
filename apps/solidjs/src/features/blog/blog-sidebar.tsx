import { Button } from "@rwx/ui/components/button";
import { Skeleton } from "@rwx/ui/components/skeleton";
import { createAsync } from "@solidjs/router";
import type { JSX, ParentComponent } from "solid-js";
import { For, Show, Suspense, createSignal } from "solid-js";
import { getCategories, getTags } from "~/shared/queries";

export const BlogSidebar = () => {
  return (
    <div class="space-y-7">
      <Categories />
      <div>
        <h6 class="mb-5 font-semibold text-xl">Недавние Записи</h6>
        <ul class="space-y-4">
          <li>
            <a href="/blog/1" class="group flex gap-4">
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
            <a href="/blog/1" class="group flex gap-4">
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
            <a href="/blog/1" class="group flex gap-4">
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
      <Tags />
    </div>
  );
};

function Categories() {
  const categories = createAsync(() => getCategories());
  const [showAll, setShowAll] = createSignal(false);

  return (
    <div>
      <h6 class="mb-5 font-semibold text-xl">Категории</h6>
      <ul class="space-y-2">
        <Suspense
          fallback={
            <>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
              <li class="flex h-6 gap-2">
                <Skeleton class="grow" />
                <Skeleton class="w-5" />
              </li>
            </>
          }
        >
          <For each={showAll() ? categories() : categories()?.slice(0, 6)}>
            {(category) => (
              <li>
                <TextCheckbox endText="?">{category.name}</TextCheckbox>
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

function Tags() {
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
            {(tag) => <TagCheckbox>{tag.name}</TagCheckbox>}
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
