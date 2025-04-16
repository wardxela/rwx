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
  {
    title: "REST API: лучшие практики проектирования",
    content: {
      time: 1635603431950,
      blocks: [
        {
          type: "header",
          data: {
            text: "REST API: принципы проектирования и лучшие практики",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Создание качественного REST API требует понимания множества принципов и лучших практик. В этой статье мы рассмотрим основные концепции и подходы к проектированию надежных и масштабируемых API.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Основные принципы REST",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Клиент-серверная архитектура",
              "Stateless (отсутствие состояния)",
              "Кэширование",
              "Единый интерфейс",
              "Многоуровневая система",
              "Код по требованию (необязательно)",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "2. Правильное использование HTTP-методов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// GET: получение данных\nGET /api/users          // Получить список пользователей\nGET /api/users/123      // Получить конкретного пользователя\n\n// POST: создание ресурса\nPOST /api/users         // Создать нового пользователя\n\n// PUT: полное обновление\nPUT /api/users/123      // Обновить всего пользователя\n\n// PATCH: частичное обновление\nPATCH /api/users/123    // Обновить отдельные поля\n\n// DELETE: удаление\nDELETE /api/users/123   // Удалить пользователя",
            language: "http",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Структура URL",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Используйте существительные для ресурсов",
              "Применяйте вложенность для связанных ресурсов",
              "Используйте query-параметры для фильтрации",
              "Версионирование API",
            ],
          },
        },
        {
          type: "code",
          data: {
            code: "// Правильно\nGET /api/v1/users\nGET /api/v1/users/123/orders\nGET /api/v1/orders?status=pending\n\n// Неправильно\nGET /api/v1/getUsers\nGET /api/v1/user/123/getAllOrders\nGET /api/v1/findOrdersByStatus?status=pending",
            language: "http",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Правильная обработка статус-кодов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Success Codes\n200 OK                // Успешный GET, PUT, PATCH\n201 Created           // Успешный POST\n204 No Content        // Успешный DELETE\n\n// Client Error Codes\n400 Bad Request       // Неверный запрос\n401 Unauthorized      // Требуется аутентификация\n403 Forbidden         // Доступ запрещен\n404 Not Found         // Ресурс не найден\n422 Unprocessable     // Ошибка валидации\n\n// Server Error Codes\n500 Internal Error    // Ошибка сервера\n503 Service Unavailable // Сервис недоступен",
            language: "http",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Форматы ответов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '// Успешный ответ\n{\n  "data": {\n    "id": 123,\n    "name": "John Doe",\n    "email": "john@example.com"\n  },\n  "meta": {\n    "timestamp": "2024-01-20T12:00:00Z"\n  }\n}\n\n// Ответ с ошибкой\n{\n  "error": {\n    "code": "VALIDATION_ERROR",\n    "message": "Invalid input data",\n    "details": [\n      {\n        "field": "email",\n        "message": "Invalid email format"\n      }\n    ]\n  }\n}',
            language: "json",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Пагинация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '// Request\nGET /api/v1/users?page=2&per_page=20\n\n// Response\n{\n  "data": [...],\n  "pagination": {\n    "total": 100,\n    "per_page": 20,\n    "current_page": 2,\n    "last_page": 5,\n    "next_page_url": "/api/v1/users?page=3",\n    "prev_page_url": "/api/v1/users?page=1"\n  }\n}',
            language: "json",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Фильтрация и сортировка",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Фильтрация\nGET /api/v1/users?status=active&role=admin\n\n// Сортировка\nGET /api/v1/users?sort=name:asc,created_at:desc\n\n// Выбор полей\nGET /api/v1/users?fields=id,name,email\n\n// Поиск\nGET /api/v1/users?search=john",
            language: "http",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Безопасность API",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Аутентификация через Bearer token\nGET /api/v1/users\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIs...\n\n// Rate Limiting заголовки\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 95\nX-RateLimit-Reset: 1640995200",
            language: "http",
          },
        },
        {
          type: "header",
          data: {
            text: "9. Документация API",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "openapi: 3.0.0\ninfo:\n  title: User API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: Get users list\n      parameters:\n        - name: page\n          in: query\n          schema:\n            type: integer\n      responses:\n        200:\n          description: Successful response",
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
            style: "ordered",
            items: [
              "Всегда используйте HTTPS",
              "Реализуйте кэширование",
              "Валидируйте входные данные",
              "Используйте сжатие (GZIP)",
              "Добавляйте мониторинг и логирование",
              "Обеспечьте обратную совместимость",
              "Документируйте все изменения",
              "Следите за производительностью",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Правильно спроектированный REST API является основой для создания надежных и масштабируемых веб-приложений. Следование этим принципам поможет создать API, который будет удобен как для разработчиков, так и для клиентов.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по проектированию REST API, включающее лучшие практики, примеры реализации, обработку ошибок, безопасность и документирование.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    categoryId: 1,
    tags: [1, 4], // JavaScript, Node.js
  },
  {
    title: "Микросервисная архитектура: практическое руководство",
    content: {
      time: 1635603431951,
      blocks: [
        {
          type: "header",
          data: {
            text: "Микросервисная архитектура: от теории к практике",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Микросервисная архитектура стала стандартом для построения масштабируемых приложений. Рассмотрим основные принципы, паттерны и практические аспекты реализации микросервисов.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Основные принципы микросервисов",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Независимое развертывание",
              "Изолированное хранение данных",
              "Слабая связанность",
              "Отказоустойчивость",
              "Бизнес-ориентированное проектирование",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "2. Пример базовой структуры микросервиса",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// user-service/src/index.ts\nimport express from 'express';\nimport { createClient } from 'redis';\nimport { connect } from 'amqplib';\n\nconst app = express();\nconst redis = createClient();\n\n// Подключение к сервисам\nasync function setupConnections() {\n  // Redis для кэширования\n  await redis.connect();\n  \n  // RabbitMQ для событий\n  const connection = await connect('amqp://localhost');\n  const channel = await connection.createChannel();\n  \n  return { redis, channel };\n}\n\n// Определение API\napp.get('/users/:id', async (req, res) => {\n  const { id } = req.params;\n  \n  // Проверка кэша\n  const cached = await redis.get(`user:${id}`);\n  if (cached) return res.json(JSON.parse(cached));\n  \n  // Получение из БД\n  const user = await db.users.findUnique({ where: { id } });\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  \n  // Сохранение в кэш\n  await redis.set(`user:${id}`, JSON.stringify(user));\n  \n  res.json(user);\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Межсервисное взаимодействие",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Event Publishing\nasync function publishEvent(channel, event) {\n  const exchange = 'user_events';\n  await channel.assertExchange(exchange, 'topic');\n  \n  channel.publish(exchange, 'user.created', \n    Buffer.from(JSON.stringify(event))\n  );\n}\n\n// Event Consuming\nasync function setupEventConsumer(channel) {\n  const exchange = 'user_events';\n  const queue = 'notification_service';\n  \n  await channel.assertExchange(exchange, 'topic');\n  await channel.assertQueue(queue);\n  await channel.bindQueue(queue, exchange, 'user.*');\n  \n  channel.consume(queue, async (msg) => {\n    const event = JSON.parse(msg.content.toString());\n    // Обработка события\n    channel.ack(msg);\n  });\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Паттерн Circuit Breaker",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "class CircuitBreaker {\n  private failures = 0;\n  private lastFailure?: Date;\n  private readonly threshold = 5;\n  private readonly timeout = 60000; // 1 minute\n\n  async execute(fn: () => Promise<any>) {\n    if (this.isOpen()) {\n      throw new Error('Circuit breaker is open');\n    }\n\n    try {\n      const result = await fn();\n      this.reset();\n      return result;\n    } catch (error) {\n      this.recordFailure();\n      throw error;\n    }\n  }\n\n  private isOpen(): boolean {\n    if (this.failures >= this.threshold) {\n      const now = new Date();\n      if (this.lastFailure && \n          (now.getTime() - this.lastFailure.getTime()) < this.timeout) {\n        return true;\n      }\n      this.reset();\n    }\n    return false;\n  }\n\n  private reset() {\n    this.failures = 0;\n    this.lastFailure = undefined;\n  }\n\n  private recordFailure() {\n    this.failures++;\n    this.lastFailure = new Date();\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Распределенная трассировка",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { trace } from '@opentelemetry/api';\nimport { registerInstrumentations } from '@opentelemetry/instrumentation';\nimport { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';\n\n// Настройка трассировки\nregisterInstrumentations({\n  instrumentations: [\n    new ExpressInstrumentation()\n  ]\n});\n\n// Middleware для трассировки\napp.use((req, res, next) => {\n  const span = trace.getActiveSpan();\n  if (span) {\n    span.setAttribute('user.id', req.user?.id);\n    span.setAttribute('service.name', 'user-service');\n  }\n  next();\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Конфигурация через переменные окружения",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// config.ts\nexport const config = {\n  service: {\n    name: process.env.SERVICE_NAME || 'user-service',\n    port: parseInt(process.env.PORT || '3000'),\n  },\n  database: {\n    url: process.env.DATABASE_URL,\n    pool: {\n      min: parseInt(process.env.DB_POOL_MIN || '2'),\n      max: parseInt(process.env.DB_POOL_MAX || '10'),\n    },\n  },\n  redis: {\n    url: process.env.REDIS_URL || 'redis://localhost:6379',\n    ttl: parseInt(process.env.REDIS_TTL || '3600'),\n  },\n  rabbitmq: {\n    url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',\n  },\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Мониторинг и метрики",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import prometheus from 'prom-client';\n\n// Метрики\nconst httpRequestDuration = new prometheus.Histogram({\n  name: 'http_request_duration_seconds',\n  help: 'Duration of HTTP requests in seconds',\n  labelNames: ['method', 'route', 'status_code'],\n});\n\n// Middleware для сбора метрик\napp.use((req, res, next) => {\n  const start = Date.now();\n  \n  res.on('finish', () => {\n    const duration = (Date.now() - start) / 1000;\n    httpRequestDuration.observe(\n      {\n        method: req.method,\n        route: req.route?.path || 'unknown',\n        status_code: res.statusCode,\n      },\n      duration\n    );\n  });\n  \n  next();\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Контейнеризация микросервиса",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# Dockerfile\nFROM node:18-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 3000\nCMD ["npm", "start"]\n\n# docker-compose.yml\nversion: \'3.8\'\nservices:\n  user-service:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - DATABASE_URL=postgresql://user:pass@db:5432/users\n      - REDIS_URL=redis://cache:6379\n      - RABBITMQ_URL=amqp://mq:5672\n    depends_on:\n      - db\n      - cache\n      - mq',
            language: "dockerfile",
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
            style: "ordered",
            items: [
              "Определите четкие границы сервисов",
              "Используйте асинхронную коммуникацию",
              "Внедрите распределенную трассировку",
              "Применяйте паттерны отказоустойчивости",
              "Централизуйте логирование",
              "Автоматизируйте развертывание",
              "Следите за метриками",
              "Документируйте API и интеграции",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Микросервисная архитектура предоставляет множество преимуществ, но также требует тщательного планирования и правильной реализации. Важно найти баланс между сложностью и выгодами, которые она предоставляет.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Практическое руководство по построению микросервисной архитектуры, включая паттерны проектирования, межсервисное взаимодействие, мониторинг и развертывание.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    categoryId: 1,
    tags: [1, 4, 6], // JavaScript, Node.js, Docker
  },
  {
    title: "TypeScript: продвинутые типы и паттерны",
    content: {
      time: 1635603431952,
      blocks: [
        {
          type: "header",
          data: {
            text: "TypeScript: продвинутые техники типизации",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "TypeScript предоставляет мощную систему типов, которая выходит далеко за рамки простых интерфейсов и классов. Рассмотрим продвинутые возможности типизации и паттерны их использования.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Условные типы",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "type IsString<T> = T extends string ? true : false;\n\n// Пример использования\ntype A = IsString<'hello'>; // true\ntype B = IsString<42>; // false\n\n// Более сложный пример\ntype ArrayOrSingle<T> = T extends any[] ? T : T[];\n\nfunction transform<T>(value: T): ArrayOrSingle<T> {\n  return Array.isArray(value) ? value : [value];\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Mapped Types",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Сделать все поля опциональными\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n\n// Сделать все поля readonly\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\n// Пример собственного mapped type\ntype Nullable<T> = {\n  [P in keyof T]: T[P] | null;\n};\n\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype NullableUser = Nullable<User>; // { name: string | null; age: number | null; }",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Utility Types",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n  createdAt: number;\n}\n\n// Pick\ntype TodoPreview = Pick<Todo, 'title' | 'completed'>;\n\n// Omit\ntype TodoMetadata = Omit<Todo, 'title' | 'description'>;\n\n// Record\ntype PageInfo = {\n  title: string;\n  url: string;\n};\n\ntype Pages = Record<string, PageInfo>;\n\n// ReturnType\nfunction getData() {\n  return { x: 10, y: 20 };\n}\n\ntype DataType = ReturnType<typeof getData>;",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Generics с ограничениями",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: 'interface HasLength {\n  length: number;\n}\n\nfunction longest<T extends HasLength>(a: T, b: T): T {\n  return a.length >= b.length ? a : b;\n}\n\n// Пример использования\nconst longerArray = longest([1, 2], [1, 2, 3]); // [1, 2, 3]\nconst longerString = longest("123", "12"); // "123"\n\n// Ограничение на ключи объекта\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}',
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Type Guards",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "interface Bird {\n  fly(): void;\n  layEggs(): void;\n}\n\ninterface Fish {\n  swim(): void;\n  layEggs(): void;\n}\n\n// User-defined type guard\nfunction isFish(pet: Fish | Bird): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}\n\n// Использование\nfunction moveAnimal(pet: Fish | Bird) {\n  if (isFish(pet)) {\n    pet.swim(); // TypeScript знает, что это Fish\n  } else {\n    pet.fly(); // TypeScript знает, что это Bird\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Декораторы",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Декоратор класса\nfunction logger<T extends { new (...args: any[]): {} }>(constructor: T) {\n  return class extends constructor {\n    created = new Date();\n  };\n}\n\n// Декоратор метода\nfunction measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n\n  descriptor.value = function (...args: any[]) {\n    const start = performance.now();\n    const result = originalMethod.apply(this, args);\n    const finish = performance.now();\n    console.log(`${propertyKey} took ${finish - start}ms`);\n    return result;\n  };\n}\n\n@logger\nclass Example {\n  @measure\n  doSomething() {\n    // implementation\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Template Literal Types",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "type EventName = 'click' | 'focus' | 'blur';\ntype EventType = 'input' | 'button' | 'form';\n\n// Комбинация литеральных типов\ntype EventHandler = `on${Capitalize<EventName>}${Capitalize<EventType>}`;\n\n// Результат: 'onClickInput' | 'onClickButton' | 'onClickForm' | ...\n\n// Пример с URL\ntype Route = '/users' | '/posts' | '/comments';\ntype HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';\n\ntype ApiEndpoint = `${HttpMethod} ${Route}`;\n// 'GET /users' | 'POST /users' | 'PUT /users' | 'DELETE /users' | ...",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Паттерн Builder с типами",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "class RequestBuilder {\n  private data: any = {};\n\n  setMethod<T extends 'GET' | 'POST'>(method: T): RequestBuilder {\n    this.data.method = method;\n    return this;\n  }\n\n  setUrl(url: string): RequestBuilder {\n    this.data.url = url;\n    return this;\n  }\n\n  setBody<T>(body: T): RequestBuilder {\n    this.data.body = body;\n    return this;\n  }\n\n  build() {\n    return this.data;\n  }\n}\n\nconst request = new RequestBuilder()\n  .setMethod('POST')\n  .setUrl('/api/users')\n  .setBody({ name: 'John' })\n  .build();",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "9. Безопасная обработка ошибок",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Определение типов результата\ntype Success<T> = {\n  success: true;\n  data: T;\n};\n\ntype Failure = {\n  success: false;\n  error: string;\n};\n\ntype Result<T> = Success<T> | Failure;\n\n// Использование\nasync function fetchUser(id: string): Promise<Result<User>> {\n  try {\n    const user = await db.users.findUnique({ where: { id } });\n    if (!user) {\n      return { success: false, error: 'User not found' };\n    }\n    return { success: true, data: user };\n  } catch (error) {\n    return { success: false, error: String(error) };\n  }\n}\n\n// Обработка результата\nconst result = await fetchUser('123');\nif (result.success) {\n  console.log(result.data.name); // TypeScript знает, что это User\n} else {\n  console.error(result.error); // TypeScript знает, что это string\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "Рекомендации по использованию",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Используйте строгий режим TypeScript (strict: true)",
              "Избегайте any там, где возможно",
              "Применяйте eslint с @typescript-eslint",
              "Документируйте сложные типы",
              "Используйте инференцию типов",
              "Пишите unit-тесты для типов",
              "Следите за обновлениями TypeScript",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Продвинутые возможности TypeScript позволяют создавать более надежный и поддерживаемый код. Правильное использование системы типов помогает избежать ошибок на этапе компиляции и улучшает документацию кода.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по продвинутым возможностям TypeScript, включая условные типы, mapped types, generics, декораторы и паттерны типизации.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    categoryId: 1,
    tags: [1, 8], // JavaScript, TypeScript
  },
  {
    title: "CI/CD для веб-проектов: автоматизация развертывания",
    content: {
      time: 1635603431953,
      blocks: [
        {
          type: "header",
          data: {
            text: "CI/CD для веб-проектов: полное руководство по автоматизации",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Непрерывная интеграция (CI) и непрерывное развертывание (CD) стали неотъемлемой частью современной разработки. Рассмотрим, как настроить эффективный процесс CI/CD для веб-проекта.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. GitHub Actions: базовая конфигурация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# .github/workflows/main.yml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - uses: actions/checkout@v3\n    \n    - name: Setup Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: '18'\n        cache: 'npm'\n    \n    - name: Install dependencies\n      run: npm ci\n    \n    - name: Run tests\n      run: npm test\n      \n    - name: Build application\n      run: npm run build",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Настройка тестового окружения",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# .github/workflows/test.yml\nname: Test Environment\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    \n    services:\n      postgres:\n        image: postgres:14\n        env:\n          POSTGRES_USER: test\n          POSTGRES_PASSWORD: test\n          POSTGRES_DB: test_db\n        ports:\n          - 5432:5432\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n          \n      redis:\n        image: redis\n        ports:\n          - 6379:6379\n        options: >-\n          --health-cmd "redis-cli ping"\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5',
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Автоматизация проверки кода",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "name: Code Quality\n\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    \n    - name: Run ESLint\n      run: npm run lint\n      \n    - name: Run Prettier\n      run: npm run format:check\n      \n    - name: Type check\n      run: npm run type-check\n      \n    - name: Run SonarCloud Scan\n      uses: SonarSource/sonarcloud-github-action@master\n      env:\n        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Настройка деплоя на разные окружения",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "name: Deploy\n\non:\n  push:\n    branches:\n      - main\n      - staging\n      - develop\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Configure AWS credentials\n      uses: aws-actions/configure-aws-credentials@v1\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        aws-region: eu-west-1\n\n    - name: Deploy to environment\n      run: |\n        if [[ ${{ github.ref }} == 'refs/heads/main' ]]; then\n          npm run deploy:prod\n        elif [[ ${{ github.ref }} == 'refs/heads/staging' ]]; then\n          npm run deploy:staging\n        else\n          npm run deploy:dev\n        fi",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Docker сборка и публикация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "name: Docker Build and Push\n\njobs:\n  docker:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Set up Docker Buildx\n      uses: docker/setup-buildx-action@v2\n      \n    - name: Login to DockerHub\n      uses: docker/login-action@v2\n      with:\n        username: ${{ secrets.DOCKERHUB_USERNAME }}\n        password: ${{ secrets.DOCKERHUB_TOKEN }}\n        \n    - name: Build and push\n      uses: docker/build-push-action@v4\n      with:\n        push: true\n        tags: user/app:latest\n        cache-from: type=registry,ref=user/app:buildcache\n        cache-to: type=registry,ref=user/app:buildcache,mode=max",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Автоматизация релизов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "name: Release\n\non:\n  push:\n    tags:\n      - 'v*'\n\njobs:\n  release:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Create Release\n      uses: actions/create-release@v1\n      env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n      with:\n        tag_name: ${{ github.ref }}\n        release_name: Release ${{ github.ref }}\n        body: |\n          Changes in this Release\n          - First Change\n          - Second Change\n        draft: false\n        prerelease: false",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Кэширование и оптимизация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Cache node modules\n      uses: actions/cache@v3\n      with:\n        path: ~/.npm\n        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n        restore-keys: |\n          ${{ runner.os }}-node-\n          \n    - name: Cache Next.js build\n      uses: actions/cache@v3\n      with:\n        path: |\n          .next/cache\n        key: ${{ runner.os }}-nextjs-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}\n        restore-keys: |\n          ${{ runner.os }}-nextjs-",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Мониторинг и оповещения",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "name: Monitoring\n\non:\n  workflow_run:\n    workflows: [\"CI/CD Pipeline\"]\n    types:\n      - completed\n\njobs:\n  alert:\n    runs-on: ubuntu-latest\n    if: ${{ github.event.workflow_run.conclusion == 'failure' }}\n    steps:\n    - name: Send Slack notification\n      uses: 8398a7/action-slack@v3\n      with:\n        status: ${{ job.status }}\n        fields: repo,message,commit,author,action,eventName,workflow\n      env:\n        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "Лучшие практики CI/CD",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Автоматизируйте все повторяющиеся процессы",
              "Используйте версионирование для всех артефактов",
              "Внедрите автоматические тесты на всех уровнях",
              "Применяйте принцип Infrastructure as Code",
              "Настройте мониторинг и логирование",
              "Обеспечьте безопасность секретов",
              "Оптимизируйте время выполнения пайплайнов",
              "Документируйте процессы развертывания",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Правильно настроенный CI/CD процесс значительно ускоряет разработку и повышает качество продукта. Важно регулярно пересматривать и оптимизировать пайплайны в соответствии с растущими потребностями проекта.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Полное руководство по настройке CI/CD для веб-проектов, включая автоматизацию тестирования, деплоя, мониторинга и оптимизацию пайплайнов с использованием современных инструментов.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    categoryId: 1,
    tags: [6, 7], // Docker, Git
  },
  {
    title: "Redis: оптимизация производительности веб-приложений",
    content: {
      time: 1635603431954,
      blocks: [
        {
          type: "header",
          data: {
            text: "Redis: продвинутые техники кэширования и оптимизации",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Redis – это мощный инструмент для оптимизации производительности современных веб-приложений. Рассмотрим продвинутые техники использования Redis и паттерны кэширования.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Основные структуры данных Redis",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Строки\nawait redis.set('user:1:name', 'John');\nawait redis.get('user:1:name');\n\n// Списки\nawait redis.lpush('notifications', 'message1');\nawait redis.rpop('notifications');\n\n// Хэши\nawait redis.hset('user:1', {\n  name: 'John',\n  email: 'john@example.com',\n  age: '30'\n});\n\n// Множества\nawait redis.sadd('users:online', 'user:1');\nawait redis.sismember('users:online', 'user:1');\n\n// Сортированные множества\nawait redis.zadd('leaderboard', {\n  'player1': 100,\n  'player2': 200\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Паттерны кэширования",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Cache-Aside Pattern\nasync function getUserWithCache(id: string) {\n  // Попытка получить из кэша\n  const cached = await redis.get(`user:${id}`);\n  if (cached) return JSON.parse(cached);\n\n  // Получение из БД\n  const user = await db.users.findUnique({ where: { id } });\n  if (user) {\n    // Сохранение в кэш\n    await redis.set(\n      `user:${id}`,\n      JSON.stringify(user),\n      'EX',\n      3600 // TTL 1 час\n    );\n  }\n  return user;\n}\n\n// Write-Through Pattern\nasync function updateUserWithCache(id: string, data: UserData) {\n  // Обновление в БД\n  const user = await db.users.update({\n    where: { id },\n    data\n  });\n\n  // Обновление кэша\n  await redis.set(\n    `user:${id}`,\n    JSON.stringify(user),\n    'EX',\n    3600\n  );\n\n  return user;\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Распределенные блокировки",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "async function acquireLock(lockName: string, timeout: number) {\n  const token = uuid();\n  const acquired = await redis.set(\n    `lock:${lockName}`,\n    token,\n    'NX',\n    'PX',\n    timeout\n  );\n\n  return acquired ? token : null;\n}\n\nasync function releaseLock(lockName: string, token: string) {\n  const script = `\n    if redis.call('get', KEYS[1]) == ARGV[1] then\n      return redis.call('del', KEYS[1])\n    else\n      return 0\n    end\n  `;\n\n  await redis.eval(script, 1, `lock:${lockName}`, token);\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Управление сессиями",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "class RedisSessionStore {\n  async set(sessionId: string, data: SessionData) {\n    await redis.set(\n      `session:${sessionId}`,\n      JSON.stringify(data),\n      'EX',\n      24 * 60 * 60 // 24 часа\n    );\n  }\n\n  async get(sessionId: string) {\n    const data = await redis.get(`session:${sessionId}`);\n    return data ? JSON.parse(data) : null;\n  }\n\n  async destroy(sessionId: string) {\n    await redis.del(`session:${sessionId}`);\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Pub/Sub система",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Издатель\nasync function publishEvent(channel: string, message: any) {\n  await redis.publish(channel, JSON.stringify(message));\n}\n\n// Подписчик\nasync function subscribeToEvents(channel: string) {\n  const subscriber = redis.duplicate();\n  \n  await subscriber.subscribe(channel);\n  \n  subscriber.on('message', (channel, message) => {\n    const event = JSON.parse(message);\n    handleEvent(event);\n  });\n}\n\n// Пример использования\nsubscribeToEvents('user:events');\npublishEvent('user:events', {\n  type: 'USER_CREATED',\n  data: { id: '123', name: 'John' }\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Рейт-лимитинг",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "class RateLimiter {\n  async isAllowed(key: string, limit: number, window: number) {\n    const current = await redis.incr(key);\n    \n    if (current === 1) {\n      await redis.expire(key, window);\n    }\n    \n    return current <= limit;\n  }\n}\n\n// Использование\nconst limiter = new RateLimiter();\n\nasync function handleRequest(userId: string) {\n  const allowed = await limiter.isAllowed(\n    `ratelimit:${userId}`,\n    100,  // 100 запросов\n    3600  // за 1 час\n  );\n  \n  if (!allowed) {\n    throw new Error('Rate limit exceeded');\n  }\n  \n  // Обработка запроса\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Кэширование запросов к базе данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "class QueryCache {\n  async getCachedQuery(query: string, params: any[]) {\n    const key = this.generateKey(query, params);\n    const cached = await redis.get(key);\n    \n    if (cached) {\n      return JSON.parse(cached);\n    }\n    \n    const result = await db.query(query, params);\n    await redis.set(key, JSON.stringify(result), 'EX', 300);\n    \n    return result;\n  }\n  \n  private generateKey(query: string, params: any[]): string {\n    return crypto\n      .createHash('sha256')\n      .update(`${query}:${JSON.stringify(params)}`)\n      .digest('hex');\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Оптимизация и мониторинг",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Используйте pipelining для батчинга команд",
              "Настройте правильную политику очистки (eviction policy)",
              "Мониторьте использование памяти",
              "Используйте Redis Cluster для масштабирования",
              "Регулярно делайте бэкапы",
              "Настройте алертинг",
            ],
          },
        },
        {
          type: "code",
          data: {
            code: "// Пример пайплайна\nconst pipeline = redis.pipeline();\n\nfor (const id of userIds) {\n  pipeline.get(`user:${id}`);\n}\n\nconst results = await pipeline.exec();",
            language: "typescript",
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Redis – мощный инструмент, который при правильном использовании может значительно улучшить производительность приложения. Важно понимать особенности различных структур данных и паттернов кэширования для оптимального использования Redis.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по использованию Redis для оптимизации производительности веб-приложений, включая паттерны кэширования, распределенные блокировки и управление сессиями.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    categoryId: 1,
    tags: [1, 4], // JavaScript, Node.js
  },
  {
    title: "GraphQL: создание масштабируемого API",
    content: {
      time: 1635603431955,
      blocks: [
        {
          type: "header",
          data: {
            text: "GraphQL: построение современного API",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "GraphQL становится все более популярным выбором для создания API. Рассмотрим, как построить масштабируемый GraphQL API с использованием TypeScript и современных инструментов.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Настройка Apollo Server",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { ApolloServer } from '@apollo/server';\nimport { startStandaloneServer } from '@apollo/server/standalone';\n\n// Определение схемы\nconst typeDefs = `#graphql\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    posts: [Post!]!\n  }\n\n  type Post {\n    id: ID!\n    title: String!\n    content: String!\n    author: User!\n  }\n\n  type Query {\n    users: [User!]!\n    user(id: ID!): User\n    posts: [Post!]!\n    post(id: ID!): Post\n  }\n\n  type Mutation {\n    createUser(name: String!, email: String!): User!\n    createPost(title: String!, content: String!, authorId: ID!): Post!\n  }\n`;\n\n// Создание сервера\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Реализация резолверов",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "const resolvers = {\n  Query: {\n    users: async (_, __, { dataSources }) => {\n      return dataSources.userAPI.getUsers();\n    },\n    user: async (_, { id }, { dataSources }) => {\n      return dataSources.userAPI.getUser(id);\n    },\n    posts: async (_, __, { dataSources }) => {\n      return dataSources.postAPI.getPosts();\n    },\n    post: async (_, { id }, { dataSources }) => {\n      return dataSources.postAPI.getPost(id);\n    },\n  },\n  \n  User: {\n    posts: async (parent, _, { dataSources }) => {\n      return dataSources.postAPI.getPostsByAuthor(parent.id);\n    },\n  },\n  \n  Post: {\n    author: async (parent, _, { dataSources }) => {\n      return dataSources.userAPI.getUser(parent.authorId);\n    },\n  },\n  \n  Mutation: {\n    createUser: async (_, { name, email }, { dataSources }) => {\n      return dataSources.userAPI.createUser({ name, email });\n    },\n    createPost: async (_, { title, content, authorId }, { dataSources }) => {\n      return dataSources.postAPI.createPost({ title, content, authorId });\n    },\n  },\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Источники данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            text: "import { DataSource } from 'apollo-datasource';\n\nclass UserAPI extends DataSource {\n  private store: Database;\n\n  constructor({ store }) {\n    super();\n    this.store = store;\n  }\n\n  async getUser(id: string) {\n    return this.store.users.findUnique({\n      where: { id },\n      include: { posts: true }\n    });\n  }\n\n  async createUser(data: { name: string; email: string }) {\n    return this.store.users.create({\n      data,\n      include: { posts: true }\n    });\n  }\n\n  // Кэширование\n  @memoize({ ttl: 300 })\n  async getUsers() {\n    return this.store.users.findMany();\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Аутентификация и авторизация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Middleware для аутентификации\nconst auth = async ({ req }) => {\n  const token = req.headers.authorization;\n  \n  if (!token) {\n    return { user: null };\n  }\n  \n  try {\n    const user = await verifyToken(token);\n    return { user };\n  } catch (error) {\n    throw new AuthenticationError('Invalid token');\n  }\n};\n\n// Директива для авторизации\nconst typeDefs = `#graphql\n  directive @auth(requires: Role = USER) on FIELD_DEFINITION\n\n  enum Role {\n    USER\n    ADMIN\n  }\n\n  type Mutation {\n    deleteUser(id: ID!): Boolean! @auth(requires: ADMIN)\n  }\n`;",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Обработка ошибок",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Пользовательские ошибки\nclass ValidationError extends ApolloError {\n  constructor(message: string) {\n    super(message, 'VALIDATION_ERROR');\n  }\n}\n\n// Форматирование ошибок\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n  formatError: (error) => {\n    console.error(error);\n    \n    return error.originalError instanceof ValidationError\n      ? error\n      : new Error('Internal server error');\n  },\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. N+1 проблема и DataLoader",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import DataLoader from 'dataloader';\n\nclass UserAPI extends DataSource {\n  private loader: DataLoader<string, User>;\n\n  constructor({ store }) {\n    super();\n    this.loader = new DataLoader(async (ids) => {\n      const users = await store.users.findMany({\n        where: { id: { in: ids } }\n      });\n      \n      return ids.map(id => \n        users.find(user => user.id === id)\n      );\n    });\n  }\n\n  async getUser(id: string) {\n    return this.loader.load(id);\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Подписки (Subscriptions)",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { PubSub } from 'graphql-subscriptions';\n\nconst pubsub = new PubSub();\n\nconst typeDefs = `#graphql\n  type Subscription {\n    postCreated: Post!\n    userUpdated(id: ID!): User!\n  }\n`;\n\nconst resolvers = {\n  Subscription: {\n    postCreated: {\n      subscribe: () => pubsub.asyncIterator(['POST_CREATED'])\n    },\n    userUpdated: {\n      subscribe: (_, { id }) => \n        pubsub.asyncIterator([`USER_UPDATED_${id}`])\n    }\n  },\n  \n  Mutation: {\n    createPost: async (_, args, { dataSources }) => {\n      const post = await dataSources.postAPI.createPost(args);\n      pubsub.publish('POST_CREATED', { postCreated: post });\n      return post;\n    }\n  }\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Оптимизация и кэширование",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import responseCachePlugin from 'apollo-server-plugin-response-cache';\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n  plugins: [\n    responseCachePlugin({\n      sessionId: (requestContext) => \n        requestContext.request.http.headers.get('authorization') || null,\n    })\n  ],\n  cache: 'bounded'\n});\n\n// Директивы кэширования\nconst typeDefs = `#graphql\n  directive @cacheControl(\n    maxAge: Int\n    scope: CacheControlScope\n  ) on FIELD_DEFINITION | OBJECT | INTERFACE\n\n  type User @cacheControl(maxAge: 300) {\n    id: ID!\n    name: String!\n  }\n`;",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "Лучшие практики GraphQL",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "ordered",
            items: [
              "Используйте строгую типизацию",
              "Внедряйте кэширование на разных уровнях",
              "Следите за N+1 проблемой",
              "Правильно обрабатывайте ошибки",
              "Документируйте схему",
              "Используйте инструменты мониторинга",
              "Тестируйте резолверы",
              "Оптимизируйте размер ответов",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "GraphQL предоставляет гибкий и мощный способ создания API. При правильном использовании и соблюдении лучших практик, он может значительно упростить взаимодействие между клиентом и сервером.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по созданию масштабируемого GraphQL API с использованием TypeScript, включая аутентификацию, оптимизацию производительности и обработку ошибок.",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44",
    categoryId: 1,
    tags: [1, 4, 8], // JavaScript, Node.js, TypeScript
  },

  {
    title: "Система аналитики и логирования на ELK Stack",
    content: {
      time: 1635603431956,
      blocks: [
        {
          type: "header",
          data: {
            text: "ELK Stack: построение системы мониторинга и аналитики",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "ELK Stack (Elasticsearch, Logstash, Kibana) – это мощный набор инструментов для сбора, анализа и визуализации данных. Рассмотрим, как построить комплексную систему мониторинга приложения.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Архитектура ELK Stack",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# docker-compose.yml\nversion: \'3.8\'\n\nservices:\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:8.8.0\n    environment:\n      - discovery.type=single-node\n      - ES_JAVA_OPTS=-Xms512m -Xmx512m\n    ports:\n      - "9200:9200"\n    volumes:\n      - elasticsearch-data:/usr/share/elasticsearch/data\n\n  logstash:\n    image: docker.elastic.co/logstash/logstash:8.8.0\n    ports:\n      - "5044:5044"\n    volumes:\n      - ./logstash/pipeline:/usr/share/logstash/pipeline\n    depends_on:\n      - elasticsearch\n\n  kibana:\n    image: docker.elastic.co/kibana/kibana:8.8.0\n    ports:\n      - "5601:5601"\n    depends_on:\n      - elasticsearch\n\nvolumes:\n  elasticsearch-data:',
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Конфигурация Logstash",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# logstash/pipeline/logstash.conf\ninput {\n  beats {\n    port => 5044\n  }\n  \n  tcp {\n    port => 5000\n    codec => json\n  }\n}\n\nfilter {\n  if [type] == "application" {\n    grok {\n      match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}" }\n    }\n    \n    date {\n      match => [ "timestamp", "ISO8601" ]\n      target => "@timestamp"\n    }\n    \n    mutate {\n      remove_field => [ "timestamp" ]\n    }\n  }\n}\n\noutput {\n  elasticsearch {\n    hosts => ["elasticsearch:9200"]\n    index => "app-logs-%{+YYYY.MM.dd}"\n  }\n  \n  stdout { codec => rubydebug }\n}',
            language: "ruby",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Интеграция в Node.js приложение",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import winston from 'winston';\nimport { ElasticsearchTransport } from 'winston-elasticsearch';\n\n// Конфигурация логгера\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.json()\n  ),\n  transports: [\n    new ElasticsearchTransport({\n      level: 'info',\n      clientOpts: {\n        node: 'http://localhost:9200',\n        log: 'info'\n      },\n      indexPrefix: 'app-logs'\n    }),\n    new winston.transports.Console({\n      format: winston.format.simple()\n    })\n  ]\n});\n\n// Middleware для логирования запросов\napp.use((req, res, next) => {\n  const start = Date.now();\n  \n  res.on('finish', () => {\n    const duration = Date.now() - start;\n    \n    logger.info('HTTP Request', {\n      method: req.method,\n      url: req.url,\n      status: res.statusCode,\n      duration,\n      userAgent: req.get('user-agent')\n    });\n  });\n  \n  next();\n});",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Kibana дашборды",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '// Kibana Dashboard JSON\n{\n  "version": "8.8.0",\n  "objects": [{\n    "id": "app-metrics",\n    "type": "visualization",\n    "attributes": {\n      "title": "Application Metrics",\n      "visState": {\n        "title": "Application Metrics",\n        "type": "metric",\n        "params": {\n          "addTooltip": true,\n          "addLegend": false,\n          "type": "gauge",\n          "gauge": {\n            "verticalSplit": false,\n            "extendRange": true\n          }\n        },\n        "aggs": [\n          {\n            "id": "1",\n            "enabled": true,\n            "type": "count",\n            "schema": "metric",\n            "params": {}\n          }\n        ]\n      }\n    }\n  }]\n}',
            language: "json",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Мониторинг производительности",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { performance } from 'perf_hooks';\n\nclass PerformanceMonitor {\n  private metrics: Map<string, number[]> = new Map();\n\n  async measure<T>(name: string, fn: () => Promise<T>): Promise<T> {\n    const start = performance.now();\n    \n    try {\n      return await fn();\n    } finally {\n      const duration = performance.now() - start;\n      this.record(name, duration);\n    }\n  }\n\n  private record(name: string, duration: number) {\n    const metrics = this.metrics.get(name) || [];\n    metrics.push(duration);\n    this.metrics.set(name, metrics);\n\n    logger.info('Performance metric', {\n      name,\n      duration,\n      average: this.calculateAverage(name)\n    });\n  }\n\n  private calculateAverage(name: string): number {\n    const metrics = this.metrics.get(name) || [];\n    return metrics.reduce((a, b) => a + b, 0) / metrics.length;\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Алертинг",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '// Elasticsearch Watcher\n{\n  "trigger": {\n    "schedule": {\n      "interval": "5m"\n    }\n  },\n  "input": {\n    "search": {\n      "request": {\n        "indices": ["app-logs-*"],\n        "body": {\n          "query": {\n            "bool": {\n              "must": [\n                { "match": { "level": "error" } },\n                {\n                  "range": {\n                    "@timestamp": {\n                      "gte": "now-5m"\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  },\n  "condition": {\n    "compare": {\n      "ctx.payload.hits.total": {\n        "gt": 10\n      }\n    }\n  },\n  "actions": {\n    "slack_notification": {\n      "webhook": {\n        "url": "https://hooks.slack.com/services/...",\n        "method": "POST",\n        "body": "High error rate detected: {{ctx.payload.hits.total}} errors in 5 minutes"\n      }\n    }\n  }\n}',
            language: "json",
          },
        },
        {
          type: "header",
          data: {
            text: "7. APM (Application Performance Monitoring)",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "import { apm } from 'elastic-apm-node';\n\nconst apmClient = apm.start({\n  serviceName: 'my-service',\n  serverUrl: 'http://localhost:8200',\n  environment: process.env.NODE_ENV\n});\n\n// Трассировка транзакций\napp.use(apm.middleware.connect());\n\n// Ручная инструментация\nasync function complexOperation() {\n  const span = apm.startSpan('complex-calculation');\n  try {\n    // выполнение операции\n    return result;\n  } catch (error) {\n    apm.captureError(error);\n    throw error;\n  } finally {\n    if (span) span.end();\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Оптимизация и масштабирование",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Настройка шардирования Elasticsearch",
              "Оптимизация индексов",
              "Ротация логов",
              "Настройка retention policy",
              "Мониторинг кластера",
              "Резервное копирование",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "ELK Stack предоставляет мощные инструменты для анализа и мониторинга приложений. Правильная настройка и использование этих инструментов позволяет эффективно отслеживать состояние системы и быстро реагировать на проблемы.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Полное руководство по настройке системы мониторинга и аналитики на базе ELK Stack, включая интеграцию с Node.js приложением, настройку алертинга и визуализацию данных.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    categoryId: 1,
    tags: [1, 4], // JavaScript, Node.js
  },

  {
    title: "Архитектура современных React-приложений",
    content: {
      time: 1635603431957,
      blocks: [
        {
          type: "header",
          data: {
            text: "Архитектура React-приложений: лучшие практики 2024",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Современные React-приложения требуют продуманной архитектуры для обеспечения масштабируемости и поддерживаемости. Рассмотрим основные принципы и паттерны построения крупных React-приложений.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Структура проекта",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "src/\n  ├── assets/          # Статические файлы\n  ├── components/      # Переиспользуемые компоненты\n  │   ├── ui/         # UI компоненты\n  │   └── common/     # Общие компоненты\n  ├── features/       # Функциональные модули\n  │   ├── auth/\n  │   ├── users/\n  │   └── posts/\n  ├── hooks/          # Кастомные хуки\n  ├── services/       # API и другие сервисы\n  ├── store/          # Управление состоянием\n  ├── utils/          # Утилиты\n  ├── types/          # TypeScript типы\n  └── App.tsx         # Корневой компонент",
            language: "plaintext",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Feature-Based Architecture",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// features/users/types.ts\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\n// features/users/api.ts\nconst userApi = {\n  getUsers: () => axios.get<User[]>('/api/users'),\n  getUser: (id: string) => axios.get<User>(`/api/users/${id}`),\n};\n\n// features/users/hooks.ts\nconst useUser = (id: string) => {\n  return useQuery(['user', id], () => userApi.getUser(id));\n};\n\n// features/users/components/UserList.tsx\nconst UserList = () => {\n  const { data: users, isLoading } = useQuery('users', userApi.getUsers);\n  \n  if (isLoading) return <Spinner />;\n  \n  return (\n    <List>\n      {users?.map(user => (\n        <UserListItem key={user.id} user={user} />\n      ))}\n    </List>\n  );\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Компонентная архитектура",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Atomic Design принципы\n\n// atoms/Button.tsx\nconst Button = styled.button<ButtonProps>`\n  padding: ${props => props.size === 'small' ? '8px 16px' : '12px 24px'};\n  background: ${props => props.variant === 'primary' ? props.theme.primary : 'transparent'};\n`;\n\n// molecules/FormField.tsx\nconst FormField = ({ label, error, children }: FormFieldProps) => (\n  <FieldWrapper>\n    <Label>{label}</Label>\n    {children}\n    {error && <ErrorText>{error}</ErrorText>}\n  </FieldWrapper>\n);\n\n// organisms/LoginForm.tsx\nconst LoginForm = () => {\n  const { register, handleSubmit, errors } = useForm<LoginFormData>();\n  \n  return (\n    <Form onSubmit={handleSubmit(onSubmit)}>\n      <FormField label=\"Email\" error={errors.email?.message}>\n        <Input {...register('email')} />\n      </FormField>\n      <FormField label=\"Password\" error={errors.password?.message}>\n        <Input type=\"password\" {...register('password')} />\n      </FormField>\n      <Button type=\"submit\">Login</Button>\n    </Form>\n  );\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Управление состоянием",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// store/auth/slice.ts\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit';\n\nconst authSlice = createSlice({\n  name: 'auth',\n  initialState: {\n    user: null,\n    isLoading: false,\n    error: null\n  },\n  reducers: {\n    setUser: (state, action: PayloadAction<User>) => {\n      state.user = action.payload;\n    },\n    setLoading: (state, action: PayloadAction<boolean>) => {\n      state.isLoading = action.payload;\n    }\n  }\n});\n\n// hooks/useAuth.ts\nconst useAuth = () => {\n  const dispatch = useAppDispatch();\n  const { user, isLoading } = useAppSelector(state => state.auth);\n  \n  const login = async (credentials: LoginCredentials) => {\n    try {\n      dispatch(setLoading(true));\n      const user = await authService.login(credentials);\n      dispatch(setUser(user));\n    } finally {\n      dispatch(setLoading(false));\n    }\n  };\n  \n  return { user, isLoading, login };\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. API Layer",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// services/api/client.ts\nimport axios from 'axios';\n\nconst apiClient = axios.create({\n  baseURL: process.env.NEXT_PUBLIC_API_URL,\n  timeout: 10000\n});\n\napiClient.interceptors.request.use(config => {\n  const token = localStorage.getItem('token');\n  if (token) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  return config;\n});\n\napiClient.interceptors.response.use(\n  response => response,\n  error => {\n    if (error.response?.status === 401) {\n      // Обработка истекшего токена\n      store.dispatch(logout());\n    }\n    return Promise.reject(error);\n  }\n);\n\n// services/api/endpoints.ts\nexport const api = {\n  auth: {\n    login: (credentials: LoginCredentials) => \n      apiClient.post('/auth/login', credentials),\n    register: (data: RegisterData) => \n      apiClient.post('/auth/register', data)\n  },\n  users: {\n    get: (id: string) => apiClient.get(`/users/${id}`),\n    update: (id: string, data: UpdateUserData) => \n      apiClient.put(`/users/${id}`, data)\n  }\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Роутинг и навигация",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// routes/index.tsx\nimport { createBrowserRouter } from 'react-router-dom';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <RootLayout />,\n    children: [\n      {\n        index: true,\n        element: <HomePage />\n      },\n      {\n        path: 'dashboard',\n        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,\n        loader: dashboardLoader\n      }\n    ]\n  }\n]);\n\n// components/ProtectedRoute.tsx\nconst ProtectedRoute = ({ children }: { children: React.ReactNode }) => {\n  const { user, isLoading } = useAuth();\n  const location = useLocation();\n  \n  if (isLoading) return <Spinner />;\n  \n  if (!user) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n  \n  return children;\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. Производительность",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// hooks/useDebounce.ts\nfunction useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n\n// components/VirtualList.tsx\nimport { useVirtual } from 'react-virtual';\n\nconst VirtualList = ({ items }: { items: Item[] }) => {\n  const parentRef = useRef<HTMLDivElement>();\n  \n  const rowVirtualizer = useVirtual({\n    size: items.length,\n    parentRef,\n    estimateSize: useCallback(() => 50, []),\n    overscan: 5\n  });\n  \n  return (\n    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>\n      <div\n        style={{\n          height: `${rowVirtualizer.totalSize}px`,\n          position: 'relative'\n        }}\n      >\n        {rowVirtualizer.virtualItems.map(virtualRow => (\n          <div\n            key={virtualRow.index}\n            style={{\n              position: 'absolute',\n              top: 0,\n              transform: `translateY(${virtualRow.start}px)`,\n              width: '100%'\n            }}\n          >\n            <ListItem item={items[virtualRow.index]} />\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Тестирование",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// components/UserList.test.tsx\nimport { render, screen, waitFor } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ndescribe('UserList', () => {\n  it('renders users and handles pagination', async () => {\n    render(<UserList />);\n    \n    // Ожидание загрузки данных\n    await waitFor(() => {\n      expect(screen.getByText('John Doe')).toBeInTheDocument();\n    });\n    \n    // Проверка пагинации\n    const nextButton = screen.getByRole('button', { name: /next/i });\n    await userEvent.click(nextButton);\n    \n    await waitFor(() => {\n      expect(screen.getByText('Jane Smith')).toBeInTheDocument();\n    });\n  });\n});\n\n// Мок API для тестов\nvi.mock('../../services/api', () => ({\n  getUsers: vi.fn().mockResolvedValue([\n    { id: 1, name: 'John Doe' },\n    { id: 2, name: 'Jane Smith' }\n  ])\n}));",
            language: "typescript",
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
            style: "ordered",
            items: [
              "Разделяйте бизнес-логику и представление",
              "Используйте TypeScript для типизации",
              "Внедряйте Code Splitting",
              "Оптимизируйте ре-рендеринг",
              "Следите за размером бандла",
              "Используйте правильные абстракции",
              "Придерживайтесь единого стиля кода",
              "Документируйте компоненты и API",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Правильная архитектура React-приложения закладывает основу для его успешного развития и масштабирования. Важно найти баланс между гибкостью, производительностью и поддерживаемостью.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по построению архитектуры современных React-приложений, включая организацию кода, управление состоянием, оптимизацию производительности и тестирование.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    categoryId: 1,
    tags: [1, 3, 8], // JavaScript, React, TypeScript
  },
  {
    title: "Kubernetes для веб-разработчиков",
    content: {
      time: 1635603431958,
      blocks: [
        {
          type: "header",
          data: {
            text: "Kubernetes: практическое руководство по оркестрации контейнеров",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Kubernetes стал стандартом для оркестрации контейнеров в production-окружении. Рассмотрим основные концепции и практические аспекты использования Kubernetes для веб-приложений.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Базовая конфигурация кластера",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n      - name: web-app\n        image: my-web-app:1.0.0\n        ports:\n        - containerPort: 3000\n        resources:\n          requests:\n            memory: "128Mi"\n            cpu: "100m"\n          limits:\n            memory: "256Mi"\n            cpu: "200m"\n        env:\n        - name: NODE_ENV\n          value: "production"\n        - name: DATABASE_URL\n          valueFrom:\n            secretKeyRef:\n              name: db-secrets\n              key: url',
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Сервисы и сетевое взаимодействие",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-app-service\nspec:\n  type: LoadBalancer\n  ports:\n  - port: 80\n    targetPort: 3000\n  selector:\n    app: web-app\n\n---\n# ingress.yaml\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-app-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/ssl-redirect: "true"\nspec:\n  rules:\n  - host: myapp.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: web-app-service\n            port:\n              number: 80',
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Управление состоянием",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: '# persistent-volume.yaml\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: app-data\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: standard\n  hostPath:\n    path: "/data"\n\n---\n# persistent-volume-claim.yaml\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-data-claim\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 5Gi\n  storageClassName: standard',
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Конфигурация и секреты",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# configmap.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  app.properties: |\n    api.endpoint=https://api.example.com\n    cache.ttl=3600\n    features.newUI=true\n\n---\n# secrets.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: app-secrets\ntype: Opaque\ndata:\n  db-password: base64encodedpassword\n  api-key: base64encodedapikey\n\n# Использование в деплойменте\nspec:\n  containers:\n  - name: web-app\n    envFrom:\n    - configMapRef:\n        name: app-config\n    - secretRef:\n        name: app-secrets",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Мониторинг и логирование",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# prometheus-servicemonitor.yaml\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: web-app-monitor\nspec:\n  selector:\n    matchLabels:\n      app: web-app\n  endpoints:\n  - port: metrics\n\n---\n# fluentd-configmap.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fluentd-config\ndata:\n  fluent.conf: |\n    <source>\n      @type tail\n      path /var/log/containers/*.log\n      pos_file /var/log/fluentd-containers.log.pos\n      tag kubernetes.*\n      read_from_head true\n      <parse>\n        @type json\n        time_key time\n        time_format %Y-%m-%dT%H:%M:%S.%NZ\n      </parse>\n    </source>",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Масштабирование",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# horizontal-pod-autoscaler.yaml\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: web-app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: web-app\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 80\n  - type: Resource\n    resource:\n      name: memory\n      target:\n        type: Utilization\n        averageUtilization: 80",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "7. CI/CD интеграция",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# .github/workflows/deploy.yml\nname: Deploy to Kubernetes\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    \n    - name: Set up kubectl\n      uses: azure/setup-kubectl@v3\n      \n    - name: Build and push Docker image\n      run: |\n        docker build -t my-web-app:${{ github.sha }} .\n        docker push my-web-app:${{ github.sha }}\n      \n    - name: Update deployment image\n      run: |\n        kubectl set image deployment/web-app \\\n          web-app=my-web-app:${{ github.sha }}\n        \n    - name: Wait for rollout\n      run: kubectl rollout status deployment/web-app",
            language: "yaml",
          },
        },
        {
          type: "header",
          data: {
            text: "8. Безопасность",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "# network-policy.yaml\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: web-app-network-policy\nspec:\n  podSelector:\n    matchLabels:\n      app: web-app\n  policyTypes:\n  - Ingress\n  - Egress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          type: frontend\n    ports:\n    - protocol: TCP\n      port: 3000\n  egress:\n  - to:\n    - podSelector:\n        matchLabels:\n          type: database\n    ports:\n    - protocol: TCP\n      port: 5432",
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
            style: "ordered",
            items: [
              "Используйте namespaces для изоляции",
              "Настройте лимиты ресурсов",
              "Внедрите мониторинг и алертинг",
              "Регулярно обновляйте образы",
              "Следите за безопасностью",
              "Используйте Helm для пакетирования",
              "Настройте автомасштабирование",
              "Ведите резервное копирование",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Kubernetes предоставляет мощные инструменты для управления контейнеризированными приложениями. Правильная настройка кластера и следование лучшим практикам обеспечивают надежную работу приложений в production-среде.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Практическое руководство по использованию Kubernetes для веб-разработчиков, включая настройку кластера, управление ресурсами, мониторинг и безопасность.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    categoryId: 1,
    tags: [6], // Docker
  },
  {
    title: "Системный дизайн: проектирование масштабируемых приложений",
    content: {
      time: 1635603431959,
      blocks: [
        {
          type: "header",
          data: {
            text: "Системный дизайн: архитектурные паттерны и масштабирование",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Проектирование масштабируемых систем требует глубокого понимания архитектурных паттернов и принципов. Рассмотрим ключевые аспекты системного дизайна на примере крупного веб-приложения.",
          },
        },
        {
          type: "header",
          data: {
            text: "1. Архитектурные паттерны",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Микросервисная архитектура\ninterface Service {\n  name: string;\n  version: string;\n  endpoints: Endpoint[];\n  dependencies: Dependency[];\n}\n\ninterface Endpoint {\n  path: string;\n  method: HttpMethod;\n  auth: AuthType;\n  rateLimit: RateLimit;\n}\n\n// Пример конфигурации сервиса\nconst userService: Service = {\n  name: 'user-service',\n  version: '1.0.0',\n  endpoints: [\n    {\n      path: '/users',\n      method: 'GET',\n      auth: 'JWT',\n      rateLimit: {\n        requests: 1000,\n        period: '1m'\n      }\n    }\n  ],\n  dependencies: [\n    {\n      service: 'auth-service',\n      critical: true\n    }\n  ]\n};",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "2. Масштабирование базы данных",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Шардинг данных\nclass DatabaseSharding {\n  private shards: Map<string, Database>;\n  private shardCount: number;\n\n  constructor(shardCount: number) {\n    this.shardCount = shardCount;\n    this.shards = new Map();\n  }\n\n  private getShardId(key: string): string {\n    const hash = createHash('sha256').update(key).digest('hex');\n    const shardNumber = parseInt(hash, 16) % this.shardCount;\n    return `shard-${shardNumber}`;\n  }\n\n  async write(key: string, data: any): Promise<void> {\n    const shardId = this.getShardId(key);\n    const shard = this.shards.get(shardId);\n    await shard.write(key, data);\n  }\n\n  async read(key: string): Promise<any> {\n    const shardId = this.getShardId(key);\n    const shard = this.shards.get(shardId);\n    return shard.read(key);\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "3. Кэширование и CDN",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Многоуровневое кэширование\nclass CacheManager {\n  private l1Cache: MemoryCache;\n  private l2Cache: RedisCache;\n  private cdn: CDNProvider;\n\n  async get(key: string): Promise<any> {\n    // Проверяем L1 кэш (память)\n    let data = await this.l1Cache.get(key);\n    if (data) return data;\n\n    // Проверяем L2 кэш (Redis)\n    data = await this.l2Cache.get(key);\n    if (data) {\n      await this.l1Cache.set(key, data);\n      return data;\n    }\n\n    // Проверяем CDN\n    data = await this.cdn.get(key);\n    if (data) {\n      await this.setInAllCaches(key, data);\n      return data;\n    }\n\n    return null;\n  }\n\n  private async setInAllCaches(key: string, data: any): Promise<void> {\n    await Promise.all([\n      this.l1Cache.set(key, data),\n      this.l2Cache.set(key, data),\n      this.cdn.set(key, data)\n    ]);\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "4. Очереди и асинхронная обработка",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Система очередей\ninterface Message {\n  id: string;\n  type: MessageType;\n  payload: any;\n  attempts: number;\n  created: Date;\n}\n\nclass MessageQueue {\n  private broker: MessageBroker;\n  private handlers: Map<MessageType, MessageHandler>;\n\n  async publish(type: MessageType, payload: any): Promise<void> {\n    const message: Message = {\n      id: uuid(),\n      type,\n      payload,\n      attempts: 0,\n      created: new Date()\n    };\n\n    await this.broker.publish(message);\n  }\n\n  async processMessage(message: Message): Promise<void> {\n    const handler = this.handlers.get(message.type);\n    if (!handler) {\n      throw new Error(`No handler for message type: ${message.type}`);\n    }\n\n    try {\n      await handler.handle(message.payload);\n    } catch (error) {\n      if (message.attempts < 3) {\n        message.attempts++;\n        await this.broker.publish(message);\n      } else {\n        await this.broker.moveToDeadLetter(message);\n      }\n    }\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "5. Отказоустойчивость",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Circuit Breaker паттерн\nclass CircuitBreaker {\n  private failures: number = 0;\n  private lastFailure?: Date;\n  private readonly threshold: number;\n  private readonly resetTimeout: number;\n\n  constructor(threshold: number = 5, resetTimeout: number = 60000) {\n    this.threshold = threshold;\n    this.resetTimeout = resetTimeout;\n  }\n\n  async execute<T>(fn: () => Promise<T>): Promise<T> {\n    if (this.isOpen()) {\n      throw new Error('Circuit is open');\n    }\n\n    try {\n      const result = await fn();\n      this.reset();\n      return result;\n    } catch (error) {\n      this.recordFailure();\n      throw error;\n    }\n  }\n\n  private isOpen(): boolean {\n    if (this.failures >= this.threshold) {\n      const now = new Date();\n      if (this.lastFailure && \n          (now.getTime() - this.lastFailure.getTime()) > this.resetTimeout) {\n        this.reset();\n        return false;\n      }\n      return true;\n    }\n    return false;\n  }\n\n  private reset(): void {\n    this.failures = 0;\n    this.lastFailure = undefined;\n  }\n\n  private recordFailure(): void {\n    this.failures++;\n    this.lastFailure = new Date();\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "6. Мониторинг и метрики",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// Система метрик\nclass MetricsCollector {\n  private metrics: Map<string, Metric>;\n  private readonly reporter: MetricsReporter;\n\n  async recordLatency(name: string, duration: number): Promise<void> {\n    const metric = this.getOrCreateMetric(name, MetricType.Histogram);\n    metric.observe(duration);\n  }\n\n  async incrementCounter(name: string, value: number = 1): Promise<void> {\n    const metric = this.getOrCreateMetric(name, MetricType.Counter);\n    metric.increment(value);\n  }\n\n  async reportMetrics(): Promise<void> {\n    const snapshot = this.createSnapshot();\n    await this.reporter.report(snapshot);\n  }\n\n  private createSnapshot(): MetricsSnapshot {\n    return {\n      timestamp: new Date(),\n      metrics: Array.from(this.metrics.entries()).map(([name, metric]) => ({\n        name,\n        type: metric.type,\n        value: metric.getValue()\n      }))\n    };\n  }\n}",
            language: "typescript",
          },
        },
        {
          type: "header",
          data: {
            text: "7. API Gateway",
            level: 2,
          },
        },
        {
          type: "code",
          data: {
            code: "// API Gateway реализация\nclass ApiGateway {\n  private readonly serviceRegistry: ServiceRegistry;\n  private readonly authService: AuthService;\n  private readonly rateLimit: RateLimiter;\n\n  async handleRequest(req: Request): Promise<Response> {\n    // Аутентификация\n    const token = this.extractToken(req);\n    const user = await this.authService.validateToken(token);\n\n    // Rate limiting\n    await this.rateLimit.checkLimit(user.id);\n\n    // Маршрутизация\n    const service = await this.serviceRegistry.getService(req.path);\n    \n    // Вызов сервиса\n    try {\n      const response = await service.call(req);\n      return this.transformResponse(response);\n    } catch (error) {\n      return this.handleError(error);\n    }\n  }\n\n  private transformResponse(response: ServiceResponse): Response {\n    // Преобразование ответа\n    return {\n      status: response.status,\n      headers: this.standardizeHeaders(response.headers),\n      body: response.body\n    };\n  }\n}",
            language: "typescript",
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
            style: "ordered",
            items: [
              "Проектируйте для масштабирования",
              "Используйте асинхронную обработку",
              "Внедряйте кэширование на всех уровнях",
              "Реализуйте отказоустойчивость",
              "Мониторьте производительность",
              "Следите за безопасностью",
              "Документируйте архитектурные решения",
              "Тестируйте под нагрузкой",
            ],
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Системный дизайн – это итеративный процесс, требующий постоянного анализа и улучшения. Важно находить баланс между сложностью системы и её эффективностью.",
          },
        },
      ],
      version: "2.22.2",
    },
    excerpt:
      "Подробное руководство по проектированию масштабируемых систем, включая архитектурные паттерны, масштабирование баз данных, кэширование и отказоустойчивость.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    categoryId: 1,
    tags: [1, 4], // JavaScript, Node.js
  },
];
