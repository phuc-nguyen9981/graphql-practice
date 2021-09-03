import express from "express";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import { buildSchema } from "type-graphql";
import { BookResolver } from "resolver/book/BookResolver";
import { createConnection } from "typeorm";
import { AuthorResolver } from "resolver/author/AuthorResolver";
import { HelloResolver } from "resolver/HelloResolver";
import DB_CONFIG from "config/database";
import { UserResolver } from "resolver/user/UserResolver";
import { authGuard } from "middleware/auth_guard";
import { ILoginResponse, LoginResponseScalar } from "scalar/auth";

async function startApolloServer() {
	await createConnection(DB_CONFIG);

	// Same ApolloServer initialization as before
	const schema = await buildSchema({
		resolvers: [HelloResolver, UserResolver, AuthorResolver, BookResolver],
		scalarsMap: [{ type: ILoginResponse, scalar: LoginResponseScalar }],
		authChecker: authGuard,
	});
	const server = new ApolloServer({
		schema,
		context: ({ req, res }) => ({ req, res }),
	});

	// Required logic for integrating with Express
	await server.start();
	const app = express();
	server.applyMiddleware({
		app,
		path: "/",
	});

	// Modified server startup
	app.use(express.urlencoded());
	app.use(bodyParser());
	app.listen(4000, () => {
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		);
	});
}

startApolloServer();
