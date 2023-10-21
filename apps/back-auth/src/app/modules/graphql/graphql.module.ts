import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule as OriginalGraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    OriginalGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "./apps/back-auth/src/schema.gql",
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
