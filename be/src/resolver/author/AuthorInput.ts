import { Book } from "entity/Book";
import { Field, InputType } from "type-graphql";
import { BookInput } from "resolver/book/BookInput";
import { Author } from "entity/Author";

@InputType()
export class AuthorInput {
	@Field(() => String)
	name: string;

	@Field(() => String)
	birth: string;

	@Field(() => String)
	gender: string;

	@Field(() => [BookInput])
	books: [BookInput];
}

@InputType()
export class AuthorQueryInput {
	@Field(() => Number)
	limit: number;

	@Field(() => Number)
	page: number;

	@Field(() => String)
	key: string;
}
