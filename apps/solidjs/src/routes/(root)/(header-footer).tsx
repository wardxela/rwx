import type { RouteSectionProps } from "@solidjs/router";

import { Footer } from "#widgets/footer";
import { Header } from "#widgets/header";

export default function Layout(props: RouteSectionProps) {
  return (
    <div class="flex h-full flex-col">
      <Header />
      {props.children}
      <Footer class="mt-auto" />
    </div>
  );
}
