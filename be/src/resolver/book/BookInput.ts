import { Book } from "entity/Book";
import { Field, InputType } from "type-graphql";
import { IBook } from "resolver/book/dto/BookCreateDto";
import { Author } from "entity/Author";

@InputType()
export class BookInput {
	@Field(() => String)
	title: string;
}
