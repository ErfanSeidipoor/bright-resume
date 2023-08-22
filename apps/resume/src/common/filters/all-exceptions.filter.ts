import { HttpAdapterHost } from '@nestjs/core';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  BadRequestException,
  Logger,
} from '@nestjs/common';

export const ALL_EXCEPTION_FILTER_TOKEN = Symbol('AllExceptionFilter');
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  private logger = new Logger(this.constructor.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    console.log(exception);

    /* -------------------------------------------------------------------------- */
    /*                               Http Status                                  */
    /* -------------------------------------------------------------------------- */

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    /* -------------------------------------------------------------------------- */
    /*                           Creating Error Message                           */
    /* -------------------------------------------------------------------------- */

    let message = exception;
    let logMessage = exception;
    if (exception instanceof BadRequestException) {
      message = exception.getResponse()['message'];
      logMessage = message;
    } else if (exception instanceof HttpException) {
      message = exception.message;
      logMessage = message;
    } else if (httpStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
      message = 'InternalServerErrorException';
    } else {
      message = exception;
      logMessage = exception + JSON.stringify(exception, undefined, 3);
    }

    const { body, params, method, query, url } = ctx.getRequest();

    this.logger.log({
      statusCode: `${httpStatus}`,
      message:
        httpStatus === HttpStatus.INTERNAL_SERVER_ERROR
          ? exception + JSON.stringify(exception, undefined, 3)
          : `${message}`,
      body,
      params,
      method,
      query,
      url,
    });
    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
