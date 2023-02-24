import { Injectable } from "@nestjs/common/decorators";
import { BookEntity } from "../entities/book.entity";

@Injectable()
export class BookService {
    private books: BookEntity[] = [];

    async store(book:BookEntity) {
        this.books.push(book);
    }
}