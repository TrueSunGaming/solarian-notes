import { DataType } from "./DataType";
import type { DataTypeInstance } from "./DataTypeInstance";
import { getUserByID } from "$lib/db/access/user/getUserByID";
import type { WithId } from "mongodb";
import { DataReference } from "./DataReference";

export class DataReferenceServer<T extends DataType> extends DataReference<T> {
    override get value(): Promise<WithId<DataTypeInstance<T>> | null> {
        switch (this.type) {
            case DataType.User:
                return getUserByID(this.id) as Promise<WithId<DataTypeInstance<T>> | null>;
            
            default:  
                throw new Error("Invalid DataType in DataReferenceServer");
        }
    }
}