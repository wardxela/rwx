import type { RouteSectionProps } from "@solidjs/router";
import { Authenticated } from "#features/auth/guards";
import { SidebarProvider } from "#ui/sidebar";
import { UserSidebar } from "#widgets/user/sidebar";

export default function Layout(props: RouteSectionProps) {
  return (
    <Authenticated>
      <SidebarProvider>
        <div class="container flex gap-10 pt-8 pb-12 sm:pt-16 sm:pb-24">
          <div class="hidden shrink-0 sm:block">
            <UserSidebar />
          </div>
          <div class="grow">{props.children}</div>
        </div>
      </SidebarProvider>
    </Authenticated>
  );
}
