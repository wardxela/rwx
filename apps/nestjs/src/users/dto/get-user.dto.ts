export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  image: string | null;
  bio: string | null;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class UserCountedDto {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  image: string | null;
  bio: string | null;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
  count: string | number | bigint;
}
