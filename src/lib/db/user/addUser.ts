import type { InsertOneResult } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../collections/users";

export function addUser(user: User): Promise<InsertOneResult<User>> {
    return users.insertOne(user);
}