// eslint-disable-next-line node/no-extraneous-import, @typescript-eslint/no-unused-vars
import * as semver from 'semver';

export {};

declare global {
  namespace modloader {
    const name: string;
    const version: semver.SemVer;
    const gameVersion: semver.SemVer;
    const gameVersionHotfix: number;
    const installedMods: ReadonlyMap<ModID, Mod>;
    const loadedMods: ReadonlyMap<ModID, Mod>;

    type ModID = string;

    namespace modDataStorage {
      type FileData = FileDataV1;

      interface FileDataV1 {
        version: 1;
        data: FileDataV1.Data;
      }

      namespace FileDataV1 {
        type Data = Record<ModID, ModEntry>;
        interface ModEntry {
          enabled: boolean;
        }
      }
    }

    interface modDataStorage {
      data: Map<ModID, modDataStorage.FileDataV1.ModEntry>;

      readImmediately(this: this): Promise<void>;
      writeImmediately(this: this): Promise<void>;
      write(this: this): Promise<void>;

      isModEnabled(this: this, id: ModID): boolean;
      setModEnabled(this: this, id: ModID, enabled: boolean): void;
    }
    const modDataStorage: modDataStorage;

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

    interface Manifest {
      id: ModID;
      version: Manifest.SemVer;

      title?: Manifest.LocalizedString;
      description?: Manifest.LocalizedString;
      license?: Manifest.SpdxExpression;
      homepage?: Manifest.LocalizedString;
      keywords?: Manifest.LocalizedString[];
      authors?: Manifest.Person[];

      dependencies?: Manifest.ModDependencies;

      assets?: Manifest.FilePath[];
      assetsDir?: Manifest.FilePath;

      main?: Manifest.FilePath;
      preload?: Manifest.FilePath;
      postload?: Manifest.FilePath;
      prestart?: Manifest.FilePath;
      poststart?: Manifest.FilePath;
    }

    interface ManifestLegacy {
      name: ModID;
      version?: Manifest.SemVer;

      ccmodHumanName?: string;
      description?: string;
      license?: Manifest.SpdxExpression;
      homepage?: string;

      ccmodDependencies?: ManifestLegacy.ModDependencies;
      dependencies?: ManifestLegacy.ModDependencies;

      assets?: Manifest.FilePath[];

      plugin?: Manifest.FilePath;
      preload?: Manifest.FilePath;
      postload?: Manifest.FilePath;
      prestart?: Manifest.FilePath;
      main?: Manifest.FilePath;
    }

    namespace Manifest {
      type SemVer = string;
      type SemVerConstraint = string;

      type LocalizedString = Record<Locale, string> | string;
      type Locale = string;

      type FilePath = string;

      type ModDependencies = Record<ModID, ModDependency>;
      type ModDependency = SemVerConstraint | ModDependencyDetails;
      interface ModDependencyDetails {
        version: SemVerConstraint;
        optional?: boolean;
      }

      type SpdxExpression = string;

      type Person = PersonDetails | string;
      interface PersonDetails {
        name: LocalizedString;
        email?: LocalizedString;
        url?: LocalizedString;
        comment?: LocalizedString;
      }
    }

    namespace ManifestLegacy {
      type ModDependencies = Record<ModID, Manifest.SemVerConstraint>;
    }
  }
}
