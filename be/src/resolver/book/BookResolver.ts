import { Author } from "entity/Author";
import { Book } from "entity/Book";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";

const books = [
	{ title: "Kafka", author: { name: "Murakami" } },
	{
		title: "Do android dream of electric sheep?",
		author: { name: "Phillip K Dick" },
	},
];

@Resolver(Book)
export class BookResolver {
	@Mutation(() => Book)
	async createBook(
		@Arg("title", () => String) title: string,
		@Arg("author", () => String) authorId: string
	): Promise<Book> {
		const author = await Author.findOne({ id: authorId });

		const book = await Book.create({
			title,
			author,
		}).save();

		return book;
	}

	@Query(() => [Book])
	async books(): Promise<Book[]> {
		const listBook = await Book.find({ relations: ["author"] });
		console.log(listBook, "hoho");
		return listBook;
	}
}
