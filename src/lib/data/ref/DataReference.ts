import type { DataType } from "../DataType";
import type { ObjectIdCompatible } from "$lib/db/ObjectIdCompatible";
import type { WithId } from "mongodb";
import type { DataTypeInstance } from "../DataTypeInstance";
import type { DataReferenceData } from "./DataReferenceData";
import type { MaybePromise } from "$lib/util/MaybePromise";

export abstract class DataReference<T extends DataType> implements DataReferenceData<T> {
    id: ObjectIdCompatible;
    type: T;

    constructor(id: ObjectIdCompatible, type: T) {
        this.id = id;
        this.type = type;
    }

    abstract get value(): MaybePromise<WithId<DataTypeInstance<T>> | null>;
}