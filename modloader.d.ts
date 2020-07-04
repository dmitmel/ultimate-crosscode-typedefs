// eslint-disable-next-line node/no-extraneous-import, @typescript-eslint/no-unused-vars
import * as semver from 'semver';

declare module 'semver' {
  interface SemVer {
    toString(this: this): string;
  }

  interface Comparator {
    toString(this: this): string;
  }

  interface Range {
    toString(this: this): string;
  }
}

declare global {
  namespace modloader {
    const name: string;
    const version: semver.SemVer;
    const gameVersion: semver.SemVer;
    const gameVersionHotfix: number;
    const installedMods: ReadonlyMap<ModID, Mod>;
    const loadedMods: ReadonlyMap<ModID, Mod>;

    type ModID = string;

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
