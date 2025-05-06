import { A } from "@solidjs/router";
import { Button } from "#ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#ui/tabs";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldTextArea,
} from "#ui/text-field";

export default function Page() {
  return (
    <>
      <div class="mb-12 bg-black py-12.5">
        <div class="container">
          <div class="xl:max-w-3xl">
            <div class="mb-5 flex items-center gap-5">
              <div class="inline-flex h-10 items-center justify-center gap-2.5 rounded-lg bg-neutral-600 px-3 py-2 font-medium text-white">
                Фотосъемка
              </div>
              <div>
                <span class="text-neutral-400 text-sm sm:text-lg sm:leading-7">
                  Автор:{" "}
                </span>
                <span class="text-sm text-white sm:text-lg sm:leading-7">
                  Артем Неизвестный
                </span>
              </div>
            </div>
            <h1 class="mb-5 font-semibold text-white text-xl leading-7 sm:text-4xl sm:leading-10">
              Lorem Ipsum is simply dummy text
            </h1>
            <div class="flex flex-wrap gap-x-4 gap-y-2.5">
              <div class="flex items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-primary"
                >
                  <title>Duration</title>
                  <path
                    d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="text-neutral-400 text-sm">2 недели</div>
              </div>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Students</title>
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
                <div class="text-neutral-400 text-sm">156 Студентов</div>
              </div>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Difficulty</title>
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
                <div class="text-neutral-400 text-sm">Все уровни</div>
              </div>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Lessons</title>
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
                <div class="text-neutral-400 text-sm">20 занятий</div>
              </div>
              <div class="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                  <title>Tests</title>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9 9.5 2 2 4-4" />
                </svg>
                <div class="text-neutral-400 text-sm">3 Теста</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container relative mb-10 flex flex-col-reverse gap-7 lg:flex-row lg:items-start">
        <div class="w-full overflow-x-auto md:overflow-x-visible xl:max-w-3xl">
          <Tabs class="min-w-140 md:min-w-auto" defaultValue="author">
            <TabsList class="grid grid-cols-5">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="structure">Структура</TabsTrigger>
              <TabsTrigger value="author">Автор</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div class="p-7">
                <h6 class="mb-3 font-semibold text-xl">Обзор курса</h6>
                <p class="text-lg text-neutral-600 leading-7">
                  Этот курс научит вас основам и продвинутым концепциям
                  [название темы]. Он включает реальные примеры, пошаговые
                  инструкции и задания, которые помогут вам освоить материал.
                </p>
                <ul class="mt-5 list-disc pl-5 text-lg text-neutral-600">
                  <li>Длительность курса: 10 недель</li>
                  <li>Уровень: начинающий и продвинутый</li>
                  <li>Поддержка: чаты и форумы для участников</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="structure">
              <div class="p-7">
                <h6 class="mb-3 font-semibold text-xl">Структура курса</h6>
                <ul class="space-y-3 text-lg text-neutral-600 leading-7">
                  <li>
                    <span class="font-semibold">Модуль 1:</span> Введение и
                    основы
                  </li>
                  <li>
                    <span class="font-semibold">Модуль 2:</span> Продвинутые
                    техники
                  </li>
                  <li>
                    <span class="font-semibold">Модуль 3:</span> Практические
                    задания
                  </li>
                  <li>
                    <span class="font-semibold">Модуль 4:</span> Итоговый проект
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="author">
              <div class="p-7">
                <div class="mb-2 flex items-start gap-6">
                  <div class="inline-grid size-40 shrink-0 place-items-center rounded-3xl bg-red-500/75 font-extrabold text-6xl text-white">
                    TP
                  </div>
                  <div>
                    <h6 class="mb-3 font-semibold text-xl">ThimPress</h6>
                    <p class="mb-3 text-lg text-neutral-600 leading-7">
                      LearnPress is a comprehensive WordPress LMS Plugin for
                      WordPress. This is one of the best WordPress LMS Plugins
                      which can be used to easily create & sell courses online.
                    </p>
                    <div class="mb-3 flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-primary"
                      >
                        <title>Students</title>
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                        <path d="M22 10v6" />
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                      </svg>
                      <div class="text-neutral-600 text-sm">156 Студентов</div>
                    </div>
                    <div class="mb-3 flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-primary"
                      >
                        <title>Lessons</title>
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                      </svg>
                      <div class="text-neutral-600 text-sm">20 занятий</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faq">
              <div class="p-7">
                <h6 class="mb-3 font-semibold text-xl">
                  Часто задаваемые вопросы
                </h6>
                <div class="space-y-5">
                  <div>
                    <h6 class="font-semibold text-lg">Как начать курс?</h6>
                    <p class="text-lg text-neutral-600 leading-7">
                      После регистрации вы получите доступ к материалам курса и
                      расписанию занятий.
                    </p>
                  </div>
                  <div>
                    <h6 class="font-semibold text-lg">
                      Какой уровень подготовки нужен?
                    </h6>
                    <p class="text-lg text-neutral-600 leading-7">
                      Курс подходит как для начинающих, так и для тех, кто хочет
                      углубить знания.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div class="p-7">
                <h6 class="mb-3 font-semibold text-xl">Отзывы</h6>
                <ul class="space-y-5 text-lg text-neutral-600 leading-7">
                  <li>
                    <blockquote>
                      "Отличный курс! Много практики и полезной информации."
                      <span class="mt-2 block font-semibold text-primary text-sm">
                        — Иван Петров
                      </span>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      "Прекрасное объяснение сложных тем. Очень доволен
                      результатом."
                      <span class="mt-2 block font-semibold text-primary text-sm">
                        — Мария Сидорова
                      </span>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div class="-top-50 right-0 rounded-2xl border border-gray-200 bg-white lg:w-full lg:max-w-100 xl:absolute">
          <img
            src="/blog-article.png"
            class="aspect-[1.64] w-full rounded-t-2xl"
            alt="course"
          />
          <div class="flex flex-col items-center justify-center gap-3 p-5 sm:gap-7.5 xl:px-13.5 xl:py-7.5">
            <div class="flex items-center gap-2">
              <div class="text-neutral-400 text-sm line-through sm:text-base">
                1259.0₽
              </div>
              <div class="font-semibold text-red-600 leading-normal sm:text-xl">
                2249.0₽
              </div>
            </div>
            <Button as={A} href="/courses/1/take">
              Записаться
            </Button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="xl:max-w-3xl">
          <div class="mb-4 font-semibold text-lg sm:mb-7">Оставить отзыв</div>
          <form class="mb-10 grid grid-cols-2 gap-4 sm:gap-7">
            <TextField validationState="invalid">
              <TextFieldInput
                class="border-destructive"
                type="text"
                required
                placeholder="Имя*"
              />
              <TextFieldErrorMessage>Обязательное поле</TextFieldErrorMessage>
            </TextField>
            <TextField validationState="invalid">
              <TextFieldInput
                class="border-destructive"
                type="email"
                required
                placeholder="Email*"
              />
              <TextFieldErrorMessage>
                Неверный формат почты
              </TextFieldErrorMessage>
            </TextField>
            <TextField class="col-span-2">
              <TextFieldTextArea required placeholder="Комментарий*" />
            </TextField>
            <div>
              <Button>Отправить</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
