import type { RouteSectionProps } from "@solidjs/router";
import { Authenticated } from "#features/auth/guards";
import { SidebarProvider } from "#ui/sidebar";
import { AdminSidebar } from "#widgets/admin/sidebar";

export default function Layout(props: RouteSectionProps) {
  return (
    <Authenticated roles={["ADMIN"]}>
      <SidebarProvider>
        <AdminSidebar />
        <div class="grow">{props.children}</div>
      </SidebarProvider>
    </Authenticated>
  );
}
