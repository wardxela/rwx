import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { FilesController } from "./files.controller";
import { FilesService } from "./files.service";

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
