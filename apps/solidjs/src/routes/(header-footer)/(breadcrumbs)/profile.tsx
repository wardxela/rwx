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
import { A, type RouteSectionProps, useMatch } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { For } from "solid-js";

// const SidebarProvider = clientOnly(() =>
//   import("@rwx/ui/components/sidebar").then((module) => ({
//     default: module.SidebarProvider,
//   })),
// );

export default function Layout(props: RouteSectionProps) {
  return (
    <div class="container flex gap-10 pt-8 pb-12 sm:pt-16 sm:pb-24">
      <div class="shrink-0">Test</div>
      <div class="grow">{props.children}</div>
    </div>
  );
}

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

// function AuthorSidebar() {
//   return (
//     <Sidebar collapsible="none">
//       <SidebarHeader>
//         <div class="my-6 grid place-items-center">
//           <img
//             alt="User"
//             src="/profile.jpg"
//             class="size-40 rounded-full object-cover"
//           />
//         </div>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <For each={links}>
//                 {(item) => (
//                   <SidebarMenuItem>
//                     <SidebarMenuButton
//                       as={A}
//                       href={item.url}
//                       isActive={Boolean(useMatch(() => item.url)())}
//                     >
//                       {item.icon}
//                       <span>{item.title}</span>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 )}
//               </For>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   );
// }
