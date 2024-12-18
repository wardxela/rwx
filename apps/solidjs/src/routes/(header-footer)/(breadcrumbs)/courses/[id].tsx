import { Button } from "@rwx/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@rwx/ui/components/tabs";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";

export default function CoursePreview() {
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
                  <title>Difficutly</title>
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
            <TabsContent value="overview">Data</TabsContent>
            <TabsContent value="structure">Data</TabsContent>
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
                <p class="mb-5 text-lg text-neutral-600 leading-7">
                  LearnPress is a comprehensive WordPress LMS Plugin for
                  WordPress. This is one of the best WordPress LMS Plugins which
                  can be used to easily create & sell courses online.
                </p>
                <div class="flex flex-wrap items-center gap-3">
                  <div class="text-lg text-neutral-600 leading-7">Follow:</div>
                  <div class="flex flex-wrap items-center gap-3">
                    <a
                      href="https://github.com"
                      class="grid size-5 place-items-center text-neutral-600 hover:text-primary"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://bsky.app"
                      class="grid size-5 place-items-center text-neutral-600 hover:text-primary"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Bluesky</title>
                        <path
                          d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      class="grid size-5 place-items-center text-neutral-600 hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-youtube"
                      >
                        <title>YouTube</title>
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faq">Data</TabsContent>
            <TabsContent value="reviews">Data</TabsContent>
          </Tabs>
        </div>
        <div class="-top-50 right-0 rounded-2xl border border-gray-200 bg-white lg:w-full lg:max-w-100 xl:absolute">
          <img
            src="/public/blog-article.png"
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
            <Button>Записаться</Button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="xl:max-w-3xl">
          <div class="mb-4 font-semibold text-lg sm:mb-7">
            Оставить комментарий
          </div>
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
