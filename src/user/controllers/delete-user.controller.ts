/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Delete, Param } from '@nestjs/common/decorators';
import { ViewUserDTO } from '../dtos/ViewUser.dto';
import { UserService } from '../repositories/user.service';

@Controller('/user')
export class DeleteController { 
    constructor(private userRepository: UserService){}

    @Delete('/:id')
    async delete(@Param('id') id:string){
        const userRemoved = await this.userRepository.remove(id);

        return ({
            user: new ViewUserDTO(userRemoved.id,userRemoved.email,userRemoved.name),
            message: 'the user has been deleted with success'
        });
    }
}
