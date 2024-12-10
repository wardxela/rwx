import { A, useLocation } from "@solidjs/router";
import type { Component, ParentComponent } from "solid-js";
import { createEffect, createSignal } from "solid-js";

export const Header = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();

  let originalOverflow: string | null = null;

  createEffect(() => {
    if (isOpen()) {
      if (originalOverflow === null) {
        originalOverflow = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow ?? "";
      originalOverflow = null;
    }
  });

  createEffect(() => {
    setIsOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname;
  });

  return (
    <header>
      <HeaderDesktop openMenu={() => setIsOpen(true)} />
      <HeaderMobile isOpen={isOpen()} toggleMenu={setIsOpen} />
    </header>
  );
};

interface HeaderDesktopProps {
  openMenu: () => void;
}

const HeaderDesktop: Component<HeaderDesktopProps> = (props) => {
  return (
    <nav class="container flex h-16 items-center justify-between">
      <A href="/" class="flex items-center gap-2">
        <img src="/icon.svg" alt="Главная" class="max-w-8" />
        <div class="text-2xl font-bold">ЧИП</div>
      </A>
      <div class="hidden h-full grow items-center lg:flex">
        <div class="mx-auto flex h-full items-center">
          <HeaderLink href="/">Главная</HeaderLink>
          <HeaderLink href="/courses">Курсы</HeaderLink>
          <HeaderLink href="/blog">Блог</HeaderLink>
          <HeaderLink href="/contacts">Контакты</HeaderLink>
        </div>
        <HeaderLink href="/login">Войти / Зарегистрироваться</HeaderLink>
      </div>
      <button
        type="button"
        class="grid cursor-pointer place-items-center p-2.5 lg:hidden"
        onClick={props.openMenu}
      >
        <span class="sr-only">Открыть меню</span>
        <svg
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Открыть меню</title>
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </svg>
      </button>
    </nav>
  );
};

interface HeaderMobileProps {
  isOpen: boolean;
  toggleMenu: (open: boolean) => void;
}

const HeaderMobile: Component<HeaderMobileProps> = (props) => {
  return (
    <div
      classList={{
        "block bg-black/30": props.isOpen,
        "hidden bg-transparent": !props.isOpen,
      }}
      class="absolute top-0 left-0 z-1000 h-full w-full transition-all transition-discrete duration-300 lg:hidden starting:bg-transparent"
    >
      <div
        classList={{
          "translate-x-0": props.isOpen,
          "translate-x-full": !props.isOpen,
        }}
        class="mb-2 ml-auto h-full w-full bg-white px-5 transition-all duration-300 sm:max-w-sm starting:translate-x-full"
      >
        <div class="flex h-16 items-center justify-between px-4">
          <A href="/" class="flex items-center gap-2">
            <img src="/icon.svg" alt="Главная" class="max-w-8" />
          </A>
          <button
            type="button"
            class="grid cursor-pointer place-items-center p-2.5"
            onClick={() => props.toggleMenu(false)}
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="space-y-2.5">
          <HeaderMobileLink href="/">Главная</HeaderMobileLink>
          <HeaderMobileLink href="/courses">Курсы</HeaderMobileLink>
          <HeaderMobileLink href="/blog">Блог</HeaderMobileLink>
          <HeaderMobileLink href="/contacts">Контакты</HeaderMobileLink>
          <hr class="mx-4 border-neutral-500/10" />
          <HeaderMobileLink href="/login">
            Войти / Зарегистрироваться
          </HeaderMobileLink>
        </div>
      </div>
    </div>
  );
};

interface HeaderLinkProps {
  href: string;
}

const HeaderLink: ParentComponent<HeaderLinkProps> = (props) => {
  return (
    <A
      href={props.href}
      class="flex h-full items-center px-5 leading-tight font-medium transition"
      inactiveClass="hover:bg-neutral-100 hover:text-orange-500"
      activeClass="bg-neutral-100 text-orange-500"
      end
    >
      {props.children}
    </A>
  );
};

interface HeaderMobileLinkProps {
  href: string;
}

const HeaderMobileLink: ParentComponent<HeaderMobileLinkProps> = (props) => {
  return (
    <A
      href={props.href}
      class="flex h-full items-center rounded-md px-4 py-3 leading-tight font-medium transition"
      inactiveClass="hover:bg-neutral-100 hover:text-orange-500"
      activeClass="bg-neutral-100 text-orange-500"
      end
    >
      {props.children}
    </A>
  );
};
