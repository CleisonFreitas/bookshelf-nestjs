import { IsNotEmpty, IsString } from "class-validator";

export class StoreBookDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;
}