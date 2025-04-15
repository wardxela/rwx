export default [
  {
    title: "Docker для начинающих: основы контейнеризации",
    content: {
      time: 1635603431945,
      blocks: [
        {
          type: "header",
          data: {
            text: "Docker для начинающих: основы контейнеризации",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Docker произвел революцию в мире разработки программного обеспечения, сделав процесс развертывания приложений значительно проще и надежнее. В этой статье мы разберем основные концепции Docker и научимся использовать его в повседневной работе.",
          },
        },
        {
          type: "header",
          data: {
            text: "Что такое Docker?",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Docker — это платформа для разработки, доставки и запуска приложений в контейнерах. Контейнеры позволяют упаковать приложение со всеми его зависимостями в стандартизированный модуль для разработки.",
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Изоляция: каждый контейнер работает независимо",
              "Переносимость: работает одинаково на любой системе",
              "Легковесность: использует ресурсы эффективнее виртуальных машин",
              "Масштабируемость: легко масштабировать и обновлять приложения",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Основные понятия",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Dockerfile — инструкция по сборке образа",
              "Image (Образ) — шаблон для создания контейнера",
              "Container (Контейнер) — запущенный экземпляр образа",
              "Registry — хранилище образов (например, Docker Hub)",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Первые шаги с Docker",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# Проверка версии Docker\ndocker --version\n\n# Запуск первого контейнера\ndocker run hello-world",
            language: "bash",
          },
        },
        {
          type: "header",
          data: {
            text: "Создание простого Dockerfile",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: 'FROM node:14\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]',
            language: "dockerfile",
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Этот простой Dockerfile создает образ для Node.js приложения. Давайте разберем каждую строку:",
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "FROM: указывает базовый образ",
              "WORKDIR: устанавливает рабочую директорию",
              "COPY: копирует файлы в образ",
              "RUN: выполняет команды при сборке",
              "EXPOSE: указывает порт",
              "CMD: команда по умолчанию при запуске",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Основные команды Docker",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# Сборка образа\ndocker build -t myapp .\n\n# Запуск контейнера\ndocker run -p 3000:3000 myapp\n\n# Список контейнеров\ndocker ps\n\n# Остановка контейнера\ndocker stop <container_id>\n\n# Удаление контейнера\ndocker rm <container_id>",
            language: "bash",
          },
        },
        {
          type: "header",
          data: {
            text: "Docker Compose",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Docker Compose позволяет определять и запускать многоконтейнерные приложения. Вот пример docker-compose.yml:",
          },
        },
        {
          type: "code",
          data: {
            code: "version: '3'\nservices:\n  web:\n    build: .\n    ports:\n      - \"3000:3000\"\n  db:\n    image: mongo\n    volumes:\n      - db-data:/data/db\nvolumes:\n  db-data:",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "Лучшие практики",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Используйте .dockerignore для исключения ненужных файлов",
              "Минимизируйте количество слоев в образе",
              "Используйте многоступенчатую сборку для оптимизации",
              "Не запускайте процессы от root",
              "Следите за безопасностью образов",
              "Регулярно обновляйте базовые образы",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Заключение",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Docker — мощный инструмент, который становится необходимым навыком для современного разработчика. Начните с малого, экспериментируйте и постепенно внедряйте Docker в свои проекты. Практика — ключ к успешному освоению контейнеризации.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по началу работы с Docker, включая основные концепции, команды и лучшие практики использования контейнеризации.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    categoryId: 1, // Программирование
    tags: [6], // Docker
  },
  {
    title: "Git Flow: организация работы в команде",
    content: {
      time: 1635603431946,
      blocks: [
        {
          type: "header",
          data: {
            text: "Git Flow: эффективная организация командной разработки",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Git Flow — это набор правил и соглашений для работы с Git, который помогает организовать процесс разработки в команде. Эта модель ветвления была представлена Винсентом Дриссеном и стала стандартом во многих командах.",
          },
        },
        {
          type: "header",
          data: {
            text: "Основные ветки",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "main (или master) — основная ветка, содержащая стабильный код продакшена",
              "develop — ветка разработки, содержащая последние изменения для следующего релиза",
              "feature/* — ветки для разработки новых функций",
              "release/* — ветки для подготовки релиза",
              "hotfix/* — ветки для срочных исправлений в продакшене",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Работа с feature-ветками",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# Создание новой feature-ветки\ngit checkout develop\ngit checkout -b feature/new-feature\n\n# Работа над функционалом\ngit add .\ngit commit -m "Add new feature"\n\n# Слияние с develop\ngit checkout develop\ngit merge --no-ff feature/new-feature',
            language: "bash",
          },
        },
        {
          type: "header",
          data: {
            text: "Создание релиза",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# Создание release-ветки\ngit checkout develop\ngit checkout -b release/1.0.0\n\n# Внесение правок в релиз\ngit commit -m "Bump version to 1.0.0"\n\n# Слияние в main и develop\ngit checkout main\ngit merge --no-ff release/1.0.0\ngit tag -a v1.0.0 -m "Version 1.0.0"\n\ngit checkout develop\ngit merge --no-ff release/1.0.0',
            language: "bash",
          },
        },
        {
          type: "header",
          data: {
            text: "Исправление критических ошибок",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# Создание hotfix-ветки\ngit checkout main\ngit checkout -b hotfix/1.0.1\n\n# Исправление бага\ngit commit -m "Fix critical bug"\n\n# Слияние в main и develop\ngit checkout main\ngit merge --no-ff hotfix/1.0.1\ngit tag -a v1.0.1\n\ngit checkout develop\ngit merge --no-ff hotfix/1.0.1',
            language: "bash",
          },
        },
        {
          type: "header",
          data: {
            text: "Правила именования веток",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "feature/user-authentication",
              "release/2.1.0",
              "hotfix/security-patch",
              "bugfix/login-error",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Правила написания коммитов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "feat: add user authentication\nfix: resolve login page crash\ndocs: update README.md\nstyle: format code according to guidelines\nrefactor: restructure authentication logic\ntest: add unit tests for auth module\nchore: update dependencies",
            language: "plaintext",
          },
        },
        {
          type: "header",
          data: {
            text: "Рекомендации по работе с Git Flow",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Никогда не коммитьте напрямую в main или develop",
              "Используйте pull requests для код-ревью",
              "Регулярно синхронизируйтесь с develop",
              "Удаляйте ветки после слияния",
              "Следите за чистотой истории коммитов",
              "Используйте теги для маркировки релизов",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Инструменты для работы с Git Flow",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "git-flow — набор расширений для git",
              "GitHub Flow — упрощённая версия для непрерывной поставки",
              "GitLab Flow — адаптация под GitLab",
              "Sourcetree — GUI с поддержкой Git Flow",
              "VS Code Git Flow — расширение для Visual Studio Code",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Git Flow может показаться сложным на первый взгляд, но это мощный инструмент для организации процесса разработки. Он особенно полезен для проектов с регулярными релизами и необходимостью поддержки нескольких версий продукта.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Полное руководство по использованию Git Flow в командной разработке. Узнайте, как организовать процесс разработки, управлять ветками и релизами.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    categoryId: 1,
    tags: [7], // Git
  },
  {
    title: "Оптимизация производительности React-приложений",
    content: {
      time: 1635603431947,
      blocks: [
        {
          type: "header",
          data: {
            text: "Оптимизация производительности React-приложений: полное руководство",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Производительность — ключевой фактор успеха современных веб-приложений. В этой статье мы рассмотрим основные техники оптимизации React-приложений, от простых приемов до продвинутых стратегий.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Мемоизация компонентов",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "React.memo() - мощный инструмент для предотвращения ненужных ререндеров компонентов. Используйте его для компонентов, которые часто получают одинаковые пропсы.",
          },
        },
        {
          type: "code",
          data: {
            code: "const ExpensiveComponent = React.memo(({ data }) => {\n  return (\n    <div>\n      {/* Сложные вычисления */}\n      {data.map(item => <Item key={item.id} {...item} />)}\n    </div>\n  );\n}, (prevProps, nextProps) => {\n  return prevProps.data === nextProps.data;\n});",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Хуки useMemo и useCallback",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n\nconst memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Виртуализация списков",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { FixedSizeList } from 'react-window';\n\nconst Row = ({ index, style }) => (\n  <div style={style}>Row {index}</div>\n);\n\nconst Example = () => (\n  <FixedSizeList\n    height={400}\n    width={300}\n    itemCount={1000}\n    itemSize={35}\n  >\n    {Row}\n  </FixedSizeList>\n);",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Ленивая загрузка компонентов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "const HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Оптимизация состояния",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// ❌ Плохо\nsetState(prevState => ({\n  ...prevState,\n  deeply: {\n    ...prevState.deeply,\n    nested: {\n      ...prevState.deeply.nested,\n      prop: newValue\n    }\n  }\n}));\n\n// ✅ Хорошо\nimport produce from 'immer';\n\nsetState(produce(draft => {\n  draft.deeply.nested.prop = newValue;\n}));",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Оптимизация рендеринга",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Используйте React.Fragment вместо лишних div",
              "Выносите стили из рендер-метода",
              "Избегайте инлайновых функций в рендере",
              "Используйте key правильно",
            ],
          },
        },
        {
          type: "code",
          data: {
            code: "// ❌ Плохо\n<div onClick={() => handleClick(id)}>\n\n// ✅ Хорошо\nconst handleClick = useCallback((id) => {\n  // обработка\n}, []);\n\n<div onClick={handleClick}>",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Профилирование и измерение производительности",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "React DevTools Profiler",
              "Chrome Performance Tab",
              "why-did-you-render библиотека",
              "Lighthouse аудит",
            ],
          },
        },
        {
          type: "code",
          data: {
            code: "import whyDidYouRender from '@welldone-software/why-did-you-render';\n\nif (process.env.NODE_ENV === 'development') {\n  whyDidYouRender(React, {\n    trackAllPureComponents: true,\n  });\n}",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Code Splitting",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Разделение по маршрутам\nconst Home = lazy(() => import('./routes/Home'));\nconst About = lazy(() => import('./routes/About'));\n\n// Разделение по компонентам\nconst Modal = lazy(() => import('./components/Modal'));",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "9. Кэширование данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { QueryClient, QueryClientProvider, useQuery } from 'react-query';\n\nconst queryClient = new QueryClient();\n\nfunction App() {\n  const { data } = useQuery('todos', fetchTodos, {\n    cacheTime: 5000,\n    staleTime: 2000\n  });\n}",
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "Заключение",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Оптимизация React-приложений — это итеративный процесс. Начните с измерения производительности, определите узкие места и применяйте соответствующие техники оптимизации. Помните, что преждевременная оптимизация может усложнить код без существенной выгоды.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по оптимизации производительности React-приложений, включая мемоизацию, code splitting, виртуализацию и лучшие практики.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    categoryId: 1,
    tags: [1, 3, 8], // JavaScript, React, TypeScript
  },
  {
    title: "Безопасность веб-приложений: основные уязвимости и защита",
    content: {
      time: 1635603431948,
      blocks: [
        {
          type: "header",
          data: {
            text: "Безопасность веб-приложений: защита от основных угроз",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "В современном мире безопасность веб-приложений становится критически важной. Каждый день появляются новые уязвимости и методы атак. Давайте рассмотрим основные угрозы и способы защиты от них.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Cross-Site Scripting (XSS)",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "XSS позволяет злоумышленникам внедрять вредоносный код на страницы, которые видят другие пользователи.",
          },
        },
        {
          type: "code",
          data: {
            code: "// ❌ Уязвимый код\nconst userInput = req.query.userInput;\nres.send(`<div>${userInput}</div>`);\n\n// ✅ Безопасный код\nconst sanitizedInput = DOMPurify.sanitize(userInput);\nres.send(`<div>${sanitizedInput}</div>`);\n\n// React автоматически экранирует строки\nconst Component = () => <div>{userInput}</div>;",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "2. SQL Injection",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// ❌ Уязвимый код\nconst query = `SELECT * FROM users WHERE id = ${userId}`;\n\n// ✅ Безопасный код с параметризованными запросами\nconst query = 'SELECT * FROM users WHERE id = ?';\ndb.query(query, [userId]);\n\n// ✅ Использование ORM\nconst user = await prisma.user.findUnique({\n  where: { id: userId }\n});",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Cross-Site Request Forgery (CSRF)",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '// Express middleware для CSRF защиты\napp.use(csrf());\n\n// React компонент с CSRF токеном\nconst Form = () => (\n  <form action="/api/data" method="POST">\n    <input type="hidden" name="_csrf" value={csrfToken} />\n    <input type="text" name="data" />\n    <button type="submit">Send</button>\n  </form>\n);',
            language: "jsx",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Безопасные заголовки HTTP",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Express middleware для безопасных заголовков\napp.use(helmet());\n\n// Основные заголовки безопасности\nres.setHeader('Content-Security-Policy', \"default-src 'self'\");\nres.setHeader('X-Frame-Options', 'DENY');\nres.setHeader('X-Content-Type-Options', 'nosniff');\nres.setHeader('Strict-Transport-Security', 'max-age=31536000');",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Аутентификация и авторизация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Хеширование паролей\nconst bcrypt = require('bcrypt');\n\nconst hashPassword = async (password) => {\n  const salt = await bcrypt.genSalt(10);\n  return bcrypt.hash(password, salt);\n};\n\n// JWT токены\nconst jwt = require('jsonwebtoken');\n\nconst generateToken = (user) => {\n  return jwt.sign(\n    { id: user.id, role: user.role },\n    process.env.JWT_SECRET,\n    { expiresIn: '24h' }\n  );\n};",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Защита от DoS-атак",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Rate limiting\nconst rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 минут\n  max: 100 // максимум 100 запросов\n});\n\napp.use('/api/', limiter);",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Валидация данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "const { body, validationResult } = require('express-validator');\n\napp.post(\n  '/api/user',\n  [\n    body('email').isEmail(),\n    body('password').isLength({ min: 8 }),\n    body('age').isInt({ min: 18 })\n  ],\n  (req, res) => {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ errors: errors.array() });\n    }\n    // Обработка данных\n  }\n);",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Безопасное хранение данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "const crypto = require('crypto');\n\nconst encrypt = (text) => {\n  const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);\n  let encrypted = cipher.update(text, 'utf8', 'hex');\n  encrypted += cipher.final('hex');\n  return encrypted;\n};\n\nconst decrypt = (encrypted) => {\n  const decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTION_KEY);\n  let decrypted = decipher.update(encrypted, 'hex', 'utf8');\n  decrypted += decipher.final('utf8');\n  return decrypted;\n};",
            language: "javascript",
          },
        },
        {
          type: "header",
          data: {
            text: "Лучшие практики безопасности",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Регулярное обновление зависимостей",
              "Использование HTTPS",
              "Правильная конфигурация CORS",
              "Логирование безопасности",
              "Регулярные аудиты безопасности",
              "Мониторинг подозрительной активности",
              "Резервное копирование данных",
              "Plan for failure (планирование действий при взломе)",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Безопасность — это непрерывный процесс, а не конечная цель. Регулярно обновляйте свои знания о безопасности и следите за новыми угрозами и методами защиты.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Комплексное руководство по безопасности веб-приложений, включая защиту от XSS, SQL-инъекций, CSRF и других типов атак, а также лучшие практики реализации безопасности.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    categoryId: 1,
    tags: [1, 4], // JavaScript, Node.js
  },
  {
    title: "Введение в машинное обучение на Python",
    content: {
      time: 1635603431949,
      blocks: [
        {
          type: "header",
          data: {
            text: "Машинное обучение на Python: от теории к практике",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Машинное обучение стало неотъемлемой частью современной разработки. В этой статье мы рассмотрим основы ML на Python с практическими примерами.",
          },
        },
        {
          type: "header",
          data: {
            text: "Подготовка окружения",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# Установка необходимых библиотек\npip install numpy pandas scikit-learn matplotlib seaborn\n\n# Импорт библиотек\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score, confusion_matrix",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Загрузка и подготовка данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# Загрузка датасета\ndf = pd.read_csv('dataset.csv')\n\n# Базовый анализ данных\nprint(df.head())\nprint(df.info())\nprint(df.describe())\n\n# Проверка пропущенных значений\nprint(df.isnull().sum())\n\n# Обработка пропущенных данных\ndf = df.fillna(df.mean())",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Предобработка данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# Разделение на признаки и целевую переменную\nX = df.drop('target', axis=1)\ny = df['target']\n\n# Разделение на тренировочную и тестовую выборки\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Стандартизация данных\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Линейная регрессия",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "from sklearn.linear_model import LinearRegression\n\n# Создание и обучение модели\nmodel = LinearRegression()\nmodel.fit(X_train_scaled, y_train)\n\n# Предсказание и оценка\ny_pred = model.predict(X_test_scaled)\n\n# Оценка модели\nfrom sklearn.metrics import mean_squared_error, r2_score\nprint(f'MSE: {mean_squared_error(y_test, y_pred)}')\nprint(f'R2: {r2_score(y_test, y_pred)}')",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Классификация с помощью Random Forest",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "from sklearn.ensemble import RandomForestClassifier\n\n# Создание и обучение модели\nrf_model = RandomForestClassifier(\n    n_estimators=100,\n    max_depth=10,\n    random_state=42\n)\nrf_model.fit(X_train_scaled, y_train)\n\n# Предсказание\ny_pred_rf = rf_model.predict(X_test_scaled)\n\n# Оценка модели\nprint(f'Accuracy: {accuracy_score(y_test, y_pred_rf)}')\nprint('Confusion Matrix:')\nprint(confusion_matrix(y_test, y_pred_rf))",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Кластеризация с K-means",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "from sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# Создание и обучение модели\nkmeans = KMeans(n_clusters=3, random_state=42)\ncluster_labels = kmeans.fit_predict(X_scaled)\n\n# Визуализация результатов\nplt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=cluster_labels)\nplt.title('K-means Clustering')\nplt.show()",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Нейронные сети с Keras",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense\n\n# Создание модели\nmodel = Sequential([\n    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),\n    Dense(32, activation='relu'),\n    Dense(1, activation='sigmoid')\n])\n\n# Компиляция модели\nmodel.compile(\n    optimizer='adam',\n    loss='binary_crossentropy',\n    metrics=['accuracy']\n)\n\n# Обучение\nhistory = model.fit(\n    X_train_scaled,\n    y_train,\n    epochs=10,\n    batch_size=32,\n    validation_split=0.2\n)",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Оценка и улучшение модели",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "from sklearn.model_selection import cross_val_score\nfrom sklearn.model_selection import GridSearchCV\n\n# Кросс-валидация\nscores = cross_val_score(model, X_scaled, y, cv=5)\nprint(f'Cross-validation scores: {scores}')\n\n# Поиск оптимальных гиперпараметров\nparam_grid = {\n    'n_estimators': [100, 200, 300],\n    'max_depth': [10, 20, 30]\n}\n\ngrid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)\ngrid_search.fit(X_train_scaled, y_train)\n\nprint(f'Best parameters: {grid_search.best_params_}')",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Сохранение и загрузка модели",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import joblib\n\n# Сохранение модели\njoblib.dump(model, 'model.joblib')\n\n# Загрузка модели\nloaded_model = joblib.load('model.joblib')\n\n# Использование загруженной модели\ny_pred = loaded_model.predict(X_test_scaled)",
            language: "python",
          },
        },
        {
          type: "header",
          data: {
            text: "Важные концепции машинного обучения",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Переобучение (overfitting) и недообучение (underfitting)",
              "Регуляризация",
              "Выбор признаков",
              "Баланс классов",
              "Кросс-валидация",
              "Масштабирование данных",
              "Оценка качества модели",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Машинное обучение — это итеративный процесс, требующий постоянного экспериментирования и оптимизации. Начните с простых моделей и постепенно усложняйте их, основываясь на результатах.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по основам машинного обучения на Python: от подготовки данных до создания и оценки моделей, включая практические примеры использования популярных библиотек.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381",
    categoryId: 1,
    tags: [2, 5], // Python, Машинное обучение
  },
];
