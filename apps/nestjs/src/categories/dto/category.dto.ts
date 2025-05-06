export class CategoryDto {
  id: number;
  name: string;
  description?: string | null;
}

export class CategoryDtoCounted {
  id: number;
  name: string;
  description?: string | null;
  count: string | number | bigint;
}
