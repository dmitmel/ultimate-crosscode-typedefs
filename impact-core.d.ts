export { };

declare global {
  interface Vec2 {
    x: number;
    y: number;
  }

  namespace Vec2 {
    function create(v?: Vec2): Vec2;
    function createC(x?: number | null, y?: number | null): Vec2;
    function assign(a: Vec2, b: Vec2): Vec2;
    function assignC(v: Vec2, x?: number, y?: number): Vec2;
    function add(a: Vec2, b: Vec2, out?: Vec2): Vec2;
    function addMulF(a: Vec2, b: Vec2, mul: number, out?: Vec2): Vec2;
    function addC(a: Vec2, x: number, y?: number, out?: Vec2): Vec2;
    function sub(a: Vec2, b: Vec2, out?: Vec2): Vec2;
    function subC(a: Vec2, x: number, y?: number, out?: Vec2): Vec2;
    function mul(a: Vec2, b: Vec2, out?: Vec2): Vec2;
    function mulC(a: Vec2, x: number, y?: number, out?: Vec2): Vec2;
    function div(a: Vec2, b: Vec2, out?: Vec2): Vec2;
    function divC(a: Vec2, x: number, y?: number, out?: Vec2): Vec2;
    function isZero(v: Vec2): boolean;
    function angle(a: Vec2, b: Vec2): number;
    function equal(a: Vec2, b: Vec2): boolean;
  }

  interface Vec3 {
    x: number;
    y: number;
    z: number;
  }

  namespace Vec3 {
    function create(): Vec3;
    function createC(x?: number | null, y?: number | null, z?: number | null): Vec3;
  }

  interface KeySpline {
    get(t: number): number;
  }
  // note that `KeySpline` is not an impact class
  interface KeySplineConstructor {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    new(x1: number, y1: number, x2: number, y2: number): KeySpline;
  }
  var KeySpline: KeySplineConstructor;

  namespace KEY_SPLINES {
    var EASE_IN_OUT: KeySpline;
    var EASE_OUT: KeySpline;
    var EASE_IN: KeySpline;
    var EASE: KeySpline;
    var EASE_SOUND: KeySpline;
    var LINEAR: KeySpline;
    var JUMPY: KeySpline;
    var EASE_OUT_STRONG: KeySpline;
    var EASE_IN_STRONG: KeySpline;
  }

  namespace ig {
    var currentLang: string;

    namespace Resource {
      type LoadCallback = (type: string, path: string, success: boolean) => void;
    }
    interface Resource {
      cacheType: string;
      path: string;
      load(this: this, loadCallback?: ig.Resource.LoadCallback): void;
    }
    var resources: ig.Resource[];

    var ready: boolean;
    var loading: boolean;
    var baked: boolean;

    var nocache: number;
    var root: string;
    var lib: string;

    interface Module {
      name?: string;
      requires: string[];
      loaded: boolean;
      body: (() => void) | null;
    }
    var modules: Record<string, ig.Module>;
    var _current: ig.Module | null;
    var _waitForOnload: number;

    function $new<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    function $new(tagName: string): HTMLElement;

    function copy<T>(object: T): T;
    function merge<T, U>(original: T, extended: U, noArrayMerge?: boolean | null): T & U;

    function module(name: string): typeof ig;
    function requires(...names: string[]): typeof ig;
    function defines(body: () => void): void;

    function addResource(resource: ig.Resource): void;
    function getCacheSuffix(): string;

    function addGameAddon(callback: () => ig.GameAddon): void;
    function initGameAddons(): ig.GameAddon[];

    function _execModules(): void;
    function _loadScript(name: string, requirer?: string): void;

    interface Class {
      readonly classId: number;
    }
    interface ClassConstructor extends ImpactClass<Class> {
      new(): Class;
    }
    var Class: ClassConstructor;

    var langFileList: string[];

    function log(...args: unknown[]): void;
    function blog(arg: string): string;
    function debug(...args: unknown[]): void;
    function warn(...args: unknown[]): void;
    function info(...args: unknown[]): void;

    function error(...args: unknown[]): void;

    interface Config<T = unknown> extends ig.Class {
      _data: T;

      copy(this: this): this;
    }
    interface ConfigConstructor<T = unknown> extends ImpactClass<Config<T>> {
      new (data: T): Config<T>;
    }
    var Config: ConfigConstructor;

    enum PLATFORM_TYPES {
      UNKNOWN = 0,
      DESKTOP = 1,
      BROWSER = 2,
      MOBILE = 3,
      WIIU = 4,
    }

    var platform: ig.PLATFORM_TYPES;
  }

  namespace sc { }

  interface Number {
    map(min1: number, max1: number, min2: number, max2: number): number;
    limit(min: number, max: number): number;
    round(precision: number): number;
    floor(): number;
    ceil(): number;
    toInt(): number;
  }

  interface Array<T> {
    erase(item: T): this;
    last(): T;
    intersect(otherArray: T[]): boolean;
    random(): T;
  }

  interface String {
    toPath(prefix: string, suffix: string): string;
    toDir(prefix: string): string;
    toKey(prefix: string, suffix: string): string;
    toCamel(): string;
  }

  var IG_ROOT: string;
  var IG_GAME_CACHE: number;
  var IG_GAME_DEBUG: boolean;
  var IG_GAME_BETA: boolean;
  var IG_SOUND_VOLUME: number;
  var IG_MUSIC_VOLUME: number;
  var IG_WEB_AUDIO_BGM: boolean;
  var IG_FORCE_HTML5_AUDIO: boolean;
  var IG_KEEP_WINDOW_FOCUS: boolean;
  var IG_LANG: string;
  var IG_ENTITY_KILL_CALL: boolean;
  var IG_IGNORE_OPTIONS: boolean;
  var IG_SCREEN_MODE: number;
  var IG_USE_WEBAUDIO: boolean;
  var IG_GAME_SCALE: number;
  var IG_WIDTH: number;
  var IG_HEIGHT: number;
  var MENU_ON_GAME_START: string;
  var IG_LOAD_SLOT: string;
  var IG_GAME_FPS: number;
  var SC_SKIP_TITLE: boolean;
  var LOAD_LEVEL_ON_GAME_START: string | undefined | null;
  var MARKER_ON_GAME_START: string | undefined | null;
}
