import { Button } from "@rwx/ui/components/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@rwx/ui/components/drawer";
import { TextField, TextFieldInput } from "@rwx/ui/components/text-field";
import { Toggle } from "@rwx/ui/components/toggle";
import { debounce } from "@solid-primitives/scheduled";
import { createAsync, useSearchParams } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { For, Show, Suspense, createEffect, createSignal } from "solid-js";
import { z } from "zod";
import { BlogSidebar } from "~/features/blog/blog-sidebar";
import { PostLink, PostLinkSkeleton } from "~/features/blog/post-link";
import { SiteTitle } from "~/shared/components/site-title";
import { getPosts } from "~/shared/queries";

const BlogPagination = clientOnly(() =>
  import("~/features/blog/pagination").then((module) => ({
    default: module.BlogPagination,
  })),
);

const [isGridView, setIsGridView] = createSignal(true);

const querySchema = z.object({
  search: z.string().optional().catch(undefined),
  categories: z.array(z.coerce.number()).optional().catch(undefined),
  tags: z.array(z.coerce.number()).optional().catch(undefined),
  offset: z.coerce.number().optional().catch(undefined),
});

const offsetSchema = z.coerce
  .number()
  .transform((value) => Math.floor(value / pageSize) + 1);

const pageSize = 8;

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilters = debounce(
    (...args: Parameters<typeof setSearchParams>) => setSearchParams(...args),
    300,
  );

  const [currentPage, setCurrentPage] = createSignal<number>(
    offsetSchema.safeParse(searchParams.offset)?.data ?? 1,
  );

  const validatedSearchParams = () => {
    const result = querySchema.safeParse({
      search: searchParams.search?.toString(),
      categories: Array.isArray(searchParams.categories)
        ? searchParams.categories
        : searchParams.categories
          ? [searchParams.categories]
          : undefined,
      tags: Array.isArray(searchParams.tags)
        ? searchParams.tags
        : searchParams.tags
          ? [searchParams.tags]
          : undefined,
      offset: searchParams.offset,
    });
    if (!result.success) {
      return undefined;
    }
    return result.data;
  };

  const posts = createAsync(() =>
    getPosts({
      ...validatedSearchParams(),
      limit: pageSize,
    }),
  );

  const pagesCount = () => Math.ceil((posts()?.total ?? 0) / pageSize);

  createEffect(() => {
    setCurrentPage(offsetSchema.safeParse(searchParams.offset)?.data ?? 1);
  });

  return (
    <>
      <SiteTitle>Блог</SiteTitle>
      <div class="mb-8 flex items-center justify-between gap-2 sm:mb-10">
        <h1 class="font-semibold text-2xl leading-10 sm:text-4xl">
          Все статьи
        </h1>
        <div class="flex items-center gap-2">
          <TextField>
            <TextFieldInput
              ref={(el) => {
                el.value = searchParams.search?.toString() ?? "";
              }}
              type="search"
              placeholder="Поиск"
              onInput={(e) =>
                updateFilters({ offset: 0, search: e.currentTarget.value })
              }
            />
          </TextField>
          <Toggle
            pressed={isGridView()}
            onChange={setIsGridView}
            class="ml-auto cursor-pointer text-primary sm:ml-0"
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
              <div class="h-full max-h-[70vh] overflow-auto p-5">
                <BlogSidebar />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div
        class="mb-10 grid gap-4"
        classList={{
          "grid-cols-[repeat(auto-fill,minmax(260px,1fr))]": isGridView(),
        }}
      >
        <Suspense
          fallback={
            <For each={Array.from({ length: 4 })}>
              {() => <PostLinkSkeleton />}
            </For>
          }
        >
          <For each={posts()?.page}>
            {(post) => (
              <PostLink
                link={`/blog/${post.id}`}
                title={post.title}
                excerpt={post.excerpt}
                updatedAt={post.updatedAt}
                image={post.image}
              />
            )}
          </For>
        </Suspense>
      </div>
      <Suspense>
        <Show when={pagesCount() > 1}>
          <div class="mt-auto flex justify-center">
            <BlogPagination
              count={pagesCount()}
              page={currentPage()}
              onPageChange={(page) => {
                setCurrentPage(page);
                updateFilters({ offset: (page - 1) * pageSize });
              }}
            />
          </div>
        </Show>
      </Suspense>
    </>
  );
}
