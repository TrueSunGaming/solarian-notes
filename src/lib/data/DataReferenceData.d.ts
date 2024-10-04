import type { DataType } from "./DataType";
import type { ObjectIdCompatible } from "$lib/db/ObjectIdCompatible";

export interface DataReferenceData<T extends DataType = DataType> {
    id: ObjectIdCompatible;
    type: T;
}