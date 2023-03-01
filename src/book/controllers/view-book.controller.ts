import { Get, HttpStatus, NotFoundException } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { ViewBookDTO } from "../dtos/view-book.dto";

import { BookService } from "../repositories/book.service";

@Controller('book')
export class ViewBookController {
    constructor(private bookRepository : BookService){}

    @Get(':id')
    public async show(@Param('id') id:string){
        const book = await this.bookRepository.findOne(id);

        if(!book) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'this book hasn`t been not found'
            });
        }

        return new ViewBookDTO(book.id,book.title,book.author,book.sku)
    }
}