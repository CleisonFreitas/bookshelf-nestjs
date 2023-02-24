import { Body, Controller, Post } from "@nestjs/common";
import { StoreBookDTO } from "../dtos/store-book.dto";
import { BookEntity } from "../entities/book.entity";
import { BookService } from "../repositories/book.service";
import { v4 as uuid} from "uuid";
import { v1 } from "uuid";
import { ViewBookDTO } from "../dtos/view-book.dto";

@Controller('book')
export class StoreBookController {
    constructor(private bookRepository: BookService, private bookEntity : BookEntity){}

    @Post()
    async store(@Body() dados: StoreBookDTO){
        this.bookEntity.title = dados.title;
        this.bookEntity.author = dados.author;
        this.bookEntity.id = uuid();
        this.bookEntity.sku = v1();

        this.bookRepository.store(this.bookEntity);

        return new ViewBookDTO(this.bookEntity.id, this.bookEntity.title, this.bookEntity.author, this.bookEntity.sku);
    }
}

