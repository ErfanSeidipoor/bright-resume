import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule as OriginalGraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    OriginalGraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: "./apps/back-auth/src/schema.gql",
      },
      allowBatchedHttpRequests: true,
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class GraphQLModule {}
