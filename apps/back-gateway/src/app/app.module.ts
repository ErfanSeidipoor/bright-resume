import { IntrospectAndCompose } from "@apollo/gateway";
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./app.controller";
import { EnvironmentVariablesEnum } from "./enums";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: "auth",
              url: process.env[EnvironmentVariablesEnum.AUTH_URL],
            },
            {
              name: "resume",
              url: process.env[EnvironmentVariablesEnum.RESUME_URL],
            },
            {
              name: "file",
              url: process.env[EnvironmentVariablesEnum.FILE_URL],
            },
          ],
        }),
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
