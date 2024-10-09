// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Constructable<T = any, A extends any[] = any[]> {
    new (...args: A[]): T;
}