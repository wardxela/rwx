export default [
  {
    title: "Основы веб-разработки с React",
    description:
      "Полный курс по современной веб-разработке с использованием React, TypeScript и лучших практик. Научитесь создавать интерактивные пользовательские интерфейсы, управлять состоянием приложения и оптимизировать производительность.",
    price: 14999,
    oldPrice: 19999,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
    published: true,
    categoryId: 1,
    faq: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужны ли специальные знания для прохождения курса?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на новичков, но базовое понимание JavaScript (переменные, функции, основы ООП) будет полезно. Мы начинаем с основ React и постепенно переходим к сложным темам.",
          },
        },
        {
          type: "header",
          data: {
            text: "Как долго длится доступ к курсу?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Доступ к материалам курса предоставляется навсегда после покупки, включая все будущие обновления контента и дополнительные материалы.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Введение в React",
        position: 1,
        lessons: [
          {
            title: "Основные концепции React",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основные концепции React",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "React - это библиотека JavaScript для создания пользовательских интерфейсов. Основные концепции включают:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Компонентный подход - создание переиспользуемых UI-компонентов",
                      "Virtual DOM - эффективное обновление интерфейса",
                      "Однонаправленный поток данных - предсказуемое состояние приложения",
                      "JSX синтаксис - объединение HTML и JavaScript",
                      "Хуки (Hooks) - управление состоянием и побочными эффектами",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание первого компонента",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практическое занятие: создадим простой компонент кнопки с обработчиком событий и стилизацией.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Работа с состоянием",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Работа с состоянием в React",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Состояние (state) позволяет компонентам React реагировать на пользовательский ввод, серверные ответы и другие изменения. Рассмотрим:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Локальное состояние компонента (useState)",
                      "Глобальное состояние (Context API, Redux)",
                      "Побочные эффекты (useEffect)",
                      "Кастомные хуки для повторного использования логики",
                    ],
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практика: создадим форму входа с валидацией и управлением состоянием.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Продвинутые техники",
        position: 2,
        lessons: [
          {
            title: "Оптимизация производительности",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Оптимизация React-приложений",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим основные техники оптимизации React-приложений для улучшения пользовательского опыта:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "ordered",
                    items: [
                      "Мемоизация компонентов (React.memo, useMemo, useCallback)",
                      "Ленивая загрузка компонентов (React.lazy, Suspense)",
                      "Оптимизация рендеринга (shouldComponentUpdate)",
                      "Профилирование производительности (React DevTools)",
                      "Оптимизация работы с большими списками (виртуализация)",
                    ],
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем реальные кейсы оптимизации и напишем тесты производительности.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Работа с API и асинхронными операциями",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Интеграция с бэкендом",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научимся работать с REST API, GraphQL и WebSockets в React-приложениях.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
      {
        title: "TypeScript с React",
        position: 3,
        lessons: [
          {
            title: "Типизация в React-компонентах",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основы типизация в React",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "TypeScript добавляет статическую типизацию в React-приложения, что значительно улучшает качество кода и предотвращает множество ошибок на этапе разработки.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Типизация пропсов и состояния компонентов",
                      "Работа с типизированными событиями (onClick, onChange и др.)",
                      "Использование дженериков для универсальных компонентов",
                      "Типизация хуков (useState, useEffect, useContext)",
                      "Создание собственных типов для сложных структур данных",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практические примеры",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим создание типизированного компонента кнопки с различными вариантами пропсов (size, variant, disabled).",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем типизацию формы с валидацией, где каждый input имеет свой тип данных и правила валидации.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типизация контекста",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Context API - мощный инструмент для управления глобальным состоянием. В TypeScript мы можем точно определить типы для контекста:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Создание типизированного контекста",
                      "Определение default value для контекста",
                      "Типизация компонента-провайдера",
                      "Использование useContext с type guards",
                    ],
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000, // 2 hours
          },
          {
            title: "Дженерик-компоненты в React",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Универсальные компоненты с дженериками",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Дженерики позволяют создавать компоненты, которые могут работать с разными типами данных, сохраняя при этом строгую типизацию.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Синтаксис дженериков в TypeScript",
                      "Дженерик-пропсы и их ограничения",
                      "Создание универсальных компонентов списков и таблиц",
                      "Компоненты высшего порядка (HOC) с дженериками",
                      "Дженерик-хуки для повторно используемой логики",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Компоненты с динамическим типом данных",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разработаем универсальный компонент DataGrid, который может отображать данные любого типа с сохранением типизации колонок и строк.",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Создадим компонент FormBuilder, который динамически генерирует форму на основе переданного типа данных.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Условные типы в пропсах",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим продвинутые техники работы с условными типами, когда структура пропсов компонента зависит от значений других пропсов:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Типизация компонентов с вариантами (variant)",
                      "Дискриминантные объединения (discriminated unions)",
                      "Условные пропсы компонента",
                      "Автодополнение и валидация пропсов в IDE",
                    ],
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 9000000, // 2.5 hours
          },
          {
            title: "Продвинутые паттерны типизации",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Сложные паттерны работы с типами",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим сложные сценарии типизации в React-приложениях, которые помогают создавать более гибкие и надежные компоненты.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Типизация компонентов с render props",
                      "Типизация асинхронных операций и состояний загрузки",
                      "Динамическая типизация на runtime (type guards, asserts)",
                      "Работа с библиотеками и их типами (например, react-router)",
                      "Кастомные утилитарные типы для React",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типизация динамических компонентов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем создание компонента DynamicComponent, который рендерит другой компонент на основе входных данных, с полной сохранением типизации пропсов.",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научимся типизировать компоненты, которые могут отображать разные дочерние элементы в разных ситуациях.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типизация и безопасность типов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практические примеры обеспечения безопасности типов в компонентах:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Валидация пропсов на этапе типизации",
                      "Обработка edge cases через тип never",
                      "Сужение типов (type narrowing) в компонентах",
                      "Использование branded types для уникальных идентификаторов",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Интеграция с серверными API",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим автоматическую генерацию типов для API на основе OpenAPI/Swagger спецификаций и их использование в React-компонентах.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 10800000, // 3 hours
          },
        ],
      },
    ],
  },
  {
    title: "Docker с нуля: полный курс по контейнеризации",
    description:
      "Освойте Docker и Kubernetes для эффективной разработки и развертывания приложений. Научитесь создавать, управлять и масштабировать контейнеры, работать с Docker Compose и Kubernetes, а также развертывать приложения в production.",
    price: 12999,
    oldPrice: 16999,
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200",
    published: true,
    categoryId: 1,
    faq: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужен ли опыт работы с Linux?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Базовые знания Linux будут полезны, но курс включает все необходимые основы. Мы начнем с установки Docker и работы с базовыми командами, постепенно переходя к сложным темам.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какое оборудование требуется?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Docker работает на Windows, Mac и Linux. Для комфортной работы рекомендуется минимум 8ГБ RAM и 20ГБ свободного места на диске. На курсе мы также рассмотрим оптимизацию Docker для слабых машин.",
          },
        },
        {
          type: "header",
          data: {
            text: "Будет ли рассмотрена работа с Kubernetes?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс включает модуль по Kubernetes, где мы разберем основы оркестрации контейнеров, создание кластеров и развертывание приложений в production.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы Docker",
        position: 1,
        lessons: [
          {
            title: "Введение в контейнеризацию",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое Docker?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Docker - это платформа для разработки, доставки и запуска приложений в контейнерах. Контейнеры обеспечивают изоляцию приложений, их легковесность и переносимость между разными средами.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Изоляция приложений: контейнеры работают независимо друг от друга",
                      "Легковесность: контейнеры используют общее ядро ОС",
                      "Переносимость: контейнеры работают одинаково на любой системе",
                      "Масштабируемость: легко создавать и управлять множеством контейнеров",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Установка Docker",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем установку Docker на Windows, Mac и Linux. Научимся настраивать Docker Engine и проверять его работоспособность.",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практика: запустим первый контейнер с помощью команды `docker run hello-world`.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000, // 1 hour
          },
          {
            title: "Работа с образами и контейнерами",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основы работы с Docker",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Docker использует образы (images) для создания контейнеров. Образы — это шаблоны, содержащие все необходимое для запуска приложения.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Поиск образов в Docker Hub",
                      "Загрузка образов (`docker pull`)",
                      "Запуск контейнеров (`docker run`)",
                      "Просмотр списка контейнеров (`docker ps`)",
                      "Остановка и удаление контейнеров",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание собственных образов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научимся создавать Dockerfile — инструкцию для сборки образа. Разберем основные директивы: `FROM`, `RUN`, `COPY`, `CMD`, `EXPOSE`.",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практика: создадим образ для простого веб-приложения на Node.js и запустим его.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000, // 1.5 hours
          },
        ],
      },
      {
        title: "Продвинутые темы",
        position: 2,
        lessons: [
          {
            title: "Docker Compose",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Docker Compose",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Docker Compose — инструмент для управления мультиконтейнерными приложениями. Он позволяет описывать сервисы, сети и тома в одном файле `docker-compose.yml`.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Синтаксис `docker-compose.yml`",
                      "Запуск и остановка сервисов",
                      "Настройка сетей и томов",
                      "Переменные окружения",
                      "Масштабирование сервисов",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практический пример",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Развернем приложение, состоящее из веб-сервера (Nginx), базы данных (PostgreSQL) и бэкенда (Node.js), используя Docker Compose.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000, // 2 hours
          },
          {
            title: "Оптимизация Docker",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Оптимизация Docker-образов",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Большие образы замедляют развертывание и увеличивают затраты. Рассмотрим техники оптимизации:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Многоэтапная сборка (multi-stage builds)",
                      "Минимизация слоев",
                      "Использование `.dockerignore`",
                      "Выбор базовых образов (Alpine Linux)",
                      "Очистка кэша",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Мониторинг и логирование",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Настроим сбор логов контейнеров и мониторинг ресурсов с помощью `docker stats` и сторонних инструментов (Prometheus, Grafana).",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000, // 1.5 hours
          },
        ],
      },
      {
        title: "Развертывание в production",
        position: 3,
        lessons: [
          {
            title: "Основы Kubernetes",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Введение в Kubernetes",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Kubernetes — система оркестрации контейнеров для автоматизации развертывания, масштабирования и управления приложениями.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Архитектура Kubernetes: Master и Worker узлы",
                      "Основные объекты: Pods, Deployments, Services",
                      "Настройка кластера (Minikube, kubeadm)",
                      "Развертывание приложения",
                      "Масштабирование и обновления",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: развертывание веб-приложения",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Создадим Deployment для веб-приложения, настроим Service для доступа к нему и проверим работу кластера.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 9000000, // 2.5 hours
          },
          {
            title: "CI/CD с Docker и Kubernetes",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Непрерывная интеграция и доставка",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Автоматизируем процесс сборки, тестирования и развертывания приложений с помощью Docker и Kubernetes.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Настройка GitHub Actions/GitLab CI",
                      "Сборка и публикация Docker-образов",
                      "Развертывание в Kubernetes",
                      "Blue-Green и Canary deployments",
                      "Откат изменений",
                    ],
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 7200000, // 2 hours
          },
        ],
      },
    ],
  },
  {
    title: "Английский для IT-специалистов",
    description:
      "Практический курс английского языка для разработчиков, тестировщиков и других IT-специалистов. Освойте техническую лексику, документацию, деловую переписку и устное общение в профессиональной среде.",
    price: 9999,
    oldPrice: 12999,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200",
    published: true,
    categoryId: 4,
    faq: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Какой уровень английского нужен для курса?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на уровень Pre-Intermediate и выше. Если вы знаете базовые грамматические конструкции и можете читать простые технические тексты, курс вам подойдет. Для начинающих мы рекомендуем сначала освоить базовый курс английского.",
          },
        },
        {
          type: "header",
          data: {
            text: "Будет ли акцент на техническую лексику?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, 70% курса посвящено технической терминологии, документации и общению в рабочей среде. Мы разберем термины из разработки, тестирования, DevOps и управления проектами.",
          },
        },
        {
          type: "header",
          data: {
            text: "Как построен процесс обучения?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Каждый модуль включает теорию, практические задания, разбор реальных кейсов и живые дискуссии. Вы будете работать с документацией, писать код-ревью на английском, участвовать в имитациях митингов и собеседований.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы технического английского",
        position: 1,
        lessons: [
          {
            title: "IT-терминология и аббревиатуры",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основные IT-термины",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Изучим наиболее часто используемые термины в разработке программного обеспечения, их произношение и контекст использования:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Backend/Frontend: различия и термины",
                      "API: REST, GraphQL, SOAP",
                      "Debugging: логи и ошибки",
                      "Deployment: CI/CD pipelines",
                      "Cloud computing: AWS, Azure, GCP термины",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Аббревиатуры в IT",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем распространенные аббревиатуры: SaaS, PaaS, IaaS, SQL, NoSQL, HTTP, SSL, TCP/IP и их правильное произношение в речи.",
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Практика: расшифруем аббревиатуры из реальных вакансий и документации.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000, // 1 hour
          },
          {
            title: "Чтение технической документации",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Анализ документации",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем структуру технической документации (API docs, README, мануалы) и научимся быстро находить нужную информацию. Изучим типичные фразы:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "This section describes...",
                      "Note that...",
                      "Make sure to...",
                      "The following parameters are required...",
                      "Deprecated since version...",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: разбор документации React и Docker",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Проанализируем реальные страницы документации, найдем ключевую информацию и переведем сложные термины.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000, // 1.5 hours
          },
        ],
      },
      {
        title: "Коммуникация на работе",
        position: 2,
        lessons: [
          {
            title: "Письменное общение (электронная почта, чаты)",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Деловая переписка",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Изучим форматы делового общения в IT-сфере: запросы, отчеты, код-ревью, обсуждение задач. Разберем шаблоны для:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Отправки задач коллегам",
                      "Ответа на запросы менеджмента",
                      "Обсуждения багов и фич",
                      "Формулирования вопросов в чатах (Slack, Teams)",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: напишем письмо с запросом на код-ревью",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: 'Составим письмо по шаблону, используя профессиональную лексику: "Could you please review my PR when you have a chance? I\'ve addressed the comments from the previous review."',
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000, // 2 hours
          },
          {
            title: "Участие в онлайн-встречах",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Виртуальные митинги",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем фразы для активного участия в онлайн-встречах (standups, planning, retrospectives):",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      'Фразы для представления своей работы: "I’ve been working on...", "Currently, I’m blocked by..."',
                      'Выражения согласия/несогласия: "I partially agree because...", "Have we considered...?"',
                      'Кларифицирующие вопросы: "Could you elaborate on...?"',
                      'Подведение итогов: "To summarize, we’ve decided to..."',
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Ролевая игра: имитация митинга",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Проведем имитацию standup-митинга, где каждый участник представит свой прогресс на английском.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 7200000, // 2 hours
          },
        ],
      },
      {
        title: "Собеседования и карьера",
        position: 3,
        lessons: [
          {
            title: "Подготовка к техническому собеседованию",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Вопросы и ответы на собеседовании",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберем типичные вопросы на технических собеседованиях и научимся формулировать ответы:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Tell me about yourself (структура ответа)",
                      "Explain [технология] to a non-technical person",
                      "Describe a challenging bug you fixed",
                      "Where do you see yourself in 5 years?",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: mock-интервью",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Проведем имитацию собеседования с разбором ошибок и рекомендациями по улучшению ответов.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 9000000, // 2.5 hours
          },
          {
            title: "Составление резюме и профиля",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "IT-резюме на английском",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научимся правильно описывать опыт работы, навыки и проекты для международных компаний:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Action verbs: developed, implemented, optimized",
                      "Избегаем «Responsible for...»",
                      "Технические навыки: группировка и уровни",
                      "Описание проектов: метрики и результаты",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: напишем раздел «Experience»",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Переведем реальное резюме участника, используя профессиональные шаблоны.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 7200000, // 2 hours
          },
        ],
      },
    ],
  },
  {
    title: "Основы UI/UX дизайна",
    description:
      "Практический курс по созданию удобных и привлекательных интерфейсов для веб и мобильных приложений.",
    price: 11999,
    oldPrice: 14999,
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1200",
    published: true,
    categoryId: 2,
    faq: {
      time: 1719792000000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужно ли уметь рисовать?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Нет, для UI/UX дизайна важнее понимание принципов композиции и работы с инструментами, чем навыки рисования. Современные программы позволяют работать с готовыми библиотеками, шаблонами и автоматизировать большинство процессов. Важно уметь мыслить логически и видеть, как пользователь будет взаимодействовать с интерфейсом.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какие программы потребуются?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Основной инструмент курса — Figma (бесплатный онлайн-инструмент). Также рассмотрим принципы, применимые в Sketch и Adobe XD. Мы научим вас не просто использовать эти программы, но и применять их в реальных проектах: от создания прототипа до финального макета.",
          },
        },
        {
          type: "header",
          data: {
            text: "Можно ли пройти курс без опыта?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс подходит как новичкам, так и опытным дизайнерам, которые хотят систематизировать знания. Все материалы построены последовательно: от основ до продвинутых техник. Вам не нужно иметь предварительного опыта в дизайне или программировании.",
          },
        },
        {
          type: "header",
          data: {
            text: "Сколько времени занимает курс?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на 2–3 месяца обучения при нагрузке 6–8 часов в неделю. Вы можете проходить его в своём темпе. По завершении вы получите сертификат и сможете добавить проекты в портфолио.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Принципы UX",
        position: 1,
        lessons: [
          {
            title: "Введение в User Experience",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое UX?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "User Experience (или UX) — это общее ощущение, которое пользователь испытывает при взаимодействии с продуктом. Это не только внешний вид, но и простота использования, скорость выполнения задач, ясность интерфейса и даже эмоциональное восприятие. UX-дизайн направлен на то, чтобы сделать использование продукта максимально приятным и эффективным для конечного пользователя.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "История развития UX",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "UX начал формироваться как отдельная дисциплина в конце 20 века, когда стало ясно, что технологии должны быть ориентированы на человека, а не наоборот. Одним из первых термин «пользовательский опыт» использовал Дон Норман в 1990-х годах, работая в Apple. Сегодня UX является ключевой частью разработки любого цифрового продукта — от мобильных приложений до сложных корпоративных систем.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Ключевые элементы UX",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Интуитивность интерфейса",
                      "Доступность для всех пользователей",
                      "Эффективность выполнения задач",
                      "Эмоциональная составляющая",
                      "Контекст использования продукта",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Распространённые ошибки в UX",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Одной из самых распространённых ошибок является игнорирование исследований целевой аудитории. Часто дизайнеры полагаются на собственное мнение или тренды, не проверяя, как пользователи будут взаимодействовать с продуктом. Другая ошибка — перегрузка интерфейса функциями, которые кажутся полезными, но усложняют работу. Также важно помнить, что хороший UX — это не только красота, но и логичная архитектура, чёткая навигация и быстрая обратная связь.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Зачем нужен UX-дизайн бизнесу?",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильный UX повышает лояльность к продукту, увеличивает конверсию и снижает количество жалоб и запросов в поддержку. Пользователи склонны рекомендовать качественные продукты, а также чаще возвращаются к ним. Для бизнеса это напрямую влияет на доходы и репутацию компании.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
          },
          {
            title: "Исследование пользователей",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "User Research",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Исследование пользователей — это первый и один из самых важных этапов в процессе UX-дизайна. Без понимания потребностей, желаний и поведения вашей целевой аудитории невозможно создать действительно удобный и эффективный продукт. В этом уроке мы познакомимся с основными методами исследования и научимся применять их на практике.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы исследований",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Качественные исследования (интервью, наблюдение)",
                      "Количественные исследования (опросы, аналитика)",
                      "Этнографические исследования (погружение в среду пользователя)",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Проведение интервью",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Интервью — один из самых популярных методов сбора информации. Он позволяет получить глубокое понимание мотивации и поведения пользователей. Хорошо подготовленное интервью состоит из открытых вопросов, направленных на выявление проблем и потребностей. Например, вместо вопроса «Нравится ли вам наш сайт?» лучше спросить: «Какие трудности вы сталкивались при оформлении заказа?»",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание пользовательских персон",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Персоны — это вымышленные образы типичных пользователей, основанные на реальных данных. Они помогают команде сосредоточиться на конкретной группе людей, а не на абстрактном «среднем» пользователе. Персоны включают возраст, профессию, цели, боли, устройство и частоту использования продукта.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Анализ сценариев использования",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Сценарии использования — это описание ситуаций, в которых пользователь взаимодействует с продуктом. Например, сценарий может описывать, как человек ищет информацию о товаре, сравнивает цены и делает покупку. Анализ таких сценариев помогает выявить узкие места и возможности для улучшений.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Инструменты дизайна",
        position: 2,
        lessons: [
          {
            title: "Основы Figma",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Работа в Figma",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Figma — это мощный онлайн-инструмент для создания дизайнов интерфейсов. Он объединяет в себе функции прототипирования, коммуникации между командами и разработкой. Один из главных плюсов Figma — возможность одновременной работы нескольких пользователей в режиме реального времени.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Интерфейс Figma",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "При запуске Figma вы увидите рабочую область, панель инструментов, слева — список страниц и слоёв, справа — свойства объектов. Основные инструменты: прямоугольник, текст, линия, фигуры, плагины. Удобный поиск и гибкая система слоёв позволяют быстро находить нужные элементы.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание первого макета",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Для начала создайте новый файл и выберите размер холста. Добавьте основные элементы: кнопки, поля ввода, заголовки. Используйте сетки и отступы, чтобы всё было выровнено. Применяйте стили текста и цвета, чтобы сохранить единый стиль. Сохраняйте часто используемые элементы как компоненты, чтобы повторно использовать их в других частях проекта.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Компоненты и варианты",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Компоненты — это базовые элементы, которые можно переиспользовать в разных частях проекта. Например, кнопка может быть активной, заблокированной или наведённой. Создавая вариант компонента, вы экономите время и обеспечиваете консистентность дизайна. Изменения в основном компоненте автоматически применяются ко всем его экземплярам.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Совместная работа",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Figma позволяет приглашать коллег в проект, оставлять комментарии, обсуждать изменения и давать обратную связь. Можно делиться ссылками на дизайн или прототип, настраивать права доступа и следить за историей изменений.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Создание прототипов",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Интерактивные прототипы",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Прототип — это имитация поведения будущего приложения. Он позволяет пользователям и команде тестировать идеи, проверять логику навигации и визуализировать потоки взаимодействия. В Figma вы можете легко создавать кликабельные прототипы, соединяя экраны и добавляя анимации переходов.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание связей между экранами",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Выберите элемент на одном экране, например, кнопку «Войти», и создайте связь с другим экраном, который должен открываться после нажатия. Настройте тип перехода: например, «Slide In» или «Fade». Таким образом, вы создаёте интерактивную модель приложения.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Добавление анимаций",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Figma позволяет добавлять простые анимации между состояниями элементов. Например, вы можете показать, как выпадающее меню появляется при наведении или как меняется состояние кнопки при нажатии. Анимации помогают лучше передать ощущение интерактивности и поведения элементов.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Тестирование прототипа",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "После создания прототипа вы можете запустить его в режиме презентации и проверить, как он работает. Также можно отправить прототип клиенту или команде для тестирования. Используйте обратную связь, чтобы вносить правки и улучшать пользовательский опыт ещё до начала разработки.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Цвет, типографика и композиция",
        position: 3,
        lessons: [
          {
            title: "Основы цвета в дизайне",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Цветовая теория и её применение",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Цвет играет ключевую роль в создании эмоционального восприятия интерфейса. Правильно подобранные цвета могут повысить удобство использования, улучшить восприятие информации и даже влиять на решения пользователя. В этом уроке вы узнаете, как строить цветовую палитру, использовать контраст и сочетать цвета в интерфейсе.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Цветовой круг и гармония",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Цветовой круг — основа для выбора гармоничных сочетаний. Мы рассмотрим такие модели, как монохромная, аналоговая, комплементарная и триадическая. Каждая имеет свои особенности применения в дизайне интерфейсов. Например, комплементарные цвета хорошо подходят для акцентов, тогда как аналоговые создают более мягкое впечатление.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Контраст и доступность",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Высокий контраст между текстом и фоном делает интерфейс более читаемым и доступным для пользователей с нарушением зрения. Мы научимся проверять уровень контраста с помощью специальных инструментов и стандартов WCAG. Также поговорим о том, как правильно использовать цвет для передачи состояния элементов (например, успешное действие — зелёный, ошибка — красный).",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Цвет и эмоции",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Цвет вызывает определённые ассоциации и эмоции. Например, синий ассоциируется с доверием и профессионализмом, а красный — с энергией и опасностью. При выборе цветовой палитры важно учитывать целевую аудиторию, культуру и бренд. В этом уроке вы научитесь создавать палитры, соответствующие целям продукта.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
          {
            title: "Типографика и чтение",
            content: {
              time: 1719792000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Наука о шрифтах",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Типографика — это искусство расположения текста таким образом, чтобы он был не только красивым, но и удобным для чтения. В этом уроке вы узнаете, как выбирать шрифты, работать с размерами, начертаниями и межстрочными интервалами.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Виды шрифтов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Шрифты делятся на несколько категорий: рубленые, беззасечные, рукописные, декоративные. Беззасечные шрифты, такие как Helvetica или Roboto, часто используются в интерфейсах благодаря своей четкости и универсальности. Рубленые (например, Times New Roman) чаще встречаются в печатных изданиях.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Размеры и вес шрифтов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В интерфейсах важно использовать разные уровни шрифтов: заголовки, подзаголовки, основной текст, вспомогательный текст. Размеры и начертания помогают организовать информацию и направлять внимание пользователя. Например, заголовки обычно крупнее и жирнее, чем основной текст.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Линейка и межбуквенное пространство",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильная линейка (расстояние между строками) делает текст более читаемым. Межбуквенное пространство (tracking) тоже влияет на восприятие. В интерфейсах рекомендуется использовать значения 1.4–1.6 для межстрочных интервалов и немного увеличивать tracking для мелкого текста.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 7200000,
          },
        ],
      },
    ],
  },
  {
    title: "Цифровой маркетинг с нуля",
    description:
      "Полный курс по продвижению в интернете: SEO, контекстная реклама, SMM и аналитика.",
    price: 8999,
    oldPrice: 11999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    published: true,
    categoryId: 3, // Маркетинг
    faq: {
      time: Date.now(),
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужен ли опыт в маркетинге?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на новичков, все объясняется с самых основ.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какие инструменты будем изучать?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Google Analytics, Яндекс.Метрика, Google Ads, Яндекс.Директ, Facebook Ads Manager.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы digital-маркетинга",
        position: 1,
        lessons: [
          {
            title: "Введение в цифровой маркетинг",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основные каналы продвижения",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Обзор всех современных каналов digital-маркетинга и их особенностей.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
          },
        ],
      },
      {
        title: "Практические инструменты",
        position: 2,
        lessons: [
          {
            title: "Настройка рекламы в Google Ads",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Создание первой кампании",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Пошаговый разбор создания и настройки рекламной кампании в Google Рекламе.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
          {
            title: "Аналитика и метрики",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Ключевые показатели эффективности",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Изучим основные метрики и научимся анализировать эффективность рекламных кампаний.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
    ],
  },
  {
    title: "Цифровой маркетинг с нуля",
    description:
      "Полный курс по продвижению в интернете: SEO, контекстная реклама, SMM и аналитика.",
    price: 8999,
    oldPrice: 11999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    published: true,
    categoryId: 3,
    faq: {
      time: 1719878400000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужен ли опыт в маркетинге?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на новичков, все объясняется с самых основ. Не требуется никаких предварительных знаний в области маркетинга или IT.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какие инструменты будем изучать?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Google Analytics, Яндекс.Метрика, Google Ads, Яндекс.Директ, Facebook Ads Manager, Instagram Business, Mailchimp, Canva, Buffer и другие популярные инструменты digital-маркетинга.",
          },
        },
        {
          type: "header",
          data: {
            text: "Можно ли пройти курс онлайн?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, весь курс доступен в формате онлайн-уроков, домашних заданий и вебинаров. Вы можете учиться в удобном для вас темпе, а также получите поддержку куратора.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли практические задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, каждый модуль включает практику: от создания рекламной кампании до написания стратегии продвижения. Также предусмотрены проекты, которые можно добавить в портфолио.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы digital-маркетинга",
        position: 1,
        lessons: [
          {
            title: "Введение в цифровой маркетинг",
            content: {
              time: 1719878400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основные каналы продвижения",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Digital-маркетинг — это комплекс мероприятий, направленных на продвижение товаров, услуг и брендов в интернете. В отличие от традиционного маркетинга, он позволяет точно измерять эффективность, быстро адаптироваться к изменениям и охватывать целевую аудиторию в нужное время и месте.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "История развития digital-маркетинга",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Первые формы digital-маркетинга появились в 1990-х годах с развитием интернета. Появились электронные письма, баннерная реклама, а затем — поисковая оптимизация и социальные сети. Сегодня digital-маркетинг включает огромное количество инструментов и подходов, которые позволяют достигать бизнес-целей разными способами.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы digital-каналов",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "SEO — поисковое продвижение",
                      "Контекстная реклама (Google Ads, Яндекс.Директ)",
                      "SMM — продвижение в соцсетях",
                      "Email-маркетинг",
                      "Контент-маркетинг",
                      "Affiliate-маркетинг",
                      "Видеомаркетинг",
                      "Мобильный маркетинг",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Цели digital-маркетинга",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Одна из главных задач digital-маркетинга — это привлечение целевой аудитории и конверсия. Цели могут быть разными: увеличение узнаваемости бренда, рост продаж, сбор лидов, улучшение взаимодействия с клиентами. Все действия должны быть согласованы между собой и подчинены общей стратегии.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Преимущества digital-маркетинга",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Digital-маркетинг имеет ряд преимуществ перед традиционным: возможность точного таргетирования, гибкость изменений, мгновенная аналитика, масштабируемость и более низкая стоимость. Эти факторы делают его особенно актуальным для малого и среднего бизнеса.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
          },
        ],
      },
      {
        title: "Практические инструменты",
        position: 2,
        lessons: [
          {
            title: "Настройка рекламы в Google Ads",
            content: {
              time: 1719878400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Создание первой кампании",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Google Ads — один из самых популярных инструментов контекстной рекламы. Он позволяет показывать рекламу пользователям, которые активно ищут товары или услуги, связанные с вашим бизнесом. В этом уроке мы шаг за шагом создадим первую кампанию, выберем ключевые слова, настроим таргетинг и бюджет.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Структура кампании в Google Ads",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Кампания состоит из нескольких уровней: сама кампания, группы объявлений, ключевые слова и объявления. На каждом уровне можно настраивать параметры: бюджет, ставки, географический таргетинг, устройства, расписания и многое другое.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Выбор правильных ключевых слов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Ключевые слова — это основа любой контекстной кампании. Они определяют, когда и кому будет показываться ваше объявление. Мы научимся использовать инструмент планировщика ключевых слов, анализировать конкурентов и находить наиболее релевантные и перспективные запросы.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание эффективных объявлений",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хорошее объявление должно быть привлекательным, понятным и содержать призыв к действию. Мы разберём примеры успешных объявлений, покажем, как использовать расширения объявлений, и научимся тестировать разные варианты для повышения CTR.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Анализ результатов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "После запуска кампании важно регулярно анализировать её эффективность. Мы научимся читать метрики: клики, показы, CTR, конверсии, стоимость клика и другие. Это поможет вам принимать решения на основе данных и постоянно улучшать кампанию.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
          {
            title: "Аналитика и метрики",
            content: {
              time: 1719878400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Ключевые показатели эффективности",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Аналитика — это основа принятия решений в digital-маркетинге. Без данных невозможно понять, работает ли ваша стратегия. В этом уроке вы узнаете, какие метрики важны, как их собирать и интерпретировать.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Google Analytics и Яндекс.Метрика",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Это два самых популярных инструмента веб-аналитики. Мы научимся устанавливать счётчики, настраивать цели и события, создавать пользовательские отчёты и фильтры. Также разберём различия между двумя системами и когда лучше использовать каждую из них.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Основные метрики в аналитике",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Посещения / Уникальные посетители",
                      "Показатель отказов",
                      "Глубина просмотра",
                      "Время на сайте",
                      "CTR (Click Through Rate)",
                      "CVR (Conversion Rate)",
                      "ROI (Return on Investment)",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Установка целей и событий",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Цели помогают отслеживать, сколько пользователей выполнили желаемое действие: оформили заказ, подписались на рассылку, скачали файл и т.д. Мы научимся настраивать простые и сложные цели, а также события для отслеживания взаимодействий с элементами сайта.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Сравнение источников трафика",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Не все каналы трафика одинаково эффективны. Мы научимся сравнивать органический поиск, платную рекламу, социальные сети, email-рассылки и другие источники по ключевым метрикам и делать выводы о том, куда стоит вкладывать больше ресурсов.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Контент-маркетинг и SMM",
        position: 3,
        lessons: [
          {
            title: "Основы контент-маркетинга",
            content: {
              time: 1719878400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое контент-маркетинг?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Контент-маркетинг — это стратегический подход к созданию и распространению ценного, релевантного и последовательного контента для привлечения и вовлечения целевой аудитории. Главная цель — не просто продать, а установить доверие и долгосрочные отношения с потребителем.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы контента",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Блоговые статьи",
                      "Видео",
                      "Подкасты",
                      "Инфографики",
                      "Лендинги",
                      "E-mail рассылки",
                      "Case-study",
                      "Раздача бесплатных материалов",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание контент-стратегии",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Успешный контент требует планирования. Мы научимся проводить исследование аудитории, ставить цели, выбирать каналы распространения и составлять контент-план. Также разберём, как работать с редакционным календарём и командой контент-мейкеров.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "SEO и контент",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Контент должен быть не только полезным, но и найденным. Мы научимся оптимизировать тексты под поисковые системы: правильно использовать заголовки, ключевые слова, внутренние ссылки и структуру текста.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Измерение эффективности контента",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как понять, что ваш контент работает? Мы научимся анализировать такие метрики, как просмотры, время на странице, глубину просмотра, конверсии и другие. Также расскажем, как проводить A/B-тестирование различных версий контента.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Продвижение в социальных сетях",
            content: {
              time: 1719878400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Введение в SMM",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "SMM (Social Media Marketing) — это продвижение продукта или бренда через социальные сети. Это мощный инструмент для построения лояльности, увеличения охвата и привлечения целевой аудитории. В этом уроке вы узнаете, как выбрать площадки, создать контент-план и настроить таргетированную рекламу.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Платформы для продвижения",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Instagram",
                      "Facebook",
                      "VK",
                      "Telegram",
                      "TikTok",
                      "LinkedIn",
                      "Twitter",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание контент-плана",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Успех в SMM начинается с планирования. Мы научимся создавать контент-план на месяц, выбирать форматы, распределять нагрузку и использовать контент-календарь. Также расскажем, как анализировать эффективность разных видов постов.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Таргетированная реклама в соцсетях",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Все крупные соцсети предоставляют инструменты таргетированной рекламы. Мы разберём, как настраивать кампании в Facebook Ads, Instagram и VK, выбирать аудиторию, создавать креативы и отслеживать ROI.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Взаимодействие с аудиторией",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Общение с подписчиками — важная часть SMM. Мы научимся отвечать на комментарии, организовывать голосования, конкурсы и прямые эфиры. Также поговорим о том, как использовать UGC (user-generated content) и отзывы клиентов в продвижении.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 9000000,
          },
        ],
      },
    ],
  },
  {
    title: "Психология общения в digital-эпоху",
    description:
      "Как выстраивать эффективные коммуникации через экраны: от деловой переписки до видеозвонков.",
    price: 7999,
    oldPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    published: true,
    categoryId: 10,
    faq: {
      time: 1719964800000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Будет ли курс полезен удаленным работникам?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс особенно полезен для тех, кто работает удаленно и общается с коллегами через цифровые каналы. Вы узнаете, как сохранять профессионализм, ясность и эмоциональную связь даже на расстоянии.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какие форматы общения разбираем?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Мы рассматриваем электронную почту, мессенджеры (Slack, Telegram, Microsoft Teams), видеозвонки (Zoom, Google Meet), асинхронные видеосообщения (Loom, Otter.ai) и другие современные способы дистанционного взаимодействия.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли практические задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, каждый урок включает упражнения по написанию сообщений, анализу ситуаций, записи видеоприветствий и другим активностям, которые помогут применить знания на практике.",
          },
        },
        {
          type: "header",
          data: {
            text: "Можно ли пройти курс без опыта?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс подходит всем, независимо от уровня подготовки. Мы начинаем с основ психологии общения и постепенно переходим к сложным случаям и стратегическим приёмам.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы digital-коммуникации",
        position: 1,
        lessons: [
          {
            title: "Психологические особенности онлайн-общения",
            content: {
              time: 1719964800000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как экраны влияют на общение",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Цифровое общение лишено множества сигналов, присущих живому контакту: жестов, мимики, пауз, тона голоса. Это может привести к недоразумениям, снижению эмпатии и увеличению конфликтов. В этом уроке мы изучим психологические механизмы, лежащие в основе онлайн-взаимодействия, и научимся компенсировать отсутствие физического присутствия.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Недостатки цифрового общения",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Одним из главных минусов является «асинхронность» — когда люди не общаются в реальном времени. Это замедляет принятие решений и создает риск неправильной интерпретации. Также часто возникает эффект «цифрового отстранения», когда человек чувствует себя менее ответственным за свои слова или действия.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Преимущества цифровых коммуникаций",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "С другой стороны, цифровое общение позволяет быть более осознанным в выборе слов, давать себе время на обдумывание ответа, использовать визуальные материалы и документы. Оно также даёт возможность работать с людьми из разных стран и культур, что открывает новые горизонты для карьеры и бизнеса.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Культурные различия в онлайн-общении",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В международной среде важно учитывать различия в стиле общения: например, в одних культурах принято говорить прямо, в других — мягко и с намёками. Мы расскажем, как адаптироваться к разным стилям, чтобы избежать недоразумений и строить доверительные отношения.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Роль невербальных сигналов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хотя в текстовых сообщениях их почти нет, в видеозвонках они играют важную роль. Положение тела, взгляд, поза, выражение лица — всё это влияет на восприятие собеседника. Мы научимся читать эти сигналы и правильно их использовать.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Практические техники",
        position: 2,
        lessons: [
          {
            title: "Эффективная деловая переписка",
            content: {
              time: 1719964800000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как писать письма и сообщения",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильно составленное сообщение должно быть понятным, вежливым и мотивирующим. В этом уроке вы узнаете, как структурировать письма, выбирать подходящий тон, использовать открытые вопросы и формулировать цели так, чтобы получатель хотел действовать.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Структура идеального делового письма",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы рассмотрим проверенную структуру: тема письма → приветствие → контекст/причина обращения → запрос/действие → заключение → подпись. Также научимся использовать шаблоны, чтобы экономить время и сохранять единый стиль общения.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Тон и стиль сообщений",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Тон зависит от целевой аудитории: внутренние сообщения отличаются от внешних, клиентские письма — от партнерских. Мы научимся балансировать между формальностью и дружелюбием, чтобы оставаться профессионалом и оставаться приятным в общении.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Использование эмодзи и смайлов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В зависимости от контекста и отношения с собеседником, можно использовать эмодзи, чтобы сделать сообщение более человечным. Однако важно знать меру и помнить, что в официальной переписке они могут быть неуместны.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как избегать недоразумений",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём типичные ошибки: двусмысленные формулировки, отсутствие контекста, использование сложных конструкций. Также научимся проверять сообщения перед отправкой, чтобы исключить вероятность неправильного восприятия.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Виртуальное присутствие",
            content: {
              time: 1719964800000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Имидж в видеозвонках",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Видеозвонки требуют особого внимания к своему образу и окружению. Как выглядите, где находитесь, как говорите — всё это формирует первое впечатление. В этом уроке вы узнаете, как выступать уверенно, комфортно и профессионально через камеру.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Освещение и фон",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильное освещение делает вас более заметным и приятным для глаз. Рекомендуется использовать мягкое освещение спереди, избегать источников света позади. Фон должен быть нейтральным, без отвлекающих деталей. Можно использовать виртуальные фоны, если это уместно.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Осанка и зрительный контакт",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Сидите прямо, немного наклонитесь вперёд, чтобы показать вовлечённость. Смотрите в камеру, а не на экран — это создаёт эффект прямого взгляда. Практикуйтесь заранее, чтобы чувствовать себя естественно во время встреч.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Голос и речь",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Произносите слова четко, говорите чуть медленнее обычного, делайте паузы. Используйте интонацию, чтобы передать эмоции. Избегайте слов-паразитов и повторений. Хороший микрофон тоже играет большую роль.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Подготовка к видеовстрече",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Перед встречей проверьте оборудование, протестируйте звук и интернет. Подготовьте заметки, но не читайте с листа. Убедитесь, что вам никто не помешает. Также стоит заходить за 2–3 минуты до начала, чтобы избежать технических задержек.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 2700000,
          },
        ],
      },
      {
        title: "Эмоциональный интеллект в цифровом общении",
        position: 3,
        lessons: [
          {
            title: "Эмпатия в онлайн-общении",
            content: {
              time: 1719964800000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое цифровая эмпатия",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Эмпатия — способность понимать чувства другого человека. В цифровом мире она проявляется через выбор слов, тон сообщения, внимание к контексту и реакциям. Мы научимся проявлять заботу, даже если не видим собеседника.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как выражать сочувствие в сообщениях",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В ситуациях стресса или потери важно выбрать правильные слова. Например, вместо «Я понимаю, что ты чувствуешь» лучше сказать «Мне очень жаль, что ты сейчас переживаешь». Так вы покажете настоящее участие.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Активное слушание в чатах и звонках",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Активное слушание включает подтверждение того, что вы услышали собеседника. Например, в тексте: «То есть вы хотите сказать, что...», в звонке: «Я понимаю, что вы имеете в виду...» Это помогает установить доверие и избежать недоразумений.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Управление своими эмоциями",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Иногда в сообщениях мы получаем негативную обратную связь. Научитесь не отвечать импульсивно, а обдумывать свои слова. Применяйте метод «таймера»: подождите 10–15 минут, прежде чем отправить ответ, особенно если он эмоциональный.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как давать обратную связь",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Обратная связь должна быть конкретной, уважительной и ориентированной на решение. Например: «Я заметил, что сроки были смещены. Как мы можем избежать этого в будущем?» Такой подход снижает напряжение и повышает продуктивность.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
          {
            title: "Работа с конфликтами онлайн",
            content: {
              time: 1719964800000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Почему конфликты возникают в цифровом пространстве",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Из-за отсутствия невербальных сигналов, люди чаще неправильно интерпретируют намерения друг друга. Негатив в тексте кажется сильнее, чем в устной форме. В этом уроке мы научимся распознавать ранние признаки конфликта и грамотно его разрешать.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Шаги для деэскалации конфликта",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "1. Сохраняйте спокойствие. 2. Не отвечайте сразу. 3. Признайте чувства собеседника. 4. Предложите встретиться лично (если возможно). 5. Найдите общую цель. Эти шаги помогут вам сохранить рабочие отношения и найти выход из ситуации.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Когда переходить в офлайн",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Если ситуация становится слишком напряженной, лучше перевести диалог в видеозвонок или телефонный разговор. Голос и лицо помогают смягчить конфликт и восстановить контакт.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практические примеры",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём несколько распространённых ситуаций: претензия клиента, недоразумение с коллегой, негативный отзыв. Для каждой ситуации предложим пошаговое решение, которое можно применить сразу.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
    ],
  },
  {
    title: "Кухни мира: основные техники и рецепты",
    description:
      "Освойте базовые кулинарные техники и научитесь готовить блюда из разных стран под руководством профессионального шеф-повара.",
    price: 8900,
    oldPrice: 11900,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200",
    published: true,
    categoryId: 18,
    faq: {
      time: 1720051200000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужно ли специальное оборудование?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Все рецепты адаптированы для стандартной домашней кухни. Достаточно обычной плиты, кастрюли, сковороды, ножей и разделочной доски. Никаких дорогих гаджетов не требуется.",
          },
        },
        {
          type: "header",
          data: {
            text: "Смогу ли я найти ингредиенты?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, все ингредиенты можно найти в обычных магазинах или их доступных заменителях. Где это необходимо, мы предлагаем альтернативы без потери вкуса и качества блюда.",
          },
        },
        {
          type: "header",
          data: {
            text: "Можно ли проходить курс без опыта?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Курс рассчитан на начинающих поваров. Все рецепты объясняются пошагово, с акцентом на безопасность, простоту и результат. Также есть видеоинструкции и чек-листы для каждого урока.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли домашние задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, после каждого урока вы получите практическое задание: приготовить блюдо, сфотографировать его и отправить на обратную связь. Это поможет закрепить знания и получить оценку от преподавателя.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Итальянская кухня",
        position: 1,
        lessons: [
          {
            title: "Основы пасты",
            content: {
              time: 1720051200000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Классические итальянские пасты",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Итальянская кухня начинается с пасты. В этом уроке вы узнаете, как правильно выбрать муку, приготовить тесто и формировать разные виды пасты вручную. Также освоите четыре ключевых соуса, которые являются основой итальянской кулинарии.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы пасты и их использование",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Паста бывает длинной (спагетти), короткой (пенне), трубчатой (ригатони), листовой (лавашевидной). Мы научимся выбирать правильную пасту под каждый соус и метод приготовления. Например, сливочные соусы лучше сочетаются с широкими пастами, а томатные — с рифлёными.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как приготовить идеальное тесто",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рецепт классического яичного теста требует всего двух ингредиентов: муки и яиц. Мы подробно покажем, как замешивать тесто, сколько времени ему нужно отдыхать и как правильно раскатывать его вручную или с помощью машинки.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Четыре основных соуса",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Альфредо — сливочный соус с пармезаном",
                      "Карбонара — яйца, бекон, сыр и перец",
                      "Песто — базилик, орехи, масло и сыр",
                      "Маринара — томаты, чеснок, травы",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Пошаговое приготовление трёх блюд",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "ordered",
                    items: [
                      "Феттучине Альфредо: как сделать густой соус без сливок",
                      "Спагетти Карбонара: секрет без сворачивания яиц",
                      "Равиоли с рикоттой: начинка, тесто и способ формирования",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Подача и оформление",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильная подача влияет на восприятие вкуса. Мы научим вас красиво сервировать пасту, использовать зелень, сыр и масло для завершающего акцента.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Японская кухня",
        position: 2,
        lessons: [
          {
            title: "Суши и роллы в домашних условиях",
            content: {
              time: 1720051200000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Искусство суши",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Суши — это не просто еда, это целое искусство. В этом уроке вы узнаете, как правильно выбрать рис, как его готовить и обрабатывать уксусом. Также научитесь формировать классические роллы и нигири дома.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Выбор ингредиентов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Особое внимание уделяется качеству рыбы. Для суши нужна «сушеградная» рыба, которую предварительно заморозили для безопасности. Также понадобятся водоросли нори, рис для суши, имбирь, васаби и соевый соус.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как приготовить рис для суши",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Процесс включает промывание, варку и остуживание с добавлением уксусной смеси. Мы научим вас добиваться идеальной клейкости и вкуса. Также расскажем, как хранить рис и использовать его сразу после приготовления.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Формирование роллов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы освоите несколько популярных вариантов: ролл с огурцом (каппа-маки), ролл с тунцом (тэппай) и классический филадельфия. Также научитесь использовать бамбуковый мат и правильно нарезать роллы.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Подача и этикет",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы объясним, как правильно есть суши, как пользоваться палочками, как поливать соусом и в какой последовательности пробовать разные виды.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Мисо суп и другие основы",
            content: {
              time: 1720051200000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Японские супы",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мисо-суп — один из самых известных и полезных супов японской кухни. Он делается на основе dashi (японский бульон), мисо-пасты и дополнительных ингредиентов. В этом уроке вы научитесь готовить его правильно и узнаете, какие компоненты можно менять.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Что такое Dashi",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Dashi — это основа многих японских блюд. Его готовят из сушеных водорослей комбу и сушеной рыбы (кадзубоши). Мы научим вас делать его быстро и легко, даже если вы новичок в азиатской кухне.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы мисо-пасты",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мисо бывает белым (шиншу), красным (ака) и жёлтым. У каждого свой вкус и применение. Мы объясним, когда использовать тот или иной вид и как сохранить его полезные свойства при варке.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Рецепт мисо-супа по шагам",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы подготовим dashi, добавим мисо, нарезанный тофу, водоросли и зелень. Также покажем, как правильно варить суп, чтобы мисо не перегрелось и сохранило вкус.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Другие японские супы",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Кроме мисо-супа, мы познакомим вас с раменом и супом с мясом. Покажем, как адаптировать рецепты под домашние условия и какие ингредиенты можно заменить.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Французская кухня: от классики до современных блюд",
        position: 3,
        lessons: [
          {
            title: "Классическая французская выпечка",
            content: {
              time: 1720051200000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Булочки и круассаны",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Французская выпечка — это искусство. В этом уроке вы научитесь готовить классические круассаны и багеты дома. Мы разберём технологию слоения теста, температурный режим и важные моменты для успеха.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как приготовить круассаны",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Круассаны требуют многослойного теста, которое формируется с помощью масляного пласта. Мы объясним, как правильно работать с тестом, сколько раз его складывать и как следить за температурой.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Рецепт багета",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хрустящая корочка и воздушная сердцевина — главные особенности настоящего багета. Мы научим вас правильно замешивать тесто, давать ему отдыхать и запекать так, чтобы он получился идеальным.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Подача и сопровождение",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы расскажем, как правильно подавать выпечку, с чем её сочетать и как хранить. Также научим вас печь мини-версии круассанов с различными начинками.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Французские соусы и гарниры",
            content: {
              time: 1720051200000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Пять материнских соусов",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Французская кухня основана на пяти материнских соусах: бешамель, белое молоко, эспаньоль, голландский и томатный. Эти соусы являются базой для сотен других. В этом уроке вы научитесь готовить каждый из них и применять в повседневной кулинарии.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Гарниры и сопровождение блюд",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы научим вас готовить картофельное пюре, рис-басмати, овощи на гриле и салаты по французским рецептам. Также расскажем, как правильно сочетать блюда и создавать сбалансированный обед.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
    ],
  },
  {
    title: "Физика для любознательных: от теории к практике",
    description:
      "Практический курс по фундаментальным законам физики с экспериментами, которые можно повторить дома.",
    price: 12900,
    oldPrice: 15900,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200",
    published: true,
    categoryId: 6,
    faq: {
      time: 1720137600000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Нужно ли специальное оборудование?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Все эксперименты используют общедоступные материалы, которые есть в каждом доме: батарейки, скрепки, магниты, провода, лампочки, линзы. Никаких сложных приборов не требуется.",
          },
        },
        {
          type: "header",
          data: {
            text: "Какие разделы физики будем изучать?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Механика, термодинамика, электромагнетизм и основы квантовой физики — все через практические опыты. Мы объясняем законы простым языком и показываем их применение в реальной жизни.",
          },
        },
        {
          type: "header",
          data: {
            text: "Подходит ли курс школьникам?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс рассчитан на школьников и взрослых, интересующихся наукой. Все темы подаются доступно, без сложных формул. Также есть дополнительные материалы для углубления знаний.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли домашние задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Каждый урок завершается практическим заданием: провести эксперимент, заполнить отчёт или ответить на вопросы. Это помогает лучше понять материал и закрепить его.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы механики",
        position: 1,
        lessons: [
          {
            title: "Законы Ньютона на практике",
            content: {
              time: 1720137600000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Сила, масса и ускорение",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Исаак Ньютон сформулировал три закона движения, которые до сих пор лежат в основе классической механики. В этом уроке вы не просто узнаете формулы, но и проведёте несколько экспериментов, чтобы своими глазами увидеть, как работают эти законы в повседневной жизни.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Первый закон Ньютона: инерция",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы научитесь наблюдать за инерцией на примере опыта с монетой, которую нужно сбросить в стакан, не дотрагиваясь до него. Это поможет понять, почему мы чувствуем толчок при резком торможении автомобиля.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Второй закон Ньютона: F = m * a",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "С помощью игрушечной машинки, грузиков и резинки вы сможете измерить, как изменяется ускорение при увеличении силы или массы. Это отличное введение в понятие силы и её влияния на движение.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Третий закон Ньютона: действие и противодействие",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Опыт с воздушным шариком на нитке покажет, как реактивная сила возникает при выходе воздуха. Вы увидите, как работает принцип действия и противодействия в действии.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Применение в повседневности",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы обсудим, как законы Ньютона применяются в спорте, автомобилестроении, авиации и даже в бытовых ситуациях, таких как катание на велосипеде или открывание двери.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Электричество и магнетизм",
        position: 2,
        lessons: [
          {
            title: "Собери свою схему",
            content: {
              time: 1720137600000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основы электроники",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В этом уроке вы познакомитесь с базовыми элементами электрической цепи: источник питания, провода, нагрузка, выключатель. Научитесь читать схемы и собирать простые цепи из подручных материалов.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Цепь постоянного тока",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "С помощью батарейки, светодиода и проводов вы соберёте первую рабочую цепь. Это отличная возможность понять, что такое замкнутая цепь и как течёт электрический ток.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Параллельные и последовательные соединения",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы сравните, как меняется яркость лампочек в зависимости от типа соединения. Это поможет понять, почему в квартирах используется параллельное подключение.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Изоляция и безопасность",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Безопасность при работе с электричеством — важнейшая часть этого урока. Мы объясним, как правильно использовать изоляционную ленту, как избежать короткого замыкания и что делать, если что-то перегревается.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Электромагнитная индукция",
            content: {
              time: 1720137600000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Опыты Фарадея",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В этом уроке вы повторите классические эксперименты Майкла Фарадея, в которых он впервые получил электрический ток с помощью магнита и катушки. Это основа всех современных генераторов электричества.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как работает электромагнитная индукция",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы узнаете, что при движении магнита внутри катушки создаётся переменное магнитное поле, которое вызывает появление электрического тока. Это явление называется электромагнитной индукцией.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание мини-генератора",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "С помощью медного провода, неодимового магнита и светодиода вы соберёте простейший генератор. При вращении магнита в катушке загорится лампочка — это наглядное доказательство работы закона Фарадея.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Применение в технике",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы обсудим, как электромагнитная индукция используется в электростанциях, трансформаторах, беспроводной зарядке и других устройствах, которыми мы пользуемся каждый день.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
      {
        title: "Термодинамика и энергия в повседневной жизни",
        position: 3,
        lessons: [
          {
            title: "Законы термодинамики",
            content: {
              time: 1720137600000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Тепло, работа и внутренняя энергия",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В этом уроке вы узнаете о трёх основных законах термодинамики и проведёте эксперименты, демонстрирующие, как передаётся тепло и превращается энергия.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Первый закон термодинамики: закон сохранения энергии",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы проведёте опыт с бутылкой, водой и насосом, чтобы увидеть, как давление и температура связаны между собой. Это поможет понять, как работает паровой двигатель.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Второй закон: энтропия и направление процессов",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "На примере таяния льда в теплой воде вы увидите, как возрастает беспорядок в системе. Мы объясним, почему тепло всегда передаётся от горячего к холодному, а не наоборот.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Третий закон: абсолютный ноль",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хотя достичь абсолютного нуля невозможно, мы поговорим о том, что происходит с веществами при очень низких температурах, и почему некоторые материалы становятся сверхпроводниками.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Применение в быту",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём, как термодинамика работает в холодильнике, плите, микроволновке и двигателе автомобиля. Эти знания помогут лучше понимать, как устроены окружающие нас устройства.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
          {
            title: "Энергия вокруг нас",
            content: {
              time: 1720137600000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Превращения энергии в повседневности",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Энергия может переходить из одной формы в другую: механическая → тепловая → электрическая и так далее. В этом уроке вы проведёте несколько экспериментов, чтобы увидеть, как это происходит в реальном мире.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Примеры превращений энергии",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Ручной динамо-машинка → световая энергия",
                      "Горящая свеча → тепловая + световая",
                      "Солнечная панель → электрическая энергия",
                      "Упавший мяч → потенциальная → кинетическая",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Эксперимент: солнечная печь",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "С помощью картонной коробки, фольги и полиэтилена вы сделаете простую солнечную печь. Она сможет растопить шоколад или разогреть сосиску — отличный способ увидеть, как солнечная энергия превращается в тепловую.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Значение энергии в жизни человека",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы обсудим, откуда берётся энергия, как люди научились её получать и использовать, а также какие источники энергии считаются возобновляемыми, а какие — нет.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 5400000,
          },
        ],
      },
    ],
  },
  {
    title: "Философия повседневности: как мыслить глубже и жить осознаннее",
    description:
      "Погрузитесь в философию через призму повседневной жизни. Научитесь задавать важные вопросы, анализировать свои убеждения и применять философские идеи для решения реальных жизненных задач — от принятия решений до поиска смысла.",
    price: 7900,
    oldPrice: 9900,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
    published: true,
    categoryId: 20,
    faq: {
      time: 1720224000000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Подходит ли курс новичкам?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс не требует предварительных знаний в области философии.",
          },
        },
        {
          type: "header",
          data: {
            text: "Можно ли применять знания на практике?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Абсолютно! Мы рассматриваем философию как инструмент для жизни: этика, логика, принятие решений, самопознание.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли домашние задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, после каждого урока вы получите практическое задание: размышление, анализ ситуации или дискуссию.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Введение в философию",
        position: 1,
        lessons: [
          {
            title: "Что такое философия?",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое философия?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Философия — это любовь к мудрости. Это искусство задавать глубокие вопросы о жизни, бытии, истине и смысле. В этом уроке мы разберём, чем философия отличается от других видов знания и почему она важна каждому человеку.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Философия vs религия, наука и обыденное мышление",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы рассмотрим, как философия взаимодействует с религией (вера), наукой (факты) и здравым смыслом (повседневный опыт). Также узнаем, когда стоит задаться философским вопросом, а когда — просто сделать вывод.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Зачем нужна философия сегодня?",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В условиях информационного перегруза и постоянных изменений философия помогает ориентироваться в мире, принимать осознанные решения и сохранять внутреннюю гармонию.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Исторические корни философии",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Исторические корни философии",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Философия начинается с древних культур, но особенно развивается в Древней Греции. Здесь родились первые философы, которые задались вопросами о природе вещей, знания и добродетели.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Сократ, Платон, Аристотель",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы узнаем, как Сократ учил задавать вопросы, как Платон описывал идеальный мир, и как Аристотель систематизировал знания. Также проведём аналогии с современной жизнью.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Философия как способ жизни",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Философия была не только наукой, но и образом жизни. Мы рассмотрим стоиков, эпикурейцев и другие школы, и подумаем, как их принципы могут работать сегодня.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Основные разделы философии",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Основные разделы философии",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Философия делится на несколько ключевых направлений, которые помогают нам структурировать наши размышления о мире и себе.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Онтология, эпистемология, этика, эстетика",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Онтология — что существует?",
                      "Эпистемология — что можно знать?",
                      "Этика — что хорошо, а что плохо?",
                      "Эстетика — что красиво?",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Политическая и практическая философия",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы также коснёмся вопросов справедливости, власти, права и того, как общество влияет на человека.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Этика и мораль в повседневности",
        position: 2,
        lessons: [
          {
            title: "Что такое добро и зло?",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое добро и зло?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Этические вопросы стоят перед нами каждый день. В этом уроке мы рассмотрим разные подходы к определению добра и зла.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Теории морали",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Деонтология (моральные правила)",
                      "Утилитаризм (выбор ради большего блага)",
                      "Добродетельная этика (развитие характера)",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Примеры из жизни",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Рассмотрим реальные ситуации и попробуем применить разные этические подходы к их анализу.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Этические выборы в жизни",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Этические выборы в жизни",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как принимать сложные решения, руководствуясь моральными принципами? Этот урок поможет вам понять, как использовать этику в повседневной жизни.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Личные и профессиональные дилеммы",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём примеры из разных сфер: бизнес, отношения, технологии и экология.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика анализа",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы выполните задание: проанализируйте одну из ваших жизненных ситуаций с точки зрения этической теории.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Ответственность и свобода",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Ответственность и свобода",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Свобода — одно из главных понятий философии. Но есть ли она у нас на самом деле? И если да, то насколько мы за неё ответственны?",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Свобода воли: детерминизм или выбор?",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Обсудим, можем ли мы выбирать, или всё заранее предопределено генетикой, средой и обстоятельствами.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Роль общества и культуры",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как общество формирует наше представление о добре и зле? Почему одни действия считаются правильными в одной культуре и неприемлемыми в другой?",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Самопознание и смысл жизни",
        position: 3,
        lessons: [
          {
            title: "Кто я?",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Кто я?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Этот урок посвящён вопросу идентичности и смысла. Кто я на самом деле? Чем я отличаюсь от других? Есть ли во мне нечто неизменное?",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Философия личности",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы рассмотрим взгляды таких авторов, как Декарт, Ницше, Бубер и другие, чтобы лучше понять, что значит быть собой.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика самопознания",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы создадите «Карту Я» — визуальное или текстовое описание своих ценностей, установок, верований и целей.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Поиск смысла",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Поиск смысла",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Что придаёт жизни ценность? Можно ли жить без смысла? В этом уроке мы обратимся к экзистенциалистам и другим философам, чтобы найти ответы.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Экзистенциализм и жизнь без гарантий",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы рассмотрим взгляды Кьеркегора, Сартра, Камю и научимся находить смысл даже в абсурде.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практическое задание: письмо будущему Я",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Напишите письмо своему будущему «Я» — о том, что имеет значение, чего вы хотите достичь и кто вы есть сейчас.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Жизнь и смерть",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Жизнь и смерть",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Смерть — неотъемлемая часть человеческого опыта. В этом уроке мы обсудим, как отношение к смерти влияет на наш образ жизни.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Философия смерти",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хайдеггер, Эпикур, буддизм и другие традиции рассматривают смерть по-разному. Мы сравним их подходы и найдём то, что может помочь лично вам.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практическое задание: список жизненных целей",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Составьте список того, что вы хотите успеть сделать в жизни, исходя из осознания её конечности.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Логика и критическое мышление",
        position: 4,
        lessons: [
          {
            title: "Искусство аргументации",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Искусство аргументации",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научитесь строить логичные аргументы, распознавать ошибки в рассуждениях и вести конструктивные споры.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Формальная логика",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём базовые понятия: дедукция, индукция, силлогизмы, парадоксы и логические заблуждения.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: защита точки зрения",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы будете участвовать в мини-дебатах и тренировать навыки аргументации и критического мышления.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Критическое мышление в цифровую эпоху",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Критическое мышление в цифровую эпоху",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Сегодня мы сталкиваемся с огромным количеством информации. Научитесь фильтровать её, проверять источники и противостоять манипуляциям.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как читать новости и не терять голову",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберём, как отличить факт от мнения, как распознать пропаганду и как сохранять ясность в потоке информации.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: анализ информации",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы получите задание — выбрать статью или видео и проанализировать его с точки зрения достоверности и логичности.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Диалог с миром",
            content: {
              time: 1720224000000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Диалог с миром",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Философия — это прежде всего диалог. В этом уроке вы примете участие в групповом обсуждении, где сможете задать любой вопрос и услышать разные точки зрения.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Философия как способ общения",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы научим вас слушать, формулировать мысли и уважать чужое мнение — навыки, которые пригодятся не только в философии, но и в жизни.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
    ],
  },
  {
    title:
      "Искусство публичных выступлений: как говорить уверенно и вдохновлять",
    description:
      "Научитесь преодолевать страх сцены, структурировать речь и говорить так, чтобы вас слушали — на работе, на сцене или перед камерой.",
    price: 9900,
    oldPrice: 12900,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    published: true,
    categoryId: 10,
    faq: {
      time: 1720310400000,
      blocks: [
        {
          type: "header",
          data: {
            text: "Часто задаваемые вопросы",
            level: 3,
          },
        },
        {
          type: "header",
          data: {
            text: "Подходит ли курс новичкам?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс подходит как начинающим, так и тем, кто уже выступает, но хочет улучшить навыки.",
          },
        },
        {
          type: "header",
          data: {
            text: "Нужно ли специальное оборудование?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Нет, достаточно телефона или камеры для записи своих тренировок. Вся практика адаптирована под домашние условия.",
          },
        },
        {
          type: "header",
          data: {
            text: "Есть ли практические задания?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, после каждого урока — упражнения: от коротких презентаций до полноценного выступления с обратной связью.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы ораторского мастерства",
        position: 1,
        lessons: [
          {
            title: "Введение в публичные выступления",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Что такое эффективная речь?",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Почему одни люди захватывают внимание аудитории, а другие вызывают зевоту? Мы разберём ключевые элементы успешного выступления: голос, язык тела, эмоции и структура речи.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Типы публичных выступлений",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Презентации и доклады",
                      "Мотивационные и инспирирующие речи",
                      "Выступления на мероприятиях и конференциях",
                      "Онлайн-презентации и видеовыступления",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Цели и результаты курса",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "К концу курса вы научитесь планировать речь, выступать без страха, использовать невербальные сигналы и создавать яркое впечатление.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Как побороть страх сцены",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Страх и волнение: почему они возникают",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Страх публичных выступлений — один из самых распространённых. Мы разберём физиологию стресса, психологические причины и научимся превращать волнение в энергию.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практические техники снижения тревожности",
                    level: 2,
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Дыхательные упражнения",
                      "Позитивное мышление и визуализация",
                      "Разогрев голоса и тела",
                      "Постановка цели перед выступлением",
                    ],
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как переключиться с себя на аудиторию",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Уверенность приходит, когда ты сосредоточен не на себе, а на том, что хочешь донести. Мы научим вас видеть аудиторию как союзника, а не судью.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Язык тела и невербальное общение",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Сила невербального общения",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Большая часть восприятия зависит не от слов, а от тона, жестов и позиции тела. Вы узнаете, как выглядеть уверенно даже если чувствуете внутреннюю неуверенность.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Что говорит ваше тело",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Открытая поза, зрительный контакт, уверенность в движениях — всё это формирует образ компетентного и харизматичного оратора. Практика с записью на видео поможет вам увидеть себя глазами аудитории.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Техники самопрезентации",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы научитесь правильно входить в пространство, начинать выступление, двигаться по сцене и завершать его с эффектом.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Структура и содержание речи",
        position: 2,
        lessons: [
          {
            title: "Как построить историю",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Эффективная структура выступления",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Хорошее выступление — это история. Мы разберём проверенную структуру: введение, основная часть, заключение, а также добавим «крючки» для удержания внимания.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Захватывающее начало",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Первые 10 секунд решают успех всего выступления. Мы покажем, как начать ярко и сразу вовлечь аудиторию.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Развёртывание мысли",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Научим вас логично переходить от одной идеи к другой, использовать примеры, метафоры и истории, чтобы сделать речь живой и понятной.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Завершение с акцентом",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Заключение — это то, что запомнится. Мы научим вас делать выводы, повторять ключевые моменты и оставлять аудиторию с вдохновением.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Голос и риторика",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Голос как инструмент влияния",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Громкость, темп, паузы, интонации — всё это влияет на восприятие вашей речи. Вы научитесь читать текст с выражением, менять тон и работать над дикцией.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Упражнения для развития голоса",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Артикуляционная гимнастика, работа с дыханием, расстановка пауз и работа над четкостью произношения — всё это поможет говорить яснее и увереннее.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Риторические приёмы",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Антонимы, параллелизм, инверсия, триада — эти приёмы делают речь более запоминающейся и воздействующей на эмоции.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Подготовка к выступлению",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как написать речь",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы научитесь составлять тезисы, находить главную мысль и выстраивать логику выступления. Также получите шаблоны для разных типов речи.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Работа с заметками и телесу",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как говорить свободно, но не терять фокус? Как использовать карточки, телесу и цифровые подсказки без потери контакта с аудиторией?",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Репетиция и самоконтроль",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Правильная подготовка — половина успеха. Мы разберём, как репетировать дома, с кем тренироваться и как анализировать свою запись.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Практика и развитие",
        position: 3,
        lessons: [
          {
            title: "Типичные ошибки и как их избежать",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Частые ошибки выступающих",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "От слишком длинных предложений до постоянного бега взгляда — мы разберём самые частые ошибки и покажем, как их исправить.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Обратная связь и самоанализ",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы будете учиться давать и принимать конструктивную обратную связь, смотреть на себя со стороны и корректировать речь.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как реагировать на вопросы",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы разберём, как отвечать на сложные вопросы, сохранять спокойствие и управлять диалогом.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Выступление онлайн",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Особенности онлайн-выступлений",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Онлайн-формат требует особого подхода: правильное освещение, фон, взгляд в камеру, работа с чатом — всё это важно для эффективного выступления.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Создание контента для YouTube, Instagram и TikTok",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы узнаете, как готовить устные выступления для соцсетей, использовать интригу и вовлечение, чтобы зритель досмотрел до конца.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Живые стримы и интервью",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Разберём, как вести себя в прямом эфире, отвечать на комментарии и оставаться в фокусе, даже если что-то идёт не так.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Развитие как оратора",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как стать лучше каждый день",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Формируем привычку говорить ясно, чётко и убедительно. Расскажем, какие книги читать, на кого смотреть и как развиваться дальше.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Практика: мини-выступление",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы подготовите и запишите короткое выступление (2–3 минуты), которое будет оценено по нескольким критериям: структура, дикция, эмоциональная подача, контакт с аудиторией.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Дальнейшее развитие",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Мы дадим рекомендации по развитию: участие в клубах ораторов, методы самотренировок, платформы для выступлений и как найти своё уникальное «говорящее» Я.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
      {
        title: "Дополнительные техники и углубление",
        position: 4,
        lessons: [
          {
            title: "Юмор и эмоции в речи",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как использовать юмор и эмоции",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Юмор — мощный инструмент, но он должен быть уместным. Мы научим вас включать легкие шутки, анекдоты и иронию в речь, чтобы выступление было не только полезным, но и приятным.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Работа с эмоциями",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как говорить серьёзно, но не скучно? Как показывать искренность и убеждённость? Мы научим вас использовать эмоции как инструмент влияния.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Эмоциональный тон и интонации",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Вы научитесь менять голос, использовать паузы и интонации, чтобы выступление было живым и вовлекающим.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Техническая сторона выступления",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Освещение, звук и ракурс",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Даже самая сильная речь теряет силу, если плохо слышно или мешает фон. Мы расскажем, как организовать комфортное техническое окружение для онлайн-выступлений.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Как выбрать микрофон и камеру",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Объясним, какой микрофон выбрать, как настроить освещение и установить камеру, чтобы зритель чувствовал ваше присутствие.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Работа с технологическими сбоями",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Что делать, если вы потеряли звук, зависла камера или вы забыли, что сказать? Научимся выходить из сложных ситуаций с достоинством.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 2,
            duration: 3600000,
          },
          {
            title: "Выступление вживую",
            content: {
              time: 1720310400000,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Как говорить перед живой аудиторией",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "В этом уроке мы разберём, как читать речь перед живой аудиторией: использование пауз, взаимодействие с людьми, чтение реакции и управление энергетикой зала.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Работа с вопросами и ответами",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как правильно принять вопрос, не потерять фокус и дать исчерпывающий, но ёмкий ответ. Также научим вас отвечать на провокационные и сложные вопросы.",
                  },
                },
                {
                  type: "header",
                  data: {
                    text: "Техники вовлечения аудитории",
                    level: 2,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Где уместны шутки, где — серьёзность, как вовлечь зал через вопросы, голосование или интерактив — всё это поможет сделать выступление живым.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 3,
            duration: 3600000,
          },
        ],
      },
    ],
  },
];
