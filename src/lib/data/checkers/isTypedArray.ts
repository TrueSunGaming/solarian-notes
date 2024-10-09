import type { CheckerFunction } from "$lib/util/CheckerFunction";
import { checkProperties } from "$lib/util/checkProperties";
import { checkProperty } from "$lib/util/checkProperty";

function isTypedArrayBase(check: Parameters<typeof checkProperty>[2] | Parameters<typeof checkProperties>[1], customCheck = false): CheckerFunction {
    if (typeof check == "string") return (value, key, errorValueName) => {
        for (const i of value) {
            if (typeof i != check) return `${errorValueName}.${key} element is not of type ${check}`;
        }

        return "";
    }

    if (check instanceof Array) return (value, key, errorValueName) => {
        for (const i of value) {
            const checkResult: string = checkProperties(i, check, `${errorValueName}.${key} element`);
            if (checkResult) return checkResult;
        }

        return "";
    }

    if (typeof check != "function") return () => "";

    if (customCheck) return (value, key, errorValueName) => {
        for (const i of value) {
            const checkResult: string = (check as CheckerFunction)(i, key, `${errorValueName}.${key} element`);
            if (checkResult) return checkResult;
        }

        return "";
    }

    return (value, key, errorValueName) => {
        for (const i of value) {
            if (!(i instanceof check)) return `${errorValueName}.${key} element is not of type ${check.name}`;
        }

        return "";
    };
}

export function isTypedArray(check: Parameters<typeof checkProperty>[2] | Parameters<typeof checkProperties>[1], customCheck = false): CheckerFunction {
    return (value, key, errorValueName) => {
        const checkResult: string = checkProperty(value, key, Array, errorValueName);
        return checkResult ? checkResult : isTypedArrayBase(check, customCheck)(value, key, errorValueName);
    }
}