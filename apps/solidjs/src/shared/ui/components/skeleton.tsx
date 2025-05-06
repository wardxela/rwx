import type { ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

import { cn } from "#ui/utils";

const Skeleton = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      class={cn("animate-pulse rounded-md bg-input", local.class)}
      {...others}
    />
  );
};

export { Skeleton };
