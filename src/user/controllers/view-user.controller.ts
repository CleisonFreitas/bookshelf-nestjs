import { Controller, Get, Param } from '@nestjs/common';
import { ViewUserDTO } from '../dtos/ViewUser.dto';
import { UserService } from '../repositories/user.service';

@Controller('/user')
export class ViewUserController { 

    constructor(private userRepository : UserService){}

    @Get('/:id')
    async show(@Param('id') id:string){
        const search = await this.userRepository.fetOne(id);

        return search;
    }
}
