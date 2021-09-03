import { Author } from "entity/Author";
import { Book } from "entity/Book";
import {
	Arg,
	Mutation,
	Query,
	Resolver,
	InputType,
	Field,
	Authorized,
} from "type-graphql";
import { Like } from "typeorm";
import { AuthorInput, AuthorQueryInput } from "./AuthorInput";

@Resolver(Author)
export class AuthorResolver {
	@Authorized(["admin"])
	@Mutation(() => Author)
	async createAuthor(
		@Arg("data", () => AuthorInput) data: AuthorInput
	): Promise<Author> {
		console.log(data, "hihi");
		const author = await Author.create(data).save();
		const listNewBooks = [];
		for (const book of data.books) {
			const newBook = new Book(book.title, author);
			await newBook.save();
			listNewBooks.push(newBook);
		}
		author.books = listNewBooks;
		console.log(author);

		return author;
	}

	@Query(() => [Author])
	async authors(
		@Arg("params", () => AuthorQueryInput) params: AuthorQueryInput
	): Promise<Author[]> {
		const { limit, page, key } = params;
		console.log(params, "params");
		const listAuthor = await Author.find({
			skip: (page - 1) * limit,
			take: limit,
			where: { name: Like(`%${key}%`) },
			relations: ["books"],
		});
		return listAuthor;
	}
}
