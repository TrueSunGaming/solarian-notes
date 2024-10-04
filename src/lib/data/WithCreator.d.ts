import type { DataReferenceData } from "./DataReferenceData";
import type { DataType } from "./DataType";

export type WithCreator<T> = T & { creator: DataReferenceData<DataType.User> };