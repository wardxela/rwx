export class CategoryDto {
  id: number;
  name: string;
  description?: string | null;
}

export class CategoryCountedDto {
  id: number;
  name: string;
  description?: string | null;
  count: string | number | bigint;
}
