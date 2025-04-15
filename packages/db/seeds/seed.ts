import categories from "./categories";
import { db } from "./db";
import blogPosts from "./posts";
import tags from "./tags";

async function seed() {
  await db
    .insertInto("User")
    .values({
      email: "instructor@example.com",
      firstName: "Иван",
      lastName: "Петров",
      roles: ["INSTRUCTOR"],
      bio: "Опытный преподаватель с 10-летним стажем в области программирования и веб-разработки.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor1",
      updatedAt: new Date(),
    })
    .execute();

  await db.insertInto("Category").values(categories).execute();

  // 🏷️ Теги
  await db
    .insertInto("Tag")
    .values(tags)
    .onConflict((oc) => oc.column("name").doNothing())
    .execute();

  const instructor = (await db
    .selectFrom("User")
    .select("id")
    .where("email", "=", "instructor@example.com")
    .executeTakeFirst())!;

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
        authorId: instructor.id,
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
}

seed()
  .catch((err) => {
    console.error("❌ Ошибка при выполнении сидирования", err);
    process.exit(1);
  })
  .finally(() => {
    db.destroy();
  });
