import { UserModule } from './user/modules/user.module';
import { Module } from '@nestjs/common';
import { BookModule } from './book/modules/book.module';

@Module({
  imports: [
        UserModule,
        BookModule, 
      ],

})
export class AppModule { }
