import { ObjectId, type WithId } from "mongodb";
import type { User } from "$lib/data/User";
import { users } from "../collections/users";
import type { ObjectIdCompatible } from "../ObjectIdCompatible";

export function getUserByID(id: ObjectIdCompatible): Promise<WithId<User> | null> {
    return users.findOne({ _id: new ObjectId(id) });
}