import { checkProperty } from "./checkProperty";
import { checkPropertyError } from "./checkPropertyError";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkProperties(value: any, checks: [string, Parameters<typeof checkProperty>[2], boolean?][], errorValueName = "value"): string {
    try {
        for (const [k, v, c] of checks) checkPropertyError(value, k, v, errorValueName, c ?? false);
    } catch(e) {
        return e as string;
    }

    return "";
}