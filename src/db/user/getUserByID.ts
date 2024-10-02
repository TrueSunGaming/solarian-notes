import { ObjectId, type WithId } from "mongodb";
import type { User } from "../schema/User";
import { users } from "../collections/users";
import type { ObjectIdCompatible } from "../ObjectIdCompatible";

export function getUserByEmail(id: ObjectIdCompatible): Promise<WithId<User> | null> {
    return users.findOne({ _id: new ObjectId(id) });
}