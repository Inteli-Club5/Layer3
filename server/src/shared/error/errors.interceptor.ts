
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  ConflictException,
  NotFoundException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SyntaxException } from './exceptions/syntax.exception';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => {
          const code = err.code;

          if (err.name.includes('NotFoundError')) throw new NotFoundException('Record not found with the provided id');
          if (err.name.includes('SyntaxError')) throw new SyntaxException('Invalid Input');
          if (err.response?.message) {
            throw new HttpException(err.response.message, 400);
          }

          switch (code) {
            case 'P2002':
              if (err.message.includes('Unique constraint failed')) {
                const message = err.message.split('\n').find(line => line.includes('Unique constraint failed'));
                throw new ConflictException(message);
              }
            case 'P2010':
              throw new InternalServerErrorException('Failed to create record: ' + err.message);
            case 'P2025':
              throw new NotFoundException('There is no record with the given parameters');
            case 'P2003':
              if (context.getArgs()[0].method == 'DELETE') {
                throw new NotFoundException('Record in use');
              } else {
                throw new NotFoundException('Record not found with the provided id');
              }
            default:
              throw new BadGatewayException(err.message?.toString());
          }
        }),
      );
  }
}
