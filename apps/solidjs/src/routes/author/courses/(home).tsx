import { CourseCardLink } from "~/entities/course/course-card-link";

export default function Page() {
  return (
    <div class="p-6">
      <h1 class="mb-4 font-bold text-2xl">Курсы</h1>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
        <CourseCardLink
          href="/author/courses/1"
          preview="/course-preview.png"
          author="Артем Неизвестный"
          title="Создай веб-сайт с помощью  LMS plugin"
          category="Фотосъемка"
          lessonsCount={10}
          durationMs={2 * 2592000000}
          studentsCount={156}
          oldPrice={19999}
          price={0}
          level="Эксперт"
        />
        <CourseCardLink
          href="/author/courses/1"
          preview="/course-preview.png"
          author="Артем Неизвестный"
          title="Создай веб-сайт с помощью  LMS plugin"
          category="Фотосъемка"
          lessonsCount={10}
          durationMs={2 * 2592000000}
          studentsCount={156}
          oldPrice={19999}
          price={0}
          level="Эксперт"
        />
        <CourseCardLink
          href="/author/courses/1"
          preview="/course-preview.png"
          author="Артем Неизвестный"
          title="Создай веб-сайт с помощью  LMS plugin"
          category="Фотосъемка"
          lessonsCount={10}
          durationMs={2 * 2592000000}
          studentsCount={156}
          oldPrice={19999}
          price={0}
          level="Эксперт"
        />
        <CourseCardLink
          href="/author/courses/1"
          preview="/course-preview.png"
          author="Артем Неизвестный"
          title="Создай веб-сайт с помощью  LMS plugin"
          category="Фотосъемка"
          lessonsCount={10}
          durationMs={2 * 2592000000}
          studentsCount={156}
          oldPrice={19999}
          price={0}
          level="Эксперт"
        />
      </div>
    </div>
  );
}
