import { Routes } from '@nestjs/core';
import { AppModule } from './app.module';

export const appRoutes: Routes = [
  { path: '/api', module: AppModule, children: [] },
];
