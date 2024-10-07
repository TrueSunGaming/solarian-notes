import type { InsertOneResult } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../../collections/users";
import { addDocument } from "../addDocument";

export function addUser(user: User): Promise<InsertOneResult<User>> {
    return addDocument(users, user);
}