import { AuthenticationError } from "apollo-server-express";
import { UserAccount } from "entity/User";
import { Resolver, Mutation, Arg } from "type-graphql";
import { UserRegisterInput } from "./UserInput";
import JwtService from "services/jwt";
import { ILoginResponse } from "scalar/auth";

@Resolver(UserAccount)
export class UserResolver {
	@Mutation(() => UserAccount)
	async register(
		@Arg("data", () => UserRegisterInput) data: UserRegisterInput
	): Promise<UserAccount> {
		const newUser = await UserAccount.create(data).save();
		return newUser;
	}

	@Mutation(() => ILoginResponse)
	async login(
		@Arg("data", () => UserRegisterInput) data: UserRegisterInput
	): Promise<ILoginResponse> {
		console.log(data, "data");
		const user = await UserAccount.findOne({
			where: { username: data.username, password: data.password },
		});
		if (!user) {
			throw new AuthenticationError("Invalid username or password");
		}
		const token = await JwtService.createToken({
			username: user.username,
			role: user.role,
		});

		return { token };
	}
}
