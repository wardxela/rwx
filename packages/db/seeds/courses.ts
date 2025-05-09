export default [
  {
    title: "Основы веб-разработки с React",
    description:
      "Полный курс по современной веб-разработке с использованием React, TypeScript и лучших практик.",
    price: 14999,
    oldPrice: 19999,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
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
            text: "Курс рассчитан на новичков, но базовое понимание JavaScript будет полезно.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Доступ к материалам курса предоставляется навсегда после покупки.",
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
                      "Компонентный подход",
                      "Virtual DOM",
                      "Однонаправленный поток данных",
                      "JSX синтаксис",
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
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
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
                    text: "Состояние (state) позволяет компонентам React реагировать на пользовательский ввод, серверные ответы и другие изменения.",
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
                    text: "Рассмотрим основные техники оптимизации React-приложений для улучшения пользовательского опыта.",
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
    ],
  },
  {
    title: "Docker с нуля: полный курс по контейнеризации",
    description:
      "Освойте Docker и Kubernetes для эффективной разработки и развертывания приложений.",
    price: 12999,
    oldPrice: 16999,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
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
            text: "Базовые знания Linux будут полезны, но курс включает все необходимые основы.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Docker работает на Windows, Mac и Linux. Для комфортной работы рекомендуется минимум 8ГБ RAM.",
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
                    text: "Docker - это платформа для разработки, доставки и запуска приложений в контейнерах.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Изоляция приложений",
                      "Легковесность",
                      "Переносимость",
                      "Масштабируемость",
                    ],
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
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
                    text: "Научимся работать с Docker образами и контейнерами.",
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
                    text: "Изучим работу с docker-compose для управления мультиконтейнерными приложениями.",
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
                    text: "Обзор Kubernetes - системы оркестрации контейнеров для production окружения.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 7200000,
          },
        ],
      },
    ],
  },
  {
    title: "Английский для IT-специалистов",
    description:
      "Практический курс английского языка для разработчиков, тестировщиков и других IT-специалистов.",
    price: 9999,
    oldPrice: 12999,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
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
            text: "Курс рассчитан на уровень Pre-Intermediate и выше. Если вы знаете базовые грамматические конструкции, курс вам подойдет.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Да, особое внимание уделяется технической терминологии, документации и общению в рабочей среде.",
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
                    text: "Изучим наиболее часто используемые термины в разработке программного обеспечения:",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "unordered",
                    items: [
                      "Backend/Frontend",
                      "API",
                      "Debugging",
                      "Deployment",
                    ],
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 2700000,
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
                    text: "Разберем структуру технической документации и научимся быстро находить нужную информацию.",
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
                    text: "Изучим форматы делового общения в IT-сфере и типичные фразы для рабочих ситуаций.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 5400000,
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
                    text: "Разберем фразы для активного участия в онлайн-встречах и выражения для согласия/несогласия.",
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
    title: "Основы UI/UX дизайна",
    description:
      "Практический курс по созданию удобных и привлекательных интерфейсов для веб и мобильных приложений.",
    price: 11999,
    oldPrice: 14999,
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    published: true,
    categoryId: 2, // Дизайн
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
            text: "Нужно ли уметь рисовать?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Нет, для UI/UX дизайна важнее понимание принципов композиции и работы с инструментами, чем навыки рисования.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Основной инструмент курса - Figma (бесплатный онлайн-инструмент). Также рассмотрим принципы, применимые в Sketch и Adobe XD.",
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
              time: Date.now(),
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
                    text: "Изучим ключевые принципы проектирования пользовательского опыта и распространенные ошибки.",
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
              time: Date.now(),
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
                    text: "Методы исследования потребностей и поведения пользователей: интервью, персонажи, сценарии использования.",
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
              time: Date.now(),
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
                    text: "Знакомство с интерфейсом Figma, создание первых макетов и компонентов.",
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
              time: Date.now(),
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
                    text: "Создание кликабельных прототипов для тестирования пользовательских сценариев.",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
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
          type: "delimiter",
          data: {},
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
    title: "Финансовая грамотность для предпринимателей",
    description:
      "Практический курс по управлению финансами бизнеса: от составления бюджета до инвестиций.",
    price: 15999,
    oldPrice: 19999,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    published: true,
    categoryId: 11, // Бизнес
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
            text: "Подойдет ли курс для ИП?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс специально разработан для индивидуальных предпринимателей и владельцев малого бизнеса.",
          },
        },
        {
          type: "delimiter",
          data: {},
        },
        {
          type: "header",
          data: {
            text: "Какие темы будут рассмотрены?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Налоговое планирование, управление денежными потоками, инвестирование прибыли и защита активов.",
          },
        },
      ],
      version: "2.22.2",
    },
    modules: [
      {
        title: "Основы финансового учета",
        position: 1,
        lessons: [
          {
            title: "Бизнес-модели и доходы",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Анализ бизнес-модели",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как правильно оценить доходность бизнеса и спрогнозировать денежные потоки.",
                  },
                },
              ],
              version: "2.22.2",
            },
            position: 1,
            duration: 3600000,
          },
          {
            title: "Управление расходами",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Оптимизация затрат",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Методы сокращения расходов без потери качества продукции или услуг.",
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
        title: "Инвестиции и рост",
        position: 2,
        lessons: [
          {
            title: "Инвестирование прибыли",
            content: {
              time: Date.now(),
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "Стратегии инвестирования",
                    level: 1,
                  },
                },
                {
                  type: "paragraph",
                  data: {
                    text: "Как правильно распределять прибыль между развитием бизнеса и личными инвестициями.",
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
    ],
  },
  {
    title: "Психология общения в digital-эпоху",
    description:
      "Как выстраивать эффективные коммуникации через экраны: от деловой переписки до видеозвонков.",
    price: 7999,
    oldPrice: 9999,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    published: true,
    categoryId: 10, // Психология
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
            text: "Будет ли курс полезен удаленным работникам?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Да, курс особенно полезен для тех, кто работает удаленно и общается с коллегами через цифровые каналы.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Электронная почта, чаты (Slack, Teams), видеозвонки (Zoom), асинхронные видеосообщения (Loom).",
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
              time: Date.now(),
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
                    text: "Разбираем, чем цифровое общение принципиально отличается от личных встреч.",
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
              time: Date.now(),
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
                    text: "Психологические приемы для увеличения отклика на ваши сообщения.",
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
              time: Date.now(),
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
                    text: "Как создать профессиональное впечатление через камеру: поза, освещение, фон.",
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
    ],
  },
  {
    title: "Кухни мира: основные техники и рецепты",
    description:
      "Освойте базовые кулинарные техники и научитесь готовить блюда из разных стран под руководством профессионального шеф-повара.",
    price: 8900,
    oldPrice: 11900,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    published: true,
    categoryId: 18, // Кулинария
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
            text: "Нужно ли специальное оборудование?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Все рецепты адаптированы для стандартной домашней кухни. Достаточно обычной плиты и базовой посуды.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Да, все ингредиенты можно найти в обычных магазинах. Где нужно - даем доступные альтернативы.",
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
              time: Date.now(),
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
                    text: "Научимся готовить три базовых вида теста и четыре классических соуса к пасте.",
                  },
                },
                {
                  type: "list",
                  data: {
                    style: "ordered",
                    items: [
                      "Феттучине Альфредо",
                      "Спагетти Карбонара",
                      "Равиоли с рикоттой",
                    ],
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
              time: Date.now(),
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
                    text: "Освоим приготовление риса для суши и научимся формировать классические роллы.",
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
              time: Date.now(),
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
                    text: "Разбираем основные ингредиенты японской кухни и готовим мисо суп по традиционному рецепту.",
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
    ],
  },
  {
    title: "Физика для любознательных: от теории к практике",
    description:
      "Практический курс по фундаментальным законам физики с экспериментами, которые можно повторить дома.",
    price: 12900,
    oldPrice: 15900,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    published: true,
    categoryId: 6, // Физика
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
            text: "Нужно ли специальное оборудование?",
            level: 4,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Все эксперименты используют общедоступные материалы, которые есть в каждом доме.",
          },
        },
        {
          type: "delimiter",
          data: {},
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
            text: "Механика, термодинамика, электромагнетизм и основы квантовой физики - все через практические опыты.",
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
              time: Date.now(),
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
                    text: "Проведем простые эксперименты для демонстрации всех трех законов Ньютона.",
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
              time: Date.now(),
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
                    text: "Научимся читать схемы и собирать простые электрические цепи из подручных материалов.",
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
              time: Date.now(),
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
                    text: "Повторим классические эксперименты по генерации электричества с помощью магнитов.",
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
];
