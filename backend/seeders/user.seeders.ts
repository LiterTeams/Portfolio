import { hashSync } from "bcrypt";
import { PrismaClient, User } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

interface UserIF extends Pick<User, "id"|"nickname" | "email" | "password">{}

const userSeeder = async () => {
	console.log(`Creating Users...`);
    const password = hashSync("password",10);
    const data: UserIF[] = [
		{
			id: 1,
			nickname:"Root",
			email:"root@gmail.com",
			password: password,
		},
		{
			id: 2,
			nickname:"Admin",
			email:"admin.nsfw@gmail.com",
			password: password,
		},
		{
			id: 3,
			nickname:"moderator",
			email:"moderator@gmail.com",
			password: password,
		},
		{
			id: 4,
			nickname:"user",
			email:"user@gmail.com",
			password: password,
		},
    ];
    await prisma.user.createMany({data, skipDuplicates: true});
    console.log(`Created Users`);
}

export default userSeeder;