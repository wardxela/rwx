import type { Component } from "solid-js";
import { useLocation } from "@solidjs/router";
import { createMemo, For, Show } from "solid-js";

import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumb as BreadcrumbOriginal,
  BreadcrumbSeparator,
} from "@rwx/ui/components/breadcrumb";

export const Breadcrumb: Component = () => {
  const location = useLocation();

  const links = createMemo(() => {
    let href = "";
    return location.pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => {
        href = `${href}/${segment}`;
        return {
          title: segment in knownSegments ? knownSegments[segment] : segment,
          href,
        };
      });
  });

  const closestLinks = () => {
    return links().slice(-2);
  };

  const isPathTooLong = () => {
    return links().length > 2;
  };

  return (
    <div class="bg-neutral-100">
      <div class="container flex h-14 items-center">
        <BreadcrumbOriginal>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" current={location.pathname === "/"}>
                Главная
              </BreadcrumbLink>
            </BreadcrumbItem>
            <Show when={links().length > 0}>
              <BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
              <Show when={isPathTooLong()}>
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
              </Show>
            </Show>
            <For each={closestLinks()}>
              {(item, index) => (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={item.href}
                      current={item.href === location.pathname}
                    >
                      {item.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <Show when={index() !== closestLinks().length - 1}>
                    <BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </BreadcrumbItem>
                  </Show>
                </>
              )}
            </For>
          </BreadcrumbList>
        </BreadcrumbOriginal>
      </div>
    </div>
  );
};

// ! Keep it up to date
const knownSegments: Record<string, string> = {
  courses: "Курсы",
  blog: "Блог",
  login: "Войти",
  contacts: "Контакты",
};
