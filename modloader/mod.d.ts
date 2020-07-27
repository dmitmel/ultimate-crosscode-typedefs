import { Manifest } from '../file-types/mod-manifest';
import * as semver from '../semver-ext';

export type ModID = string;

export interface Mod {
  readonly baseDirectory: string;
  readonly manifest: Manifest;
  readonly version: semver.SemVer;
  readonly dependencies: ReadonlyMap<ModID, Dependency>;
  readonly assetsDirectory: string;
  readonly assets: ReadonlySet<string>;
  readonly legacyMode: boolean;
  readonly mainClassInstance: MainClass | null;

  resolvePath(path: string): string;
}

export interface Dependency {
  version: semver.Range;
  optional: boolean;
}

export type LoadingStage = 'preload' | 'postload' | 'prestart' | 'poststart';

export interface MainClass {
  preload?(mod: Mod): Promise<void> | void;
  postload?(mod: Mod): Promise<void> | void;
  prestart?(mod: Mod): Promise<void> | void;
  poststart?(mod: Mod): Promise<void> | void;
}

export interface LegacyMainClass {
  preload?(): Promise<void> | void;
  postload?(): Promise<void> | void;
  prestart?(): Promise<void> | void;
  main?(): Promise<void> | void;
}
