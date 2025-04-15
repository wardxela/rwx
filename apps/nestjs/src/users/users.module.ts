import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";

import { FilesModule } from "src/files/files.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [forwardRef(() => AuthModule), FilesModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
