import type { WithId } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../../collections/users";
import { getDocumentByField } from "../getDocumentByField";

export function getUserByEmail(email: string): Promise<WithId<User> | null> {
    return getDocumentByField(users, "email", email);
}