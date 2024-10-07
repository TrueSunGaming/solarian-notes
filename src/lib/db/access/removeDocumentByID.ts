import { type Collection, type Document, ObjectId, type DeleteResult } from "mongodb";
import { removeDocumentByField } from "./removeDocumentByField";
import type { ObjectIdCompatible } from "../ObjectIdCompatible";

export function removeDocumentByID<T extends Document>(collection: Collection<T>, id: ObjectIdCompatible): Promise<DeleteResult> {
    return removeDocumentByField(collection, "_id", new ObjectId(id));
}