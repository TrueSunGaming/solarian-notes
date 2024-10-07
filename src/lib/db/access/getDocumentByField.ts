import type { Collection, Document, Filter, WithId } from "mongodb";

export function getDocumentByField<T extends Document, V>(collection: Collection<T>, field: string, value: V): Promise<WithId<T> | null> {
    const filter: { [key: string]: V } = {};
    filter[field] = value;

    return collection.findOne(filter as Filter<T>);
}