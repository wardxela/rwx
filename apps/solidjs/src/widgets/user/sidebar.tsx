import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@rwx/ui/components/sidebar";
import { A, useMatch } from "@solidjs/router";
import { For } from "solid-js";
import { AuthShow } from "~/features/auth/guards";

const links = [
  {
    title: "Данные",
    url: "/profile",
    icon: null,
  },
  {
    title: "Курсы",
    url: "/profile/courses",
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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Профиль</SidebarGroupLabel>
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
    </Sidebar>
  );
}
