import { DataType } from "$lib/data/DataType";
import { addFolder } from "$lib/db/access/folder/addFolder";
import { addTask } from "$lib/db/access/task/addTask";
import { addUser } from "$lib/db/access/user/addUser";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { checkProperties } from "$lib/util/checkProperties";
import type { BaseTask } from "$lib/data/Task";
import { SubtaskCompletionRequirement } from "$lib/data/SubtaskCompletionRequirement";
import { isDataReferenceDetailed } from "$lib/data/checkers/isDataReference";
import { isTypedArray } from "$lib/data/checkers/isTypedArray";

export const POST: RequestHandler = async ({ params, request }): Promise<Response> => {
    if (!params.type) return error(400, "No type specified");
    if (!Object.values(DataType as object).includes(params.type)) return error(400, "Invalid type");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const req: any = await request.json();
    
    let checkResult: string;

    switch(params.type) {
        case DataType.User:
            checkResult = checkProperties(req, [
                ["email", "string"]
            ], "User");
            if (checkResult) return error(400, checkResult);

            return json(await addUser(req));
        
        case DataType.Task:
            checkResult = checkProperties(req, [
                ["title", "string"],
                ["description", "string"],
                ["subtasks", isTypedArray(isDataReferenceDetailed)],
                ["subtaskRequirement", "string"]
            ], "Task");
            if (checkResult) return error(400, checkResult);

            if ((req as BaseTask).subtaskRequirement == SubtaskCompletionRequirement.SomeComplete) {
                checkResult = checkProperties(req, [
                    ["minimumSubtasks", "number"],
                    ["requiredSubtasks", isTypedArray("string")]
                ], "Task");
                if (checkResult) return error(400, checkResult);
            }

            return json(await addTask(req));
        
        case DataType.Folder:
            checkResult = checkProperties(req, [
                ["contents", isTypedArray(isDataReferenceDetailed)]
            ], "Task");
            if (checkResult) return error(400, checkResult);

            return json(await addFolder(req));
        
        default:
            return error(501);
    }
}