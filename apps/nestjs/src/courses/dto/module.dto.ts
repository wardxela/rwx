export class ModuleDto {
  id: string;
  title: string;
  position: number;
  lessons: LessonPreviewDto[];
  createdAt: Date;
  updatedAt: Date;
}

export class LessonPreviewDto {
  id: string;
  title: string;
  position: number;
  duration: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export class LessonDto {
  id: string;
  title: string;
  content: unknown;
  position: number;
  duration: number | null;
  createdAt: Date;
  updatedAt: Date;
}
