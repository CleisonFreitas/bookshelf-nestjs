/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { StoreDTO } from '../dtos/StoreUser.dto';
import { UserService } from '../repositories/user.service';
import { UserEntity } from '../user.entity';
import { v4 as uuid } from 'uuid';
import { ViewUserDTO } from '../dtos/ViewUser.dto';

@Controller('/user')
export class StoreUserController {
    constructor(private userRepository: UserService, private userEntity: UserEntity){}

    @Post()
    async store(@Body() dados: StoreDTO){
        this.userEntity.name = dados.name;
        this.userEntity.email = dados.email;
        this.userEntity.password = dados.password;
        this.userEntity.id = uuid();

        this.userRepository.create(this.userEntity);

        return ({
            user: new ViewUserDTO(this.userEntity.id,this.userEntity.email,this.userEntity.name),
            message: 'the user has been created with success'
        });
    }
}
