import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Module } from "@nestjs/common";
import { EnvironmentVariablesEnum } from "../../enums";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get(EnvironmentVariablesEnum.JWT_SECRET),
          signOptions: { expiresIn: 30 * 24 * 60 * 60 + "s" }, // one month
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class JWTModule {}
