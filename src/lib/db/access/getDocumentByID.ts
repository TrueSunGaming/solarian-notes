import { type Collection, type Document, ObjectId, type WithId } from "mongodb";
import { getDocumentByField } from "./getDocumentByField";
import type { ObjectIdCompatible } from "../ObjectIdCompatible";

export function getDocumentByID<T extends Document>(collection: Collection<T>, id: ObjectIdCompatible): Promise<WithId<T> | null> {
    return getDocumentByField(collection, "_id", new ObjectId(id));
}