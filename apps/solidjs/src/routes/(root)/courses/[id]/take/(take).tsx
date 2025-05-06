import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#ui/accordion";
import { Button } from "#ui/button";

export default function Page() {
  return (
    <div class="bg-neutral-100">
      <div class="fixed top-0 left-0 flex h-18 w-100 items-center border-neutral-100 border-r border-b bg-white px-10">
        <div class="font-medium text-primary leading-none">Курс</div>
      </div>
      <header class="fixed top-0 right-0 left-100 flex h-18 items-center border-neutral-100 border-b bg-white px-10">
        <a href="/courses/1" class="group flex items-center gap-2.5">
          <div class="group-hover:-translate-x-1 grid size-8 place-items-center rounded-full bg-primary/10 transition">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-primary"
            >
              <title>Back</title>
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="text-neutral-800 text-sm leading-none group-hover:text-primary">
            Вернуться к курсу
          </span>
        </a>
        <Button class="ml-auto" variant="secondary">
          Назад
        </Button>
        <Button class="ml-5" variant="secondary">
          Вперед
        </Button>
        <Button class="ml-10">Отметить как выполненное</Button>
        <div class="ml-15 flex items-center gap-3">
          <img src="/person.png" alt="Avatar" class="size-9 object-cover" />
          <span class="text-neutral-700 text-sm">Настя Федорова</span>
        </div>
      </header>
      <div class="fixed top-18 left-0 h-full w-100 border-neutral-100 border-r bg-white pt-2.5">
        <Accordion collapsible defaultValue={["item-1"]}>
          <AccordionItem class="px-10" value="item-1">
            <AccordionTrigger class="text-neutral-700">
              Начало работы
            </AccordionTrigger>
            <AccordionContent>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-primary leading-none">
                  Добро пожаловать на курс
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Что такое React.js?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Почему именно “React”, а не “JavaScript”?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Настройка окружения
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem class="px-10" value="item-2">
            <AccordionTrigger class="text-neutral-700">
              Обзор JavaScript
            </AccordionTrigger>
            <AccordionContent>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Добро пожаловать на курс
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Что такое React.js?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Почему именно “React”, а не “JavaScript”?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Настройка окружения
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem class="px-10" value="item-3">
            <AccordionTrigger class="text-neutral-700">
              Основы React и работа с компонентами
            </AccordionTrigger>
            <AccordionContent>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Добро пожаловать на курс
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Что такое React.js?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Почему именно “React”, а не “JavaScript”?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Настройка окружения
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem class="px-10" value="item-4">
            <AccordionTrigger class="text-neutral-700">
              Состояния React и работа с событиями
            </AccordionTrigger>
            <AccordionContent>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Добро пожаловать на курс
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Что такое React.js?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Почему именно “React”, а не “JavaScript”?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Настройка окружения
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem class="px-10" value="item-5">
            <AccordionTrigger class="text-neutral-700">
              Отображение списков
            </AccordionTrigger>
            <AccordionContent>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Добро пожаловать на курс
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Что такое React.js?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Почему именно “React”, а не “JavaScript”?
                </a>
              </div>
              <div class="py-4 pl-2.5">
                <a href="/courses/1/take" class="text-neutral-600 leading-none">
                  Настройка окружения
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div class="pt-26 pb-10 pl-110">
        <div class="prose mx-auto max-w-4xl">
          <h1>Начало работы с React.js</h1>
          <p>
            Добро пожаловать на первый шаг вашего пути изучения React.js!
            React.js — это популярная библиотека JavaScript для создания
            пользовательских интерфейсов. Она позволяет разработчикам эффективно
            создавать динамичные и интерактивные веб-приложения.
          </p>
          <h2>Что такое React.js?</h2>
          <p>
            React.js, часто называемый просто React, поддерживается Meta (ранее
            Facebook) и сообществом разработчиков. Он позволяет создавать
            переиспользуемые компоненты и эффективно управлять состоянием, что
            делает ваш код более поддерживаемым.
          </p>
          <h2>Настройка окружения</h2>
          <p>
            Перед началом работы с React убедитесь, что у вас установлено
            следующее:
          </p>
          <ul>
            <li>
              <strong>Node.js</strong>: Среда выполнения JavaScript.
            </li>
            <li>
              <strong>npm</strong> или <strong>yarn</strong>: Менеджер пакетов
              для установки зависимостей.
            </li>
            <li>
              <strong>Редактор кода</strong>: Visual Studio Code рекомендуется
              для разработки на React.
            </li>
          </ul>
          <h2>Создание вашего первого приложения на React</h2>
          <p>
            Следуйте этим шагам, чтобы создать ваше первое приложение на React:
          </p>
          <ol>
            <li>Откройте терминал и выполните следующую команду:</li>
            <pre>
              <code>npx create-react-app my-first-react-app</code>
            </pre>
            <li>Перейдите в папку проекта:</li>
            <pre>
              <code>cd my-first-react-app</code>
            </pre>
            <li>Запустите сервер разработки:</li>
            <pre>
              <code>npm start</code>
            </pre>
            <li>
              Откройте ваш браузер и перейдите по адресу{" "}
              <a href="http://localhost:3000">http://localhost:3000</a>. Вы
              должны увидеть экран приветствия React!
            </li>
          </ol>
          <h2>Следующие шаги</h2>
          <p>
            На следующем шаге мы изучим компоненты React, их работу и как с их
            помощью создавать простой пользовательский интерфейс. Оставайтесь с
            нами!
          </p>
        </div>
      </div>
    </div>
  );
}
