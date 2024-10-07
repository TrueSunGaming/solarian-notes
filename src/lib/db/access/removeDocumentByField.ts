import type { Collection, DeleteResult, Document, Filter } from "mongodb";

export function removeDocumentByField<T extends Document, V>(collection: Collection<T>, field: string, value: V): Promise<DeleteResult> {
    const filter: { [key: string]: V } = {};
    filter[field] = value;

    return collection.deleteOne(filter as Filter<T>);
}