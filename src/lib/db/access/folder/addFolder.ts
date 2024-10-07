import type { InsertOneResult } from "mongodb";
import type { Folder } from "$lib/data/Folder";
import { folders } from "../../collections/folders";
import { addDocument } from "../addDocument";

export function addFolder(folder: Folder): Promise<InsertOneResult<Folder>> {
    return addDocument(folders, folder);
}