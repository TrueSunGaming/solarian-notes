import type { WithId } from "mongodb";
import type { Task } from "$lib/data/Task";
import { tasks } from "../../collections/tasks";
import type { ObjectIdCompatible } from "../../ObjectIdCompatible";
import { getDocumentByID } from "../getDocumentByID";

export function getTaskByID(id: ObjectIdCompatible): Promise<WithId<Task> | null> {
    return getDocumentByID(tasks, id);
}