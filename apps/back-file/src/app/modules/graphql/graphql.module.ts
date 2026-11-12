import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ApolloServerPluginInlineTraceDisabled } from "@apollo/server/plugin/disabled";
import { GraphQLModule as OriginalGraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    OriginalGraphQLModule.forRoot<ApolloFederationDriverConfig>({
      plugins: [ApolloServerPluginInlineTraceDisabled()],
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: "./apps/back-file/src/schema.gql",
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
