import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { IsUniqueEmail } from "../validations/email-unique.validation";

export class UpdateUserDTO {
    @IsNotEmpty({message: 'The name field cannot be null or empty'})
    @IsOptional()
    name: string;

    @IsEmail(undefined,{message: 'The e-mail must be an email valid'})
    @IsUniqueEmail({message: 'This value of email is already been used'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'the password field must have at least 6 caracters'})
    @IsOptional()
    password: string;
}