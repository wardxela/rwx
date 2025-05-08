import type { RouteSectionProps } from "@solidjs/router";
import { Authenticated } from "#features/auth/guards";
import { SidebarProvider } from "#ui/sidebar";
import { AuthorSidebar } from "#widgets/author/sidebar";

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
