import type { Component } from "solid-js";

import { cn } from "@rwx/ui/utils";

export interface FooterProps {
  class?: string;
}

export const Footer: Component<FooterProps> = (props) => {
  return (
    <footer class={cn("bg-neutral-100", props.class)}>
      <div class="container">
        <div class="flex grow flex-wrap gap-7 py-24">
          <div class="md:max-w-sm">
            <h6 class="mb-8 flex items-center gap-1">
              <img src="/icon.svg" alt="logo" />
              <span class="text-2xl leading-8 font-bold">ЧПИ</span>
            </h6>
            <div class="text-lg leading-7 text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div class="max-w-48 grow">
            <h6 class="mb-8 text-xl font-semibold">Помощь</h6>
            <ul class="space-y-1">
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Последние записи
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div class="max-w-48 grow">
            <h6 class="mb-8 text-xl font-semibold">Программы</h6>
            <ul class="space-y-1">
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Дизайн
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Бизнес
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  ПО
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Языки
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="hover:text-primary text-lg leading-10 font-medium text-neutral-600 transition"
                >
                  Программирование
                </a>
              </li>
            </ul>
          </div>
          <div class="max-w-sm grow">
            <h6 class="mb-8 text-xl font-semibold">Напишите Нам</h6>
            <div class="mb-4 text-lg leading-7 text-neutral-600">
              Адрес: г. Рязань, ул. Высоковольтная, д. 10,
            </div>
            <div class="mb-4 text-lg leading-7 text-neutral-600">
              Телефон:{" "}
              <a
                href="tel:+7 (800) 555-35-35"
                class="hover:text-primary transition"
              >
                +7 (800) 555-35-35
              </a>
              <br />
              Почта:{" "}
              <a
                href="mailto:supportlms@gmail.com"
                class="hover:text-primary transition"
              >
                supportlms@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <div class="py-8 text-center leading-7 text-neutral-600">
          Copyright © 2024 RWX LMS | Powered by wardxela
        </div>
      </div>
    </footer>
  );
};
