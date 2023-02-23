import { UserModule } from './user/modules/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
        UserModule, 
      ],

})
export class AppModule { }
