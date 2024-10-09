import type { DataReferenceData } from "../ref/DataReferenceData";
import { checkProperties } from "$lib/util/checkProperties";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDataReference(value: any): value is DataReferenceData {
    return !!checkProperties(value, [
        ["id", undefined],
        ["type", "string"]
    ]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDataReferenceDetailed(value: any, errorValueName = "value"): string {
    return checkProperties(value, [
        ["id", undefined],
        ["type", "string"]
    ], errorValueName);
}