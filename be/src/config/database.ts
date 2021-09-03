import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

const { DB_DATABASE, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
console.log({ DB_DATABASE, DB_HOST, DB_USERNAME, DB_PASSWORD });
const DB_CONFIG = {
	type: "postgres",
	host: DB_HOST,
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE,
	logging: true,
	synchronize: true,
	// dropSchema: true,
	entities: ["src/entity/*.ts"],
};

export default DB_CONFIG as ConnectionOptions;
