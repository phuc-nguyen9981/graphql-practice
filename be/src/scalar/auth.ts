import { GraphQLScalarType } from "graphql";
import { Field, InterfaceType } from "type-graphql";

@InterfaceType()
export abstract class ILoginResponse {
	constructor(token: string) {
		this.token = token;
	}
	@Field(() => String)
	token: string;
}

export const LoginResponseScalar = new GraphQLScalarType({
	name: "LoginResponseScalar",
	description: "Response after login",
});
