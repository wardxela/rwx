import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@rwx/ui/components/sidebar";
import { A, useMatch } from "@solidjs/router";
import { For } from "solid-js";
import { AuthShow } from "~/features/auth/guards";
import { UserAvatar } from "~/features/user/avatar";

const links = [
  {
    title: "Профиль",
    url: "/profile",
    icon: null,
  },
  {
    title: "Курсы",
    url: "/profile/courses",
    icon: null,
  },
  {
    title: "Сообщения (в разработке)",
    url: "/profile/messages",
    icon: null,
  },
  {
    title: "Отзывы",
    url: "/profile/reviews",
    icon: null,
  },
];

export function UserSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarHeader>
        <div class="my-6 grid place-items-center">
          <UserAvatar class="size-40" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <For each={links}>
                {(item) => (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      as={A}
                      href={item.url}
                      isActive={Boolean(useMatch(() => item.url)())}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </For>
              <AuthShow roles={["INSTRUCTOR"]}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    as={A}
                    href="/author"
                    isActive={Boolean(useMatch(() => "/author")())}
                  >
                    <span>Студия</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </AuthShow>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
