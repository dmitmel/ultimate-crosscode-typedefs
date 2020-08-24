import * as semverM from './semver-ext';
import * as utilsM from './modloader-stdlib/utils';
import * as pathsM from './modloader-stdlib/paths';
import * as impactInitHooksM from './modloader-stdlib/impact-init-hooks';
import * as impactModuleHooksM from './modloader-stdlib/impact-module-hooks';
import * as patchListM from './modloader-stdlib/patch-list';
import * as resourcesM from './modloader-stdlib/resources';
import * as resourcesPlainM from './modloader-stdlib/resources/plain';

export {};

declare global {
  namespace ccmod {
    const implementor: string;
    const implementation: string;
    const require: NodeRequire | undefined;
    export import semver = semverM;
  }

  namespace ccmod.utils {
    export import MaybePromise = utilsM.MaybePromise;
    export import PlatformType = utilsM.PlatformType;
    export import PLATFORM_TYPE = utilsM.PLATFORM_TYPE;
    export import showDevTools = utilsM.showDevTools;
    export import showBackgroundPageDevTools = utilsM.showBackgroundPageDevTools;
    export import wait = utilsM.wait;
    export import compare = utilsM.compare;
    export import PromiseResult = utilsM.PromiseResult;
    export import wrapPromiseResult = utilsM.wrapPromiseResult;
    export import hasKey = utilsM.hasKey;
    export import mapGetOrInsert = utilsM.mapGetOrInsert;
  }

  namespace ccmod.paths {
    export import resolve = pathsM.resolve;
    export import normalize = pathsM.normalize;
    export import jailRelative = pathsM.jailRelative;
    export import isAbsolute = pathsM.isAbsolute;
    export import stripRoot = pathsM.stripRoot;
    export import join = pathsM.join;
    export import relative = pathsM.relative;
    export import dirname = pathsM.dirname;
    export import basename = pathsM.basename;
    export import extname = pathsM.extname;
  }

  namespace ccmod.patchList {
    export import PatchList = patchListM.PatchList;
    export import ResourceGenerator = patchListM.ResourceGenerator;
    export import ResourcePatcherSimple = patchListM.ResourcePatcherSimple;
    export import ResourcePatcherWithDeps = patchListM.ResourcePatcherWithDeps;
    export import ResourcePatchList = patchListM.ResourcePatchList;
  }

  namespace ccmod.impactInitHooks {
    export import ImpactInitHook = impactInitHooksM.ImpactInitHook;
    export import callbacks = impactInitHooksM.callbacks;
    export import add = impactInitHooksM.add;
  }

  namespace ccmod.impactModuleHooks {
    export import ImpactModuleHook = impactModuleHooksM.ImpactModuleHook;
    export import patchList = impactModuleHooksM.patchList;
    export import add = impactModuleHooksM.add;
  }

  namespace ccmod.resources {
    export import assetOverridesTable = resourcesM.assetOverridesTable;
    export import CommonPatcherContext = resourcesM.CommonPatcherContext;
    export import textGenerators = resourcesM.textGenerators;
    export import TextGeneratorContext = resourcesM.TextGeneratorContext;
    export import jsonPatches = resourcesM.jsonPatches;
    export import JSONPatcherContext = resourcesM.JSONPatcherContext;
    export import jsonGenerators = resourcesM.jsonGenerators;
    export import JSONGeneratorContext = resourcesM.JSONGeneratorContext;
    export import imagePatches = resourcesM.imagePatches;
    export import ImagePatcherContext = resourcesM.ImagePatcherContext;
    export import imageGenerators = resourcesM.imageGenerators;
    export import ImageGeneratorContext = resourcesM.ImageGeneratorContext;

    export import CommonLoadOptions = resourcesM.CommonLoadOptions;
    export import loadText = resourcesM.loadText;
    export import LoadTextOptions = resourcesM.LoadTextOptions;
    export import loadJSON = resourcesM.loadJSON;
    export import LoadJSONOptions = resourcesM.LoadJSONOptions;
    export import loadImage = resourcesM.loadImage;
    export import LoadImageOptions = resourcesM.LoadImageOptions;

    export import resolvePath = resourcesM.resolvePath;
    export import resolvePathToURL = resourcesM.resolvePathToURL;
    export import resolvePathAdvanced = resourcesM.resolvePathAdvanced;
    export import ResolvePathOptions = resourcesM.ResolvePathOptions;
    export import ResolvePathAdvancedResult = resourcesM.ResolvePathAdvancedResult;

    export import wrapPathIntoURL = resourcesM.wrapPathIntoURL;
    export import getGameAssetsURL = resourcesM.getGameAssetsURL;
    export import getCacheSuffix = resourcesM.getCacheSuffix;
  }

  namespace ccmod.resources.plain {
    export import loadText = resourcesPlainM.loadText;
    export import loadJSON = resourcesPlainM.loadJSON;
    export import loadImage = resourcesPlainM.loadImage;
    export import loadStylesheet = resourcesPlainM.loadStylesheet;
    export import loadScript = resourcesPlainM.loadScript;
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
