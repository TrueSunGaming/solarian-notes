import type { WithId } from "mongodb";
import type { Folder } from "$lib/data/Folder";
import { folders } from "../../collections/folders";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { getDocumentByID } from "../getDocumentByID";

export function getFolderByID(id: ObjectIdCompatible): Promise<WithId<Folder> | null> {
    return getDocumentByID(folders, id);
}