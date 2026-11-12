import { Module } from "@nestjs/common";
import { GraphQLModule } from "./modules/graphql/graphql.module";
import { PassportModule } from "@nestjs/passport";
import { DBModule } from "./modules/db/db.module";
import { FileModule } from "./modules/file/file.module";
import { AppController } from "./app.controller";
import { JWTStrategy } from "@back-common/strategies";
import { ConfigModule } from "@nestjs/config";
import { BullModule } from "./modules/bull/bull.module";
import { PdfModule } from "./modules/pdf/pdf.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule,
    PassportModule,
    DBModule,
    FileModule,
    BullModule,
    PdfModule,
  ],
  controllers: [AppController],
  providers: [JWTStrategy],
})
export class AppModule {}
