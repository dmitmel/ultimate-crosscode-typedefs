// eslint-disable-next-line node/no-extraneous-import, @typescript-eslint/no-unused-vars
import * as semver from 'semver';
import * as manifestFT from './file-types/mod-manifest';
import * as modDataStorageFT from './file-types/mod-data-storage';
import * as modDataStorageV1FT from './file-types/mod-data-storage/v1';

export {};

declare global {
  namespace modloader {
    const name: string;
    const version: semver.SemVer;
    const gameVersion: semver.SemVer;
    const gameVersionHotfix: number;
    const installedMods: ReadonlyMap<ModID, Mod>;
    const loadedMods: ReadonlyMap<ModID, Mod>;

    export import ModID = manifestFT.ModID;

    namespace modDataStorage {
      export import FileData = modDataStorageFT.FileData;

      let data: Map<ModID, modDataStorageV1FT.ModEntry>;

      function readImmediately(): Promise<void>;
      function writeImmediately(): Promise<void>;
      function write(): Promise<void>;

      function isModEnabled(id: ModID): boolean;
      function setModEnabled(id: ModID, enabled: boolean): void;
    }

    interface Mod {
      readonly baseDirectory: string;
      readonly manifest: Manifest;
      readonly version: semver.SemVer;
      readonly dependencies: ReadonlyMap<ModID, Mod.Dependency>;
      readonly assetsDirectory: string;
      readonly assets: ReadonlySet<string>;
      readonly legacyMode: boolean;
      readonly classInstance: Mod.Class | null;

      resolvePath(path: string): string;
    }

    namespace Mod {
      interface Dependency {
        version: semver.Range;
        optional: boolean;
      }

      type LoadingStage = 'preload' | 'postload' | 'prestart' | 'poststart';

      interface Class {
        preload?(mod: Mod): Promise<void> | void;
        postload?(mod: Mod): Promise<void> | void;
        prestart?(mod: Mod): Promise<void> | void;
        poststart?(mod: Mod): Promise<void> | void;
        /** @deprecated */
        main?(mod: Mod): Promise<void> | void;
      }
    }

    export import Manifest = manifestFT.Manifest;
    export import LegacyManifest = manifestFT.LegacyManifest;
  }
}
