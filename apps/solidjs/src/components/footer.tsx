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
              <span class="font-bold text-2xl leading-8">ЧИП</span>
            </h6>
            <div class="text-lg text-neutral-600 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div class="max-w-48 grow">
            <h6 class="mb-8 font-semibold text-xl">Помощь</h6>
            <ul class="space-y-1">
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Последние записи
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div class="max-w-48 grow">
            <h6 class="mb-8 font-semibold text-xl">Программы</h6>
            <ul class="space-y-1">
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Дизайн
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Бизнес
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  ПО
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Языки
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="font-medium text-lg text-neutral-600 leading-10 transition hover:text-primary"
                >
                  Программирование
                </a>
              </li>
            </ul>
          </div>
          <div class="max-w-sm grow">
            <h6 class="mb-8 font-semibold text-xl">Напишите Нам</h6>
            <div class="mb-4 text-lg text-neutral-600 leading-7">
              Адрес: г. Рязань, ул. Высоковольтная, д. 10,
            </div>
            <div class="mb-4 text-lg text-neutral-600 leading-7">
              Телефон:{" "}
              <a
                href="tel:+7 (800) 555-35-35"
                class="transition hover:text-primary"
              >
                +7 (800) 555-35-35
              </a>
              <br />
              Почта:{" "}
              <a
                href="mailto:supportlms@gmail.com"
                class="transition hover:text-primary"
              >
                supportlms@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <div class="py-8 text-center text-neutral-600 leading-7">
          Copyright © 2024 RWX LMS | Powered by wardxela
        </div>
      </div>
    </footer>
  );
};
