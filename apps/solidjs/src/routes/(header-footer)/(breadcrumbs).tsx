import type { RouteSectionProps } from "@solidjs/router";

import { Breadcrumb } from "~/components/breadcrumb";

export default function LayoutWithBreadcrumbs(props: RouteSectionProps) {
  return (
    <>
      <Breadcrumb />
      {props.children}
    </>
  );
}
