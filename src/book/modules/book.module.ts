import { Module } from "@nestjs/common";
import { StoreBookController } from "../controllers/store-book.controller";
import { BookEntity } from "../entities/book.entity";
import { BookService } from "../repositories/book.service";

@Module({
    controllers: [StoreBookController],
    providers: [BookService, BookEntity]
})
export class BookModule {}