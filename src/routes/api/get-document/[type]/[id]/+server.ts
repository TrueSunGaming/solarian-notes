import { error, json, type RequestHandler } from "@sveltejs/kit";
import { DataType } from "$lib/data/DataType";
import { DataReferenceServer } from "$lib/data/DataReferenceServer";
import type { DataTypeInstance } from "$lib/data/DataTypeInstance";
import type { WithId } from "mongodb";


export const GET: RequestHandler = async ({ params }): Promise<Response> => {
    if (!params.id) return error(400);
    if (!params.type) return error(400);
    if (!Object.values(DataType as object).includes(params.type)) return error(400);

    const value: Promise<WithId<DataTypeInstance<DataType>> | null> = new DataReferenceServer(params.id, params.type as DataType).value;

    try {
        return json(await value);
    } catch(e) {
        return error(500, String(e));
    }
};