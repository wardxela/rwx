export default function Page() {
  return (
    <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-24 text-gray-800">
      <div class="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
        <h1 class="mb-8 text-center font-bold text-4xl drop-shadow-lg md:text-6xl">
          Админ-панель
        </h1>
        <p class="mb-12 text-center text-gray-600 text-lg drop-shadow-md md:text-xl">
          Здесь вы можете управлять всем контентом и настройками сайта.
        </p>
      </div>
    </div>
  );
}
