import type { UserRole } from "../dist";

export default [
  {
    email: "instructor@example.com",
    firstName: "Иван",
    lastName: "Петров",
    roles: ["INSTRUCTOR"] satisfies UserRole[],
    bio: "Опытный преподаватель с 10-летним стажем в области программирования и веб-разработки.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor1",
    updatedAt: new Date(),
  },
  {
    email: "instructor2@example.com",
    firstName: "Мария",
    lastName: "Сидорова",
    roles: ["INSTRUCTOR"] satisfies UserRole[],
    bio: "Преподаватель дизайна и UX/UI с 6-летним опытом работы в крупных IT-компаниях.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor5",
    updatedAt: new Date(),
  },
  {
    email: "instructor3@example.com",
    firstName: "Алексей",
    lastName: "Смирнов",
    roles: ["INSTRUCTOR"] satisfies UserRole[],
    bio: "Специалист по базам данных и системному администрированию с 8-летним стажем.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor2",
    updatedAt: new Date(),
  },
];
