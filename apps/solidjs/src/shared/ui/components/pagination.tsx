import type { JSX, ValidComponent } from "solid-js";
import { Show, createEffect, createSignal, splitProps } from "solid-js";

import * as PaginationPrimitive from "@kobalte/core/pagination";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { debounce } from "@solid-primitives/scheduled";
import { useSearchParams } from "@solidjs/router";
import { z } from "zod/v4";
import { cn } from "#ui/utils";
import { buttonVariants } from "./button";

const PaginationItems = PaginationPrimitive.Items;

type PaginationRootProps<T extends ValidComponent = "nav"> =
  PaginationPrimitive.PaginationRootProps<T> & { class?: string | undefined };

const Pagination = <T extends ValidComponent = "nav">(
  props: PolymorphicProps<T, PaginationRootProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationRootProps, ["class"]);
  return (
    <PaginationPrimitive.Root
      class={cn(
        "[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1",
        local.class,
      )}
      {...others}
    />
  );
};

type PaginationItemProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationItemProps<T> & { class?: string | undefined };

const PaginationItem = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationItemProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationItemProps, ["class"]);
  return (
    <PaginationPrimitive.Item
      class={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "size-10 border-input data-[current]:border",
        local.class,
      )}
      {...others}
    />
  );
};

type PaginationEllipsisProps<T extends ValidComponent = "div"> =
  PaginationPrimitive.PaginationEllipsisProps<T> & {
    class?: string | undefined;
  };

const PaginationEllipsis = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, PaginationEllipsisProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationEllipsisProps, [
    "class",
  ]);
  return (
    <PaginationPrimitive.Ellipsis
      class={cn("flex size-10 items-center justify-center", local.class)}
      {...others}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <title>More pages</title>
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
      <span class="sr-only">Больше страниц</span>
    </PaginationPrimitive.Ellipsis>
  );
};

type PaginationPreviousProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationPreviousProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const PaginationPrevious = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationPreviousProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationPreviousProps, [
    "class",
    "children",
  ]);
  return (
    <PaginationPrimitive.Previous
      class={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "gap-1 pl-2.5",
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <title>Previous</title>
              <path d="M15 6l-6 6l6 6" />
            </svg>
            <span>Назад</span>
          </>
        }
      >
        {(children) => children()}
      </Show>
    </PaginationPrimitive.Previous>
  );
};

type PaginationNextProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationNextProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const PaginationNext = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationNextProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationNextProps, [
    "class",
    "children",
  ]);
  return (
    <PaginationPrimitive.Next
      class={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "gap-1 pl-2.5",
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={
          <>
            <span>Вперед</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <title>Next</title>
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </>
        }
      >
        {(children) => children()}
      </Show>
    </PaginationPrimitive.Next>
  );
};

export type CommonPaginationProps = {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
};

const offsetSchema = z.coerce.number().default(0);

export interface UseSearchParamsPaginationParams {
  size: number;
}

export function useSearchParamsPagination(
  params: UseSearchParamsPaginationParams,
) {
  const size = () => params.size;

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchParamsDebounced = debounce(
    (...args: Parameters<typeof setSearchParams>) => setSearchParams(...args),
    300,
  );

  const offset = () => {
    const result = offsetSchema.safeParse(searchParams.offset);
    if (!result.success) {
      return 0;
    }
    return result.data;
  };

  const currentPage = () => {
    return Math.floor(offset() / size()) + 1;
  };

  const [intermidiatePage, setIntermidiatePage] = createSignal<number>(
    currentPage(),
  );

  const setCurrentPage = (page: number) => {
    setIntermidiatePage(page);
    setSearchParamsDebounced({ offset: (page - 1) * size() });
  };

  createEffect(() => {
    setIntermidiatePage(currentPage());
  });

  return {
    offset,
    intermidiatePage,
    setCurrentPage,
  };
}

export function CommonPagination(props: CommonPaginationProps) {
  return (
    <Pagination
      fixedItems
      itemComponent={(props) => (
        <PaginationItem page={props.page}>{props.page}</PaginationItem>
      )}
      ellipsisComponent={() => <PaginationEllipsis />}
      count={props.count}
      page={props.page}
      onPageChange={props.onPageChange}
    >
      <PaginationPrevious />
      <PaginationItems />
      <PaginationNext />
    </Pagination>
  );
}

export {
  Pagination,
  PaginationItems,
  PaginationItem,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
};
