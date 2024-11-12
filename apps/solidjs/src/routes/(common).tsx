import type { RouteSectionProps } from "@solidjs/router";

import { Breadcrumb } from "~/components/breadcrumb";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function LayoutCommon(props: RouteSectionProps) {
  return (
    <div class="flex h-full flex-col">
      <Header />
      <Breadcrumb />
      {props.children}
      <Footer class="mt-auto" />
    </div>
  );
}
