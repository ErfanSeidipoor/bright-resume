import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ClassTransformOptions } from 'class-transformer';
import { serializerOptions } from '../constant/serializer-options.constant';

function handleError(error: ValidationError): ValidationError[] {
  if (!error.children || error.children.length === 0) {
    return [error];
  }
  const property = error.property;
  let errors: ValidationError[] = [];
  for (const error_ of error.children) {
    errors.push(...handleError(error_));
    error_.children = undefined;
  }
  errors = errors.map((er) => {
    er.property = `${property}.${er.property}`;
    return er;
  });
  return errors;
}

export const ValidatorOptions: {
  transform: boolean;
  whitelist: boolean;
  validationError: {
    target: boolean;
    value: boolean;
  };
  exceptionFactory: (errors: ValidationError[]) => UnprocessableEntityException;
  transformOptions: ClassTransformOptions;
} = {
  transform: true,
  whitelist: true,
  validationError: {
    target: true,
    value: true,
  },
  exceptionFactory: function (
    errors: ValidationError[]
  ): UnprocessableEntityException {
    const errs: ValidationError[] = [];
    for (const error of errors) {
      errs.push(...handleError(error));
    }
    return new UnprocessableEntityException(
      errs.map((error) => {
        return {
          property: error.property,
          errors: Object.values(error.constraints),
        };
      })
    );
  },
  transformOptions: serializerOptions,
};

export const GlobalValidationPipe = new ValidationPipe(ValidatorOptions);
