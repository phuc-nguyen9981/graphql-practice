import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class UserAccount extends BaseEntity {
	@Field(() => String)
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field(() => String)
	@Column({ type: "text", nullable: false })
	username: string;

	@Field(() => String)
	@Column({ type: "text", nullable: false })
	password: string;

	@Field(() => String)
	@Column({
		type: "text",
		nullable: false,
		enum: ["writer", "admin"],
		default: "admin",
	})
	role: string;
}
