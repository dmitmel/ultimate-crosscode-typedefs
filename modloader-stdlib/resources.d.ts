import { PatchList, ResourceGenerator, ResourcePatchList } from './patch-list';

export const assetOverridesTable: Map<string, string>;
export const textGenerators: PatchList<ResourceGenerator<unknown, TextGeneratorContext>>;
export const jsonPatches: ResourcePatchList<unknown, JSONPatcherContext>;
export const jsonGenerators: PatchList<ResourceGenerator<unknown, JSONGeneratorContext>>;
export const imagePatches: ResourcePatchList<HTMLCanvasElement, ImagePatcherContext>;
export const imageGenerators: PatchList<
  ResourceGenerator<HTMLImageElement | HTMLCanvasElement, ImageGeneratorContext>
>;

export interface CommonPatcherContext {
  resolvedPath: string;
  requestedAsset: string;
}

export interface TextGeneratorContext extends CommonPatcherContext {
  options: LoadTextOptions;
}

export interface JSONPatcherContext extends CommonPatcherContext {
  options: LoadJSONOptions;
}

export interface JSONGeneratorContext extends JSONPatcherContext {}

export interface ImagePatcherContext extends CommonPatcherContext {
  options: LoadImageOptions;
}

export interface ImageGeneratorContext extends ImagePatcherContext {}

interface CommonLoadOptions extends ResolvePathOptions {
  callerThisValue?: unknown;
  allowGenerators?: boolean | null;
}

export function loadText(url: string, options?: LoadTextOptions | null): Promise<string>;
export interface LoadTextOptions extends CommonLoadOptions {}

export function loadJSON<T = unknown>(path: string, options?: LoadJSONOptions | null): Promise<T>;
export interface LoadJSONOptions extends CommonLoadOptions {}

export function loadImage(
  path: string,
  options?: LoadImageOptions | null,
): Promise<HTMLImageElement | HTMLCanvasElement>;
export interface LoadImageOptions extends CommonLoadOptions {
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
