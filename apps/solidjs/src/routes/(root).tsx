import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";

const Toaster = clientOnly(() =>
  import("@rwx/ui/components/sonner").then((module) => ({
    default: module.Toaster,
  })),
);

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      {props.children}
      <Toaster />
    </>
  );
}
