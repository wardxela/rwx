export function Header() {
  return (
    <header>
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="/" class="flex items-center gap-1">
          <img src="/icon.svg" alt="logotype" />
          <div class="text-3xl font-bold">ЧПИ</div>
        </a>
        <nav>
          <ul class="flex h-full items-center">
            <li>
              <a
                href="/"
                class="block bg-neutral-100 px-5 py-6 leading-tight font-semibold text-orange-500 capitalize"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block px-5 py-6 leading-tight font-semibold capitalize transition hover:bg-neutral-100 hover:text-orange-500"
              >
                Курсы
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block px-5 py-6 leading-tight font-semibold capitalize transition hover:bg-neutral-100 hover:text-orange-500"
              >
                Блог
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block px-5 py-6 leading-tight font-semibold capitalize transition hover:bg-neutral-100 hover:text-orange-500"
              >
                Больше
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-5">
          <a href="/login" class="font-medium transition hover:text-orange-500">
            Войти / Зарегистрироваться
          </a>
          <a href="" class="grid place-items-center">
            <img src="/search.svg" alt="search" />
          </a>
        </div>
      </div>
    </header>
  );
}
