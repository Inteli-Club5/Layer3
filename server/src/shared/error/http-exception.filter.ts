import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    let message: string | object;

    var exceptionResponse = exception.getResponse();
    if (exceptionResponse instanceof Object) {
      if (exceptionResponse.hasOwnProperty('message')) {
        message = exceptionResponse['message'];
      } else {
        message = exceptionResponse;
      }
    } else {
      message = exceptionResponse;
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}