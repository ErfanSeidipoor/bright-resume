import {
  ClassSerializerInterceptor,
  INestApplication,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { serializerOptions } from '../../constant/serializer-options.constant';

export function SerializerInterceptor(app: INestApplication): NestInterceptor {
  return new ClassSerializerInterceptor(app.get(Reflector), serializerOptions);
}
