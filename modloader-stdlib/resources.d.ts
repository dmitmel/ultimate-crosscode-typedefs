import { ResourcePatchList } from './patch-list';

export const jsonPatches: ResourcePatchList<unknown, JSONPatcherContext>;
export const imagePatches: ResourcePatchList<HTMLCanvasElement, ImagePatcherContext>;
export const assetOverridesTable: Map<string, string>;

export interface JSONPatcherContext extends ResolvePathAdvancedResult {
  options: LoadJSONOptions;
}

export interface ImagePatcherContext extends ResolvePathAdvancedResult {
  options: LoadImageOptions;
}

export function loadText(url: string): Promise<string>;

export interface LoadJSONOptions extends ResolvePathOptions {
  callerThisValue?: unknown;
}
export function loadJSON<T = unknown>(path: string, options?: LoadJSONOptions | null): Promise<T>;

export function loadImage(
  path: string,
  options?: LoadImageOptions | null,
): Promise<HTMLImageElement | HTMLCanvasElement>;
export interface LoadImageOptions extends ResolvePathOptions {
  callerThisValue?: unknown;
  returnCanvas?: 'always' | 'if-patched' | 'never' | null;
}

export function resolvePath(uri: string, options?: ResolvePathOptions | null): string;
export function resolvePathToURL(path: string, options?: ResolvePathOptions | null): string;

export function resolvePathAdvanced(
  uri: string,
  options?: ResolvePathOptions | null,
): ResolvePathAdvancedResult;
export interface ResolvePathOptions {
  allowAssetOverrides?: boolean | null;
  allowPatching?: boolean | null;
}
export interface ResolvePathAdvancedResult {
  resolvedPath: string;
  requestedAsset: string | null;
}

export function wrapPathIntoURL(path: string): URL;
export function getGameAssetsURL(): URL;
export function getCacheSuffix(): string;
