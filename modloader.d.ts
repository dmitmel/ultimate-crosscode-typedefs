// eslint-disable-next-line node/no-extraneous-import, @typescript-eslint/no-unused-vars
import * as semver from 'semver';
import * as modM from './modloader/mod';
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

    type ModID = modM.ModID;

    namespace modDataStorage {
      type FileData = modDataStorageFT.FileData;

      let data: Map<ModID, modDataStorageV1FT.ModEntry>;

      function readImmediately(): Promise<void>;
      function writeImmediately(): Promise<void>;
      function write(): Promise<void>;

      function isModEnabled(id: ModID): boolean;
      function setModEnabled(id: ModID, enabled: boolean): void;
    }

    type Mod = modM.Mod;
    namespace Mod {
      type MainClass = modM.MainClass;
      type LegacyMainClass = modM.LegacyMainClass;
    }

    type Manifest = manifestFT.Manifest;
    type LegacyManifest = manifestFT.LegacyManifest;
  }
}
