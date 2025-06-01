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

export function UserSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Профиль</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  as={A}
                  href="/profile"
                  isActive={Boolean(useMatch(() => "/profile")())}
                >
                  <span>Данные</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
