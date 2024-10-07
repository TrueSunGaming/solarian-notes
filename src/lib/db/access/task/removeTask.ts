import { type DeleteResult } from "mongodb";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { tasks } from "../../collections/tasks";
import { removeDocumentByID } from "../removeDocumentByID";

export function removeTask(id: ObjectIdCompatible): Promise<DeleteResult> {
    return removeDocumentByID(tasks, id);
}