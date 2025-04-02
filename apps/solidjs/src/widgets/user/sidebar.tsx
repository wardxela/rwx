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
import { A, createAsync, useMatch } from "@solidjs/router";
import { For, Suspense } from "solid-js";
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
  {
    title: "Студия",
    url: "/author",
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
