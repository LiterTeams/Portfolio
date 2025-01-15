// import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
// import { Observable, throwError, TimeoutError } from 'rxjs';
// import { catchError, take, timeout } from 'rxjs/operators';

// @Injectable()
// export class TimeoutInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

//     return next.handle().pipe(
//       timeout(5000),
//       catchError(err => {
//         if (err instanceof TimeoutError) {
//           return throwError(() => new RequestTimeoutException());
//         }
//         return throwError(() => err);
//       }),
//     );
//   };
// };

// import { Reflector } from '@nestjs/core';
// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TimeoutInterceptor implements NestInterceptor {
//   constructor(
//     private readonly reflector: Reflector,
//   ) {}

//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     const response = context.switchToHttp().getResponse();
//     const timeout = this.reflector.get<number>('request-timeout', context.getHandler()) || 60000;
//     response.setTimeout(timeout )

//     return next.handle();
//   };
// }