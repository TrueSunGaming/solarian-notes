import { type DeleteResult, ObjectId } from "mongodb";
import type { ObjectIdCompatible } from "../ObjectIdCompatible";
import { users } from "../collections/users";

export function removeUser(id: ObjectIdCompatible): Promise<DeleteResult> {
    return users.deleteOne({ _id: new ObjectId(id) });
}