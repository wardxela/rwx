import type { UserRole } from "../dist";
import categories from "./categories";
import courses from "./courses";
import { db } from "./db";
import instructorsData from "./instructors";
import blogPosts from "./posts";
import tags from "./tags";

async function seed() {
  for (const instructor of instructorsData) {
    await db.insertInto("User").values(instructor).execute();
  }
  console.log("creted");

  await db.insertInto("Category").values(categories).execute();

  // 🏷️ Теги
  await db
    .insertInto("Tag")
    .values(tags)
    .onConflict((oc) => oc.column("name").doNothing())
    .execute();

  const instructors = await db
    .selectFrom("User")
    .select("id")
    //@ts-expect-error
    .where("roles", "@>", "{INSTRUCTOR}")
    .execute();

  const getRandomInstructor = () =>
    instructors[Math.floor(Math.random() * instructors.length)];

  for (const post of blogPosts) {
    await db
      .insertInto("BlogPost")
      .values({
        title: post.title,
        categoryId: post.categoryId,
        content: post.content,
        excerpt: post.excerpt,
        image: post.image,
        published: true,
        authorId: getRandomInstructor().id,
        updatedAt: new Date(),
      })
      .returning("id")
      .executeTakeFirst()
      .then(async (result) => {
        if (post.tags) {
          for (const tagId of post.tags) {
            await db
              .insertInto("_BlogPostToTag")
              .values({
                A: result!.id,
                B: tagId,
              })
              .execute();
          }
        }
      });
  }

  for (const courseData of courses) {
    const { modules, ...course } = courseData;

    // Insert course
    const courseInsert = await db
      .insertInto("Course")
      .values({
        ...course,
        authorId: getRandomInstructor().id,
        updatedAt: new Date(),
      })
      .returning("id")
      .executeTakeFirst();

    if (!courseInsert) continue;

    // Insert modules for this course
    for (const [moduleIdx, moduleData] of modules.entries()) {
      const { lessons, ...module } = moduleData;

      const moduleInsert = await db
        .insertInto("Module")
        .values({
          ...module,
          position: moduleIdx + 1,
          courseId: courseInsert.id,
          updatedAt: new Date(),
        })
        .returning("id")
        .executeTakeFirst();

      if (!moduleInsert) continue;

      // Insert lessons for this module
      for (const [lessonIdx, lessonData] of lessons.entries()) {
        await db
          .insertInto("Lesson")
          .values({
            ...lessonData,
            position: lessonIdx + 1,
            moduleId: moduleInsert.id,
            updatedAt: new Date(),
          })
          .execute();
      }
    }
  }
}

seed()
  .catch((err) => {
    console.error("❌ Ошибка при выполнении сидирования", err);
    process.exit(1);
  })
  .finally(() => {
    db.destroy();
  });
