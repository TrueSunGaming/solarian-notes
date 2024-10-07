import { type DeleteResult } from "mongodb";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { folders } from "../../collections/folders";
import { removeDocumentByID } from "../removeDocumentByID";

export function removeFolder(id: ObjectIdCompatible): Promise<DeleteResult> {
    return removeDocumentByID(folders, id);
}