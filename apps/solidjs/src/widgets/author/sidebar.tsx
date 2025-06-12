import { A, useMatch } from "@solidjs/router";
import { For } from "solid-js";
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
} from "#ui/sidebar";

const items = [
  {
    title: "Главная",
    url: "/author",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Home</title>
        <path
          d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  // {
  //   title: "Курсы",
  //   url: "/author/courses",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       stroke-width="2"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //     >
  //       <title>Lessons</title>
  //       <path d="m16 6 4 14" />
  //       <path d="M12 6v14" />
  //       <path d="M8 8v12" />
  //       <path d="M4 4v16" />
  //     </svg>
  //   ),
  // },
  {
    title: "Блог",
    url: "/author/blog",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Blog</title>
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4" />
          <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
        </g>
      </svg>
    ),
  },
];

export function AuthorSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <A href="/" class="m-2 flex items-center gap-2">
          <img src="/icon.svg" alt="logo" class="max-w-8" />
          <span class="font-bold text-xl leading-8">ЧИП</span>
        </A>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <For each={items}>
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
