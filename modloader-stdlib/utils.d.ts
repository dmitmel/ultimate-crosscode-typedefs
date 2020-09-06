export type MaybePromise<T> = T | Promise<T>;

export enum PlatformType {
  DESKTOP = 'DESKTOP',
  BROWSER = 'BROWSER',
}
export const PLATFORM_TYPE: PlatformType;

export function showDevTools(window?: nw.Window): Promise<void>;
export function showBackgroundPageDevTools(): Promise<void>;

export function wait(ms: number): Promise<void>;

export function compare<T>(a: T, b: T): number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromiseResult<T> = { type: 'resolved'; value: T } | { type: 'rejected'; reason: any };
export function wrapPromiseResult<T>(promise: Promise<T>): Promise<PromiseResult<T>>;

export function hasKey(obj: unknown, key: PropertyKey): boolean;

export function mapGetOrInsert<K, V>(map: Map<K, V>, key: K, defaultValue: V): V;
