import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(map(data => ({
      statusCode: 0,
      serverTime: Math.round(new Date().getTime() / 1000),
      msg: 'ok',
      data
    }))); 
  }
}