/* eslint-disable @typescript-eslint/no-unused-vars */

// eslint-disable-next-line node/no-extraneous-import
import * as semver_ from 'semver';

declare global {
  namespace ccmod {
    var require: NodeRequire | undefined;
    export import semver = semver_;
  }

  namespace ccmod.paths {
    function resolve(...args: string[]): string;
    function normalize(path: string): string;
    function jailRelative(path: string): string;
    function isAbsolute(path: string): boolean;
    function stripRoot(path: string): string;
    function join(...args: string[]): string;
    function relative(from: string, to: string): string;
    function dirname(path: string): string;
    function basename(path: string, ext?: string): string;
    function extname(path: string): string;
  }

  namespace ccmod.patchList {
    class PatchList<P> {
      patternPatchers: Array<[RegExp, P]>;
      specificPatchers: Map<string, P[]>;

      forPath(path: string): P[];
      add(path: string | RegExp, patcher: P): void;
    }

    type ResourcePatcherSimple<Data, Deps, Ctx> = (
      data: Data,
      dependencies: Deps,
      context: Ctx,
    ) => PromiseLike<Data | void> | Data | void;
    // ) => MaybePromise<Data | void>;

    interface ResourcePatcherWithDeps<Data, Deps, Ctx> {
      dependencies?: ((context: Ctx) => PromiseLike<Deps>) | null;
      patcher: ResourcePatcherSimple<Data, Deps, Ctx>;
    }

    class ResourcePatchList<Data, Ctx> extends PatchList<
      ResourcePatcherWithDeps<Data, unknown, Ctx>
    > {
      add<Data2 extends Data = Data, Deps = never>(
        path: string | RegExp,
        patcher:
          | ResourcePatcherSimple<Data2, Deps, Ctx>
          | ResourcePatcherWithDeps<Data2, Deps, Ctx>,
      ): void;
    }
  }

  namespace ccmod.impactInitHooks {
    type ImpactInitHook = () => void;
    const callbacks: ImpactInitHook[];
    function add(callback: ImpactInitHook): void;
  }

  namespace ccmod.impactModuleHooks {
    type ImpactModuleHook = (moduleName: string) => void;
    const patchList: patchList.PatchList<ImpactModuleHook>;
    function add(moduleName: string | RegExp, callback: ImpactModuleHook): void;
  }

  namespace ccmod.resources {
    const jsonPatches: patchList.ResourcePatchList<unknown, JSONPatcherContext>;
    interface JSONPatcherContext extends ResolvePathAdvancedResult {
      options: LoadJSONOptions;
    }

    const imagePatches: patchList.ResourcePatchList<HTMLCanvasElement, ImagePatcherContext>;
    interface ImagePatcherContext extends ResolvePathAdvancedResult {
      options: LoadImageOptions;
    }

    const assetOverridesTable: Map<string, string>;

    function loadText(url: string): Promise<string>;

    interface LoadJSONOptions extends ResolvePathOptions {
      callerThisValue?: unknown;
    }
    function loadJSON<T = unknown>(path: string, options?: LoadJSONOptions | null): Promise<T>;

    interface LoadImageOptions extends ResolvePathOptions {
      callerThisValue?: unknown;
      returnCanvas?: 'always' | 'if-patched' | 'never' | null;
    }
    function loadImage(
      path: string,
      options?: LoadImageOptions | null,
    ): Promise<HTMLImageElement | HTMLCanvasElement>;

    function resolvePath(uri: string, options?: ResolvePathOptions | null): string;
    function resolvePathToURL(path: string, options?: ResolvePathOptions | null): string;

    interface ResolvePathOptions {
      allowAssetOverrides?: boolean | null;
    }
    interface ResolvePathAdvancedResult {
      resolvedPath: string;
      requestedAsset: string | null;
    }
    function resolvePathAdvanced(
      uri: string,
      options?: ResolvePathOptions | null,
    ): ResolvePathAdvancedResult;

    function wrapPathIntoURL(path: string): URL;
    function getGameAssetsURL(): URL;
    function getCacheSuffix(): string;
  }

  namespace ccmod.resources.plain {
    function loadText(url: string): Promise<string>;
    function loadJSON<T = unknown>(url: string): Promise<T>;
    function loadImage(url: string): Promise<HTMLImageElement>;
    function loadStylesheet(url: string, options?: { type?: string | null } | null): Promise<void>;
    function loadScript(
      url: string,
      options?: { type?: string | null; async?: boolean | null } | null,
    ): Promise<void>;
  }

  namespace ig {
    namespace MultiFont {
      interface MappingSimple {
        [iconName: string]: number;
      }
    }
    interface MultiFont {
      pushIconSet(this: this, font: ig.Font, mapping?: MultiFont.MappingSimple | null): void;
      setIconSet(
        this: this,
        iconSet: ig.Font,
        index: number,
        mapping?: MultiFont.MappingSimple | null,
      ): void;
    }
  }

  namespace sc.OptionDefinition {
    interface CHECKBOX {
      checkboxRightAlign?: boolean;
    }

    interface INFO {
      marginBottom?: number;
    }
  }
}
