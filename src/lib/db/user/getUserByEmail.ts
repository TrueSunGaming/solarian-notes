import type { WithId } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../collections/users";

export function getUserByEmail(email: string): Promise<WithId<User> | null> {
    return users.findOne({ email });
}