import { createAsync, useLocation } from "@solidjs/router";
import type { Component } from "solid-js";
import { For, Show, Suspense, createEffect, createMemo } from "solid-js";

import { getCourse, getPost } from "#queries";
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumb as BreadcrumbOriginal,
  BreadcrumbSeparator,
} from "#ui/breadcrumb";

interface TitledLink {
  title: string;
  href: string;
}

const MAX_LENGTH = 4;

export const Breadcrumb: Component = () => {
  const location = useLocation();

  const links = createAsync(() =>
    resolveSegments(location.pathname.split("/").filter(Boolean)),
  );

  createEffect(() => {
    console.log(links());
  });

  const closestLinks = () => {
    return links()?.slice(-MAX_LENGTH);
  };

  const isPathTooLong = () => {
    return (links()?.length ?? 0) > MAX_LENGTH;
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
            <Suspense>
              <Show when={links()?.length}>
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
                    <Show when={index() !== (closestLinks()?.length ?? 0) - 1}>
                      <BreadcrumbItem>
                        <BreadcrumbSeparator />
                      </BreadcrumbItem>
                    </Show>
                  </>
                )}
              </For>
            </Suspense>
          </BreadcrumbList>
        </BreadcrumbOriginal>
      </div>
    </div>
  );
};

const knownSegments: Record<string, string> = {
  courses: "Курсы",
  blog: "Блог",
  login: "Войти",
  contacts: "Контакты",
  profile: "Профиль",
};

const ResolveSegmentState = {
  Default: 0,
  Course: 1,
  Post: 2,
};

async function resolveSegments(segments: string[]): Promise<TitledLink[]> {
  const links: TitledLink[] = [];

  let state = ResolveSegmentState.Default;
  let href = "";

  for (const segment of segments) {
    href += `/${segment}`;
    if (state === ResolveSegmentState.Course) {
      const id = await getCourse(segment)
        .catch(() => null)
        .then((res) => (res ? shortTitle(res.title) : null));
      links.push({
        title: id ?? segment,
        href,
      });
      state = ResolveSegmentState.Default;
      continue;
    }
    if (state === ResolveSegmentState.Post) {
      const id = await getPost(segment)
        .catch(() => null)
        .then((res) => (res ? shortTitle(res.title) : null));
      links.push({
        title: id ?? segment,
        href,
      });
      state = ResolveSegmentState.Default;
      continue;
    }
    if (knownSegments[segment]) {
      if (segment === "blog") {
        state = ResolveSegmentState.Post;
      } else if (segment === "courses") {
        state = ResolveSegmentState.Course;
      }
      links.push({
        title: knownSegments[segment],
        href,
      });
      continue;
    }
    links.push({
      title: segment,
      href,
    });
  }

  return links;
}

function shortTitle(title: string, length = 40) {
  if (title.length >= length) {
    return title.slice(0, length - 3).padEnd(length, "...");
  }
  return title;
}
