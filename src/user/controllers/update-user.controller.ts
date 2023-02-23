/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateUserDTO } from '../dtos/UpdateUser.dto';
import { UserService } from '../repositories/user.service';

@Controller('/user')
export class UpdateController { 
    constructor(private userRepository : UserService){}

    @Put('/:id')
    async update(@Param('id') id:string, @Body() dados: UpdateUserDTO) {
        const dadosUpdated = await this.userRepository.updateOne(id,dados);

        return (
            {
                user: dadosUpdated,
                message: 'the user has been updated with success'
            }
        );
    }
}
