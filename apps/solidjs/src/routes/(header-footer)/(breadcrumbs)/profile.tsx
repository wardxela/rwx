import type { RouteSectionProps } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Authenticated } from "~/features/auth/guards";

const SidebarProvider = clientOnly(() =>
  import("@rwx/ui/components/sidebar").then((module) => ({
    default: module.SidebarProvider,
  })),
);

const UserSidebar = clientOnly(() =>
  import("~/widgets/user/sidebar").then((module) => ({
    default: module.UserSidebar,
  })),
);

export default function Layout(props: RouteSectionProps) {
  return (
    <Authenticated>
      <SidebarProvider>
        <div class="container flex gap-10 pt-8 pb-12 sm:pt-16 sm:pb-24">
          <div class="shrink-0">
            <UserSidebar />
          </div>
          <div class="grow">{props.children}</div>
        </div>
      </SidebarProvider>
    </Authenticated>
  );
}
