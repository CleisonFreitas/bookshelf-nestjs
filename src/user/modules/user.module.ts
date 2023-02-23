import { Module } from '@nestjs/common';
import { DeleteController } from '../controllers/delete-user.controller';
import { IndexUserController } from '../controllers/index-user.controller';
import { StoreUserController } from '../controllers/store-user.controller';
import { UpdateController } from '../controllers/update-user.controller';
import { ViewUserController } from '../controllers/view-user.controller';
import { UserService } from '../repositories/user.service';
import { UserEntity } from '../user.entity';
import { EmailUniqueUser } from '../validations/email-unique.validation';

@Module({
    imports: [],
    controllers: [StoreUserController,IndexUserController, ViewUserController, UpdateController,DeleteController],
    providers: [UserService,UserEntity, EmailUniqueUser],
})
export class UserModule { }
