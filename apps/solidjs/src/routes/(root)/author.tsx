import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Authenticated } from "#features/auth/guards";

const SidebarProvider = clientOnly(() =>
  import("#ui/sidebar").then((module) => ({
    default: module.SidebarProvider,
  })),
);

const AuthorSidebar = clientOnly(() =>
  import("#widgets/author/sidebar").then((module) => ({
    default: module.AuthorSidebar,
  })),
);

export default function Layout(props: RouteSectionProps) {
  return (
    <Authenticated roles={["INSTRUCTOR"]}>
      <SidebarProvider>
        <AuthorSidebar />
        <div class="grow">{props.children}</div>
      </SidebarProvider>
    </Authenticated>
  );
}
