import { AuthChecker } from "type-graphql";
import { ExpressContext } from "apollo-server-express";
import JwtService from "services/jwt";

export const authGuard: AuthChecker<ExpressContext> = async (
	{ context },
	roles
) => {
	const auth = context?.req?.headers?.authorization || "";
	const token = auth.split(" ")[1];
	const decoded = await JwtService.verifyToken(token);
	if (decoded && roles.includes(decoded.role)) {
		return true;
	}

	return false;
};
