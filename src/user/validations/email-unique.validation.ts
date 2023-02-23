import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "../repositories/user.service";

@Injectable()
@ValidatorConstraint({async:true})
export class EmailUniqueUser implements ValidatorConstraintInterface{

    constructor(private userRepository: UserService){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const emailValidated = await this.userRepository.searchEmail(value);

        return !emailValidated;
    }
}

export const IsUniqueEmail = (optionsAccepted: ValidationOptions) => {
    return(object: Object, properties: string) => {
       registerDecorator({
            target: object.constructor,
            propertyName: properties,
            options: optionsAccepted,
            constraints: [],
            validator: EmailUniqueUser
       });
    };
};