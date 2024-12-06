import type { RouteSectionProps } from "@solidjs/router";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function LayoutWithHeaderAndFooter(props: RouteSectionProps) {
  return (
    <div class="flex h-full flex-col">
      <Header />
      {props.children}
      <Footer class="mt-auto" />
    </div>
  );
}
