import type { ParentComponent } from "solid-js";
import { A } from "@solidjs/router";

export const Header = () => {
  return (
    <header>
      <div class="container flex items-center justify-between">
        <A href="/" class="flex items-center gap-1">
          <img src="/icon.svg" alt="logotype" />
          <div class="text-3xl font-bold">ЧПИ</div>
        </A>
        <div class="flex">
          <nav>
            <ul class="flex h-full items-center">
              <li>
                <HeaderLink href="/">Главная</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/courses">Курсы</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/blog">Блог</HeaderLink>
              </li>
            </ul>
          </nav>
          <div class="flex items-center gap-5">
            <HeaderLink href="/login">Войти / Зарегистрироваться</HeaderLink>
            <a href="" class="grid place-items-center">
              <img src="/search.svg" alt="search" />
            </a>
          </div>
        </div>
        <button class="grid cursor-pointer place-items-center p-2.5">
          <span class="sr-only">Открыть меню</span>
          <svg
            class="size-6"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

interface HeaderLinkProps {
  href: string;
}

const HeaderLink: ParentComponent<HeaderLinkProps> = (props) => {
  return (
    <A
      href={props.href}
      class="block px-5 py-6 leading-tight font-semibold transition"
      inactiveClass="hover:bg-neutral-100 hover:text-orange-500"
      activeClass="bg-neutral-100 text-orange-500"
      end
    >
      {props.children}
    </A>
  );
};
