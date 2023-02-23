/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ViewUserDTO } from '../dtos/ViewUser.dto';
import { UserEntity } from '../user.entity';

@Injectable()
export class UserService { 
    private users: UserEntity[] = [];

    async create(user: UserEntity){
        this.users.push(user);
    }

    async fetAll(){
        return this.users;
    }

    async fetOne(id:string){
        const possibleUser = this.searchOne(id);
        return new ViewUserDTO(possibleUser.id,possibleUser.email, possibleUser.name);
    }

    async updateOne(id:string, dados: Partial<UserEntity>){
        const possibleUser = this.searchOne(id);

        Object.entries(dados).forEach(([key,value]) => {
            if(key === 'id') {
                return;
            }
            possibleUser[key] = value;
        });

        return new ViewUserDTO(possibleUser.id,possibleUser.email,possibleUser.name);

    }

    async remove(id: string){
        const possibleUser = this.searchOne(id);

        this.users = this.users.filter(
            (removedUser) => removedUser.id !== id
        );

        return possibleUser;
    }

    private searchOne(id:string) {
        const possibleUser = this.users.find(
            (user) => user.id === id
        );

        if(!possibleUser) {
            throw new Error('this id has not been found')
        }

        return possibleUser;
    }

    async searchEmail(email:string) {
        const stringEmail = this.users.find(
            (user) => user.email === email
        );
        return stringEmail !== undefined;
    }
}
