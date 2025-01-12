import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { AuthorSidebar } from "~/widgets/author/sidebar";

const SidebarProvider = clientOnly(() =>
  import("@rwx/ui/components/sidebar").then((module) => ({
    default: module.SidebarProvider,
  })),
);

export default function Layout(props: RouteSectionProps) {
  return (
    <SidebarProvider>
      <AuthorSidebar />
      <div class="grow">{props.children}</div>
    </SidebarProvider>
  );
}
