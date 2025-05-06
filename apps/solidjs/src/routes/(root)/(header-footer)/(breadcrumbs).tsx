import type { RouteSectionProps } from "@solidjs/router";

import { Breadcrumb } from "#features/site/breadcrumb";

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      <Breadcrumb />
      {props.children}
    </>
  );
}
