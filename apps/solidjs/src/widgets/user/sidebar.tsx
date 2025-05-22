import { A, useMatch } from "@solidjs/router";
import { For } from "solid-js";
import { AuthShow } from "#features/auth/guards";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#ui/sidebar";

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
              <AuthShow roles={["ADMIN"]}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    as={A}
                    href="/admin"
                    isActive={Boolean(useMatch(() => "/admin")())}
                  >
                    <span>Админ</span>
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
