/**
 * TODO:
 1. Header with actions (publish, edit, preview?)
 2. Editor for lessons and group of lessons powered by Sortable
 3. Each lesson has its own dedicated page with Markdown editor.
 */

import { For, createSignal } from "solid-js";
import { Button } from "#ui/button";

type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

type Lesson = {
  id: string;
  title: string;
};

export default function Page() {
  const [modules, setModules] = createSignal<Module[]>([
    {
      id: "1",
      title: "Введение в курс",
      lessons: [
        { id: "1", title: "Приветствие" },
        { id: "2", title: "Как проходить курс" },
      ],
    },
    {
      id: "2",
      title: "Основы работы",
      lessons: [
        { id: "3", title: "Урок 1: Базовые концепции" },
        { id: "4", title: "Урок 2: Практическое применение" },
      ],
    },
  ]);

  const addModule = () => {
    const newModule: Module = {
      id: String(Date.now()),
      title: "Новый модуль",
      lessons: [],
    };
    setModules([...modules(), newModule]);
  };

  const addLesson = (moduleId: string) => {
    setModules(
      modules().map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lessons: [
              ...module.lessons,
              { id: String(Date.now()), title: "Новый урок" },
            ],
          };
        }
        return module;
      }),
    );
  };

  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="border-b bg-white">
        <div class="px-8 py-4">
          <div class="mb-4 flex items-center justify-between">
            <h1 class="font-bold text-2xl">Название курса</h1>
            <div class="space-x-3">
              <Button variant="outline">Предпросмотр</Button>
              <Button variant="outline">Настройки</Button>
              <Button>Опубликовать</Button>
            </div>
          </div>
          <nav class="flex gap-4">
            <a
              href="/"
              class="border-blue-600 border-b-2 px-1 pb-2 text-blue-600"
            >
              Главная
            </a>
            <a href="/" class="px-1 pb-2 text-gray-600">
              Настройки
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main class="p-8">
        <div class="mx-auto max-w-4xl">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="font-semibold text-xl">Модули курса</h2>
            <Button onClick={addModule}>Добавить модуль</Button>
          </div>

          <div class="space-y-6">
            <For each={modules()}>
              {(module) => (
                <div class="rounded-lg border bg-white p-4 shadow-sm">
                  <div class="mb-4 flex items-center justify-between">
                    <h3 class="font-medium text-lg">{module.title}</h3>
                    <div class="space-x-2">
                      <Button variant="outline" size="sm">
                        Редактировать
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addLesson(module.id)}
                      >
                        Добавить урок
                      </Button>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <For each={module.lessons}>
                      {(lesson) => (
                        <div class="flex items-center justify-between rounded bg-gray-50 p-3">
                          <span>{lesson.title}</span>
                          <div class="space-x-2">
                            <Button variant="ghost" size="sm">
                              Редактировать
                            </Button>
                          </div>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </main>
    </div>
  );
}
