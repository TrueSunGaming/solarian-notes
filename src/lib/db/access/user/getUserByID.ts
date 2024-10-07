import type { WithId } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../../collections/users";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { getDocumentByID } from "../getDocumentByID";

export function getUserByID(id: ObjectIdCompatible): Promise<WithId<User> | null> {
    return getDocumentByID(users, id);
}