import type { Constructable } from "./Constructable";
import type { CheckerFunction } from "./CheckerFunction";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkProperty(value: any, key: string, type?: string | Constructable | CheckerFunction, errorValueName = "value", customCheck = false): string {
    if (!(key in value)) return `${errorValueName} is missing property ${key}`;

    if (typeof type == "function" && customCheck) {
        const checkResult: string = (type as CheckerFunction)(value, key, errorValueName);

        if (checkResult) return checkResult;
    }

    if (type && (typeof type == "string" ? typeof value[key] != type : !(value[key] instanceof (type as Constructable)))) {
        return `Property ${key} in ${errorValueName} is not of type ${typeof type == "string" ? type : type.name}`;
    }
    
    return "";
}