import { type DeleteResult } from "mongodb";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { users } from "../../collections/users";
import { removeDocumentByID } from "../removeDocumentByID";

export function removeUser(id: ObjectIdCompatible): Promise<DeleteResult> {
    return removeDocumentByID(users, id);
}