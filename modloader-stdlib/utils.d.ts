export type MaybePromise<T> = T | Promise<T>;
export enum PlatformType {
  DESKTOP = 'DESKTOP',
  BROWSER = 'BROWSER',
}
export const PLATFORM_TYPE: PlatformType;
export function showDevTools(): Promise<void>;
export function wait(ms: number): Promise<void>;
export function compare<T>(a: T, b: T): number;
/* eslint-disable @typescript-eslint/no-explicit-any */
export function errorHasMessage(error: any): error is { message: string };
export function errorHasCode(error: any): error is { code: string };
export type PromiseResult<T> = { type: 'resolved'; value: T } | { type: 'rejected'; reason: any };
/* eslint-enable @typescript-eslint/no-explicit-any */
export function wrapPromiseResult<T>(promise: Promise<T>): Promise<PromiseResult<T>>;
export function hasKey(obj: unknown, key: PropertyKey): boolean;
export function mapGetOrInsert<K, V>(map: Map<K, V>, key: K, defaultValue: V): V;
