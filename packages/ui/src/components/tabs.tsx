import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/src/polymorphic";
import * as TabsPrimitive from "@kobalte/core/src/tabs";

import { cn } from "~/lib/utils";

const Tabs = TabsPrimitive.Root;

type TabsListProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsListProps<T> & {
    class?: string | undefined;
  };

const TabsList = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsListProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsListProps, ["class"]);
  return (
    <TabsPrimitive.List
      class={cn(
        "inline-flex items-center justify-center rounded-t-xl border border-gray-200 bg-white text-muted-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsTriggerProps<T extends ValidComponent = "button"> =
  TabsPrimitive.TabsTriggerProps<T> & {
    class?: string | undefined;
  };

const TabsTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsTriggerProps, ["class"]);
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap border-gray-200 not-last:border-r px-4 py-3 font-semibold text-lg ring-offset-background transition-all first:rounded-tl-xl last:rounded-tr-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-neutral-100 data-[selected]:text-primary",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsContentProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsContentProps<T> & {
    class?: string | undefined;
  };

const TabsContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsContentProps, ["class"]);
  return (
    <TabsPrimitive.Content
      class={cn(
        "rounded-b-xl bg-neutral-100 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsIndicatorProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsIndicatorProps<T> & {
    class?: string | undefined;
  };

const TabsIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsIndicatorProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsIndicatorProps, ["class"]);
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "data-[orientation=horizontal]:-bottom-px data-[orientation=vertical]:-right-px absolute transition-all duration-250ms data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
        local.class,
      )}
      {...others}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator };
