import type { RouteSectionProps } from "@solidjs/router";
import { Toaster } from "solid-sonner";

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      {props.children}
      <Toaster richColors />
    </>
  );
}
