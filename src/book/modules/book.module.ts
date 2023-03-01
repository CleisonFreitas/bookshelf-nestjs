import { Module } from "@nestjs/common";
import { ListBookController } from "../controllers/list-book.controller";
import { StoreBookController } from "../controllers/store-book.controller";
import { ViewBookController } from "../controllers/view-book.controller";
import { BookEntity } from "../entities/book.entity";
import { BookService } from "../repositories/book.service";

@Module({
    controllers: [StoreBookController, ListBookController, ViewBookController],
    providers: [BookService, BookEntity]
})
export class BookModule {}