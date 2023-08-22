import { Routes } from '@nestjs/core';
import { ApiModule } from './api.module';

export const apiRoutes: Routes = [
  { path: '/', module: ApiModule, children: [] },
];
