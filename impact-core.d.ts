declare interface Vec2 {
  x: number;
  y: number;
}

interface KeySpline {
  get(this: this, t: number): number;
}
interface KeySplineConstructor {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  new (x1: number, y1: number, x2: number, y2: number): KeySpline;
}
declare var KeySpline: KeySplineConstructor;

interface KEY_SPLINES {
  EASE_IN_OUT: KeySpline;
  EASE_OUT: KeySpline;
  EASE_IN: KeySpline;
  EASE: KeySpline;
  EASE_SOUND: KeySpline;
  LINEAR: KeySpline;
  JUMPY: KeySpline;
  EASE_OUT_STRONG: KeySpline;
  EASE_IN_STRONG: KeySpline;
}

declare namespace ig {
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

  interface Module {
    name?: string;
    requires: string[];
    loaded: boolean;
    body: (() => void) | null;
  }
  var modules: Record<string, ig.Module>;
  var _current: ig.Module | null;
  var _waitForOnload: number;

  function $new<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
  ): HTMLElementTagNameMap[K];
  function $new(tagName: string): HTMLElement;

  function copy<T>(object: T): T;
  function merge<T, U>(original: T, extended: U, noArrayMerge?: boolean): T & U;

  function module(this: typeof ig, name: string): typeof ig;
  function requires(this: typeof ig, ...names: string[]): typeof ig;
  function defines(this: typeof ig, body: () => void): void;

  function addResource(resource: ig.Resource): void;

  function addGameAddon<T extends ig.GameAddon>(callback: () => T): void;

  function _execModules(this: typeof ig): void;

  interface Class {
    readonly classId: number;
  }
  interface ClassConstructor extends ImpactClass<Class> {
    new (): Class;
  }
  var Class: ClassConstructor;

  enum PLATFORM_TYPES {
    UNKNOWN,
    DESKTOP,
    BROWSER,
    MOBILE,
    WIIU,
  }

  var platform: ig.PLATFORM_TYPES;
}

declare namespace sc {}

declare interface Number {
  limit(min: number, max: number): number;
}

declare var IG_ROOT: string;
declare var IG_GAME_CACHE: string;
declare var IG_GAME_DEBUG: boolean;
declare var IG_GAME_BETA: boolean;
declare var IG_SOUND_VOLUME: number;
declare var IG_MUSIC_VOLUME: number;
declare var IG_WEB_AUDIO_BGM: boolean;
declare var IG_FORCE_HTML5_AUDIO: boolean;
declare var IG_KEEP_WINDOW_FOCUS: boolean;
declare var IG_LANG: string;
declare var IG_ENTITY_KILL_CALL: boolean;
declare var IG_IGNORE_OPTIONS: boolean;
declare var IG_SCREEN_MODE: number;
declare var IG_USE_WEBAUDIO: boolean;
declare var IG_GAME_SCALE: number;
declare var IG_WIDTH: number;
declare var IG_HEIGHT: number;
declare var MENU_ON_GAME_START: string;
declare var IG_LOAD_SLOT: string;
declare var IG_GAME_FPS: number;
