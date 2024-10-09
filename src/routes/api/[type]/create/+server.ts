import { error, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ params, request }): Promise<Response> => {
    return error(501);
}