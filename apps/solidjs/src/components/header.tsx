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
