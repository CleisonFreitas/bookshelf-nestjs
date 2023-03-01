import { UserModule } from './user/modules/user.module';
import { Module } from '@nestjs/common';
import { BookModule } from './book/modules/book.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FilterException } from './exceptions/filter-exceptions.filter';
import { TransformResponseInterceptor } from './core/http/transform-response.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';

@Module({
  imports: [
        UserModule,
        BookModule, 
      ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterException
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor
    }
  ]

})
export class AppModule { }
