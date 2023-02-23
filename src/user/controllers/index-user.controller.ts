import { Controller, Get } from '@nestjs/common';
import { ViewUserDTO } from '../dtos/ViewUser.dto';
import { UserService } from '../repositories/user.service';

@Controller('/user')
export class IndexUserController {
    constructor(private userRepository: UserService){}

    @Get()
    async index(){
        const users = await this.userRepository.fetAll();
        const list = users.map(
            (user) => new ViewUserDTO(user.id,user.email, user.name)
        );

        return list;
    }
}
