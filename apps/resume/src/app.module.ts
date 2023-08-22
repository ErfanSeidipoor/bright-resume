import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoadConfigs } from './common/helper/function/config-loader.helper';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { appRoutes } from './app.routes';
import { DatabaseModule } from './common/modules/database/database.module';
import {
  ALL_EXCEPTION_FILTER_TOKEN,
  AllExceptionsFilter,
} from './common/filters/all-exceptions.filter';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ResumeModule } from './api/modules/resume/resume.module';
import { join } from 'path';
import { cwd } from 'process';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [LoadConfigs],
      ignoreEnvFile: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      include: [ResumeModule],
      autoSchemaFile: join(cwd(), 'apps', 'resume', 'src', 'schema.gql'),
      sortSchema: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: ALL_EXCEPTION_FILTER_TOKEN, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
