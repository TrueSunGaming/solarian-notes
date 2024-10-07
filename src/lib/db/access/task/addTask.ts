import type { InsertOneResult } from "mongodb";
import type { Task } from "$lib/data/Task";
import { tasks } from "../../collections/tasks";
import { addDocument } from "../addDocument";

export function addTask(task: Task): Promise<InsertOneResult<Task>> {
    return addDocument(tasks, task);
}