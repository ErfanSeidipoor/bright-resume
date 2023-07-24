import { ClassTransformOptions } from 'class-transformer';

export const serializerOptions: ClassTransformOptions = {
  strategy: 'exposeAll',
  excludeExtraneousValues: true,
  enableImplicitConversion: true,
  enableCircularCheck: true,
  exposeUnsetFields: false,
  exposeDefaultValues: false,
};
