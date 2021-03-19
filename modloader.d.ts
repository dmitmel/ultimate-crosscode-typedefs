import * as semver from './semver-ext';
import * as modM from './modloader/mod';
import * as modDataStorageM from './modloader/mod-data-storage';
import * as manifestFT from './file-types/mod-manifest';

export {};

declare global {
  namespace modloader {
    const name: string;
    const version: semver.SemVer;
    const gameVersion: semver.SemVer;
    const gameVersionHotfix: number;
    const installedMods: ReadonlyMap<ModID, Mod>;
    const loadedMods: ReadonlyMap<ModID, Mod>;

    export import ModID = modM.ModID;

    namespace modDataStorage {
      export import FileData = modDataStorageM.FileData;

      export import filePath = modDataStorageM.filePath;
      export import data = modDataStorageM.data;

      export import readImmediately = modDataStorageM.readImmediately;
      export import writeImmediately = modDataStorageM.writeImmediately;
      export import write = modDataStorageM.write;

      export import isModEnabled = modDataStorageM.isModEnabled;
      export import setModEnabled = modDataStorageM.setModEnabled;
    }

    export import Mod = modM.Mod;
    namespace Mod {
      export import Dependency = modM.Dependency;
      export import LoadingStage = modM.LoadingStage;
      export import PluginClass = modM.PluginClass;
      export import LegacyPluginClass = modM.LegacyPluginClass;
    }

    export import Manifest = manifestFT.Manifest;
    export import LegacyManifest = manifestFT.LegacyManifest;
  }
}
