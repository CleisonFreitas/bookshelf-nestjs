import { Controller, Get, HttpStatus, NotFoundException } from "@nestjs/common";
import { ViewBookDTO } from "../dtos/view-book.dto";
import { BookService } from "../repositories/book.service";

@Controller('book')
export class ListBookController {

    constructor(private bookRepository: BookService){}

    @Get()
    public async fetchAll() {
        const books = await this.bookRepository.fetchAll();
        const list = books.map(
            (book) => new ViewBookDTO(book.id,book.title,book.author,book.sku)
        );

        if(!books) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'No one book has been found it'
            })
        }

        return list;
    }
}