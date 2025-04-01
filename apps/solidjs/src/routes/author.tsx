import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";

const SidebarProvider = clientOnly(() =>
  import("@rwx/ui/components/sidebar").then((module) => ({
    default: module.SidebarProvider,
  })),
);

const AuthorSidebar = clientOnly(() =>
  import("~/widgets/author/sidebar").then((module) => ({
    default: module.AuthorSidebar,
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
