import type { DataType } from "./DataType";
import type { Folder } from "./Folder";
import type { Task } from "./Task";
import type { User } from "./User";

export type DataTypeInstance<T extends DataType> = {
    Folder: Folder,
    Task: Task,
    User: User
}[T];