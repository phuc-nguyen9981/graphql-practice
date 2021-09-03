import { Field, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "./Author";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
	constructor(title: string, author: Author) {
		super();
		this.title = title;
		this.author = author;
	}
	@Field(() => String)
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field(() => String)
	@Column({
		type: "text",
	})
	title: string;

	@Field(() => Author)
	@ManyToOne(() => Author, (author) => author.id)
	@JoinColumn({ name: "author" })
	author: Author;
}
