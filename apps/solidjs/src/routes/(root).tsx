import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";

const Toaster = clientOnly(() =>
  import("solid-sonner").then((module) => ({
    default: module.Toaster,
  })),
);

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      {props.children}
      <Toaster richColors />
    </>
  );
}
