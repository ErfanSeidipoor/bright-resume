import { ApolloServerPluginInlineTraceDisabled } from "@apollo/server/plugin/disabled";
import {
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
      plugins: [ApolloServerPluginInlineTraceDisabled()],
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
