import { DataType } from "./DataType";
import type { DataTypeInstance } from "./DataTypeInstance";
import { getUserByID } from "$lib/db/access/user/getUserByID";
import type { WithId } from "mongodb";
import { DataReference } from "./DataReference";
import { getTaskByID } from "$lib/db/access/task/getTaskByID";

export class DataReferenceServer<T extends DataType> extends DataReference<T> {
    override get value(): Promise<WithId<DataTypeInstance<T>> | null> {
        switch (this.type) {
            case DataType.User:
                return getUserByID(this.id) as Promise<WithId<DataTypeInstance<T>> | null>;
            
            case DataType.Task:
                return getTaskByID(this.id) as Promise<WithId<DataTypeInstance<T>> | null>;
            
            default:  
                throw new Error("Invalid DataType in DataReferenceServer");
        }
    }
}