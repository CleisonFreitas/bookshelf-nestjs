import { Injectable } from "@nestjs/common/decorators";
import { BookEntity } from "../entities/book.entity";

@Injectable()
export class BookService {
    private books: BookEntity[] = [];

    async store(book:BookEntity) {
        this.books.push(book);
    }

    async fetchAll() {
        return this.books;
    }

    async findOne(id: string) {
        const book = this.books.find(
            (book) => book.id === id
        );

        return book;
    }
}