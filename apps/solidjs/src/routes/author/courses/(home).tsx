import { Button } from "@rwx/ui/components/button";
import { CourseCardLink } from "~/features/course/course-card-link";

export default function Page() {
  return (
    <div class="px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Курсы</h1>
        <Button>Создать</Button>
      </div>
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
