import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddImageToUser implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query("CREATE DATABASE SimpleGraphQL");
	}
	async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query("DROP DATABASE SimpleGraphQL");
	}
}
