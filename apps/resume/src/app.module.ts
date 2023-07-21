import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoadConfigs } from './common/helper/function/config-loader.helper';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [LoadConfigs],
      ignoreEnvFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
