import { checkProperty } from "./checkProperty";

export function checkPropertyError(...args: Parameters<typeof checkProperty>): void {
    const check: string = checkProperty(...args);
    
    if (check) throw check;
}