import { Field, InputType } from "type-graphql";

@InputType()
export class UserRegisterInput {
	@Field(() => String)
	username: string;

	@Field(() => String)
	password: string;

	@Field(() => String, { nullable: true })
	role?: string;
}
