import type { DataType } from "./DataType";
import { DataReference } from "./DataReference";
import type { WithId } from "mongodb";
import type { DataTypeInstance } from "./DataTypeInstance";

export class DataReferenceClient<T extends DataType> extends DataReference<T> {
    override get value(): Promise<WithId<DataTypeInstance<T>> | null> {
        return fetch(`/api/get-document/${this.type}/${this.id}`).catch(() => null).then((r) => r?.json().catch(() => null));
    }
}