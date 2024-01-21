import { Module } from "@nestjs/common";
import { UsersMicroserviceController } from "./users/users.controller";

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class AppModule {}
