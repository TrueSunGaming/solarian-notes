import type { Collection, Document, InsertOneResult, OptionalUnlessRequiredId } from "mongodb";

export function addDocument<T extends Document>(collection: Collection<T>, value: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
    return collection.insertOne(value);
}