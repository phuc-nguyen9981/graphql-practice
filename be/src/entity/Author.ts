import { Field, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
	@Field(() => String)
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field(() => String)
	@Column({
		type: "text",
	})
	name: string;

	@Field(() => String)
	@Column({
		type: "text",
	})
	birth: string;

	@Field(() => String)
	@Column({
		type: "text",
		enum: ["male", "female"],
	})
	gender: string;

	@Field(() => Date)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => Date)
	@UpdateDateColumn()
	updatedAt: Date;

	@Field(() => [Book])
	@OneToMany(() => Book, (book) => book.author)
	books: Book[];
}
