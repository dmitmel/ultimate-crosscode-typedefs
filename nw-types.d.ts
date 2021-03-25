/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/unified-signatures */

/// <reference types="node" />

import { EventEmitter } from 'events';

// eslint-disable-next-line node/no-unsupported-features/es-builtins
type DOMWindow_ = globalThis.Window;

export namespace App {
  export interface Manifest {
    name: string;
    main: string;
    product_string?: string;
    nodejs?: boolean;
    'node-main'?: string;
    domain?: string;
    /** @deprecated */
    'single-instance'?: boolean;
    'bg-script'?: string;
    window?: Window.Manifest;
    webkit?: Manifest.WebKit;
    'user-agent'?: string;
    'node-remote'?: string | string[];
    'chromium-args'?: string;
    crash_report_url?: string;
    'js-flags'?: string;
    inject_js_start?: string;
    inject_js_end?: string;
    additional_trust_anchors?: string[];
    dom_storage_quota?: number;
    /** @deprecated */
    'no-edit-menu'?: boolean;
  }

  export namespace Manifest {
    export interface WebKit {
      double_tap_to_zoom_enabled?: boolean;
      plugin?: boolean;
    }
  }

  export const argv: readonly string[];
  export const fullArgv: readonly string[];
  export const filteredArgv: readonly string[];
  export const startPath: string;
  export const dataPath: string;
  // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chrome/index.d.ts#L5732-L5910
  export const manifest: Manifest;

  export function clearCache(): void;
  export function clearAppCache(manifest_url: string): void;
  export function closeAllWindows(): void;
  export function crashBrowser(): void;
  export function crashRenderer(): void;
  export function getProxyForURL(url: string): string;
  export function setProxyConfig(config: string, pac_url?: string): void;
  export function quit(): void;
  /** @deprecated */
  export function setCrashDumpDir(dir: string): void;
  export function addOriginAccessWhitelistEntry(
    sourceOrigin: string,
    destinationProtocol: string,
    destinationHost: string,
    allowDestinationSubdomains: boolean,
  ): void;
  export function removeOriginAccessWhitelistEntry(
    sourceOrigin: string,
    destinationProtocol: string,
    destinationHost: string,
    allowDestinationSubdomains: boolean,
  ): void;
  export function registerGlobalHotKey(shortcut: Shortcut): void;
  export function unregisterGlobalHotKey(shortcut: Shortcut): void;

  export function on(event: 'open', listener: (cmdline: string) => void): void;
  export function on(event: 'reopen', listener: () => void): void;
  export function on(event: string, listener: (...args: any[]) => void): void;

  export function once(event: 'open', listener: (this: typeof App, cmdline: string) => void): void;
  export function once(event: 'reopen', listener: (this: typeof App) => void): void;
  export function once(event: string, listener: (this: typeof App, ...args: any[]) => void): void;

  export function removeListener(event: string, listener: (...args: any[]) => void): void;
  export function removeAllListeners(event: string): void;
}

export namespace Clipboard {
  export type DataType = 'text' | 'png' | 'jpeg' | 'html' | 'rtf';
  export interface SetData {
    data: string;
    type: Clipboard.DataType;
    raw?: boolean;
  }
  export interface GetData {
    type: Clipboard.DataType;
    raw?: boolean;
  }
}

export class Clipboard {
  static get(): Clipboard;

  private constructor();

  set(data: string, type?: Clipboard.DataType, raw?: boolean): void;
  set(clipboardData: Clipboard.SetData): void;
  set(clipboardDataList: Clipboard.SetData[]): void;
  get(type?: Clipboard.DataType, raw?: boolean): string;
  get(clipboardData: Clipboard.GetData): string;
  get(clipboardDataList: Clipboard.GetData[]): Clipboard.SetData[];
  readAvailableTypes(): string[];
  clear(): void;
}

export namespace Tray {
  export interface Options {
    title?: string;
    /** @deprecated */
    tooltip?: string;
    icon?: string;
    alticon?: string;
    iconsAreTemplates?: boolean;
    menu?: Menu;
  }
}

export class Tray {
  constructor(option: Tray.Options);

  title: string;
  tooltip: string;
  icon: string;
  alticon: string;
  iconsAreTemplates: boolean;
  menu: Menu | null | undefined;
  remove(): void;

  on(event: 'click', listener: (this: this) => void): this;

  once(event: 'click', listener: (this: this) => void): this;
}

export namespace Menu {
  export interface Options {
    type?: 'menubar' | 'contextmenu';
  }

  export interface CreateMacBuiltinOptions {
    hideEdit?: boolean;
    hideWindow?: boolean;
  }
}

export class Menu {
  constructor(option?: Menu.Options);

  readonly items: readonly MenuItem[];

  append(item: MenuItem): void;
  insert(item: MenuItem, i: number): void;
  remove(item: MenuItem): void;
  removeAt(i: number): void;
  popup(x: number, y: number): void;
  createMacBuiltin(appname: string, options?: Menu.CreateMacBuiltinOptions): void;
}

export namespace MenuItem {
  export interface Options {
    label?: string;
    icon?: string;
    tooltip?: string;
    type?: 'normal' | 'checkbox' | 'separator';
    click?: () => void;
    enabled?: boolean;
    checked?: boolean;
    submenu?: Menu | null;
    key?: string;
    modifiers?: string;
  }
}

export class MenuItem extends EventEmitter {
  constructor(option: MenuItem.Options);

  readonly type: 'separator' | 'checkbox' | 'normal';
  label?: string;
  icon?: string;
  iconIsTemplate?: boolean;
  tooltip?: string;
  checked?: boolean;
  enabled?: boolean;
  submenu?: Menu | null;
  click?: () => void;
  key?: string;
  modifiers?: string;

  on(event: 'click', listener: (this: this) => void): this;

  once(event: 'click', listener: (this: this) => void): this;
}

export namespace Screen {
  export interface DisplayGeometry {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  export interface Display {
    id: number;
    bounds: DisplayGeometry;
    work_area: DisplayGeometry;
    scaleFactor: number;
    isBuiltIn: boolean;
    rotation: number;
    touchSupport: number;
  }

  export type StreamSource = 'screen' | 'window';
  export type StreamType = StreamSource | 'other' | 'unknown';

  export interface DesktopCaptureMonitor extends EventEmitter {
    readonly started: boolean;

    start(should_include_screens: boolean, should_include_windows: boolean): void;
    stop(): void;
    registerStream(id: string): string;

    on(
      event: 'added',
      listener: (
        this: this,
        id: string,
        name: string,
        order: number,
        type: StreamType,
        primary?: boolean,
      ) => void,
    ): this;
    on(event: 'removed', listener: (this: this, order: number) => void): this;
    on(
      event: 'orderchanged',
      listener: (this: this, id: string, new_order: number, old_order: number) => void,
    ): this;
    on(event: 'namechanged', listener: (this: this, id: string, name: string) => void): this;
    on(
      event: 'thumbnailchanged',
      listener: (this: this, id: string, thumbnail: string) => void,
    ): this;

    once(
      event: 'added',
      listener: (
        this: this,
        id: string,
        name: string,
        order: number,
        type: StreamType,
        primary?: boolean,
      ) => void,
    ): this;
    once(event: 'removed', listener: (this: this, order: number) => void): this;
    once(
      event: 'orderchanged',
      listener: (this: this, id: string, new_order: number, old_order: number) => void,
    ): this;
    once(event: 'namechanged', listener: (this: this, id: string, name: string) => void): this;
    once(
      event: 'thumbnailchanged',
      listener: (this: this, id: string, thumbnail: string) => void,
    ): this;
  }
}

export namespace Shell {
  export function openExternal(uri: string): void;
  export function openItem(file_path: string): void;
  export function showItemInFolder(file_path: string): void;
}

export namespace Shortcut {
  export interface Options {
    key: string;
    active?: () => void;
    failed?: (err: Error) => void;
  }
}

export class Shortcut extends EventEmitter {
  constructor(option: MenuItem.Options);

  key: string;
  active?: () => void;
  failed?: (err: Error) => void;

  on(event: 'active', listener: (this: this) => void): this;
  on(event: 'failed', listener: (this: this, err: Error) => void): this;

  once(event: 'active', listener: (this: this) => void): this;
  once(event: 'failed', listener: (this: this, err: Error) => void): this;
}

export namespace Window {
  export interface Manifest {
    id?: string;
    title?: string;
    width?: number;
    height?: number;
    /** @deprecated */
    toolbar?: boolean;
    icon?: string;
    position?: null | 'center' | 'mouse';
    min_width?: number;
    min_height?: number;
    max_width?: number;
    max_height?: number;
    as_desktop?: boolean;
    resizable?: boolean;
    always_on_top?: boolean;
    visible_on_all_workspaces?: boolean;
    fullscreen?: boolean;
    show_in_taskbar?: boolean;
    frame?: boolean;
    show?: boolean;
    kiosk?: boolean;
    transparent?: boolean;
  }

  export interface OpenOptions extends Manifest {
    new_instance?: boolean;
    inject_js_start?: string;
    inject_js_end?: string;
    id?: string;
  }

  export namespace PrintOptions {
    export interface MarginsCustom {
      marginBottom: number;
      marginLeft: number;
      marginRight: number;
      marginTop: number;
    }
  }

  export interface PrintOptions {
    autoprint?: boolean;
    printer?: string;
    pdf_path?: string;
    headerFooterEnabled?: boolean;
    landscape?: boolean;
    mediaSize?: Record<string, unknown>;
    shouldPrintBackgrounds?: boolean;
    marginsType?: 0 | 1 | 2 | 3;
    marginsCustom?: PrintOptions.MarginsCustom;
    copies?: number;
    scaleFactor?: number;
    headerString?: string;
    footerString?: string;
  }

  export interface CaptureOptions {
    format?: 'png' | 'jpeg';
    datatype?: 'raw' | 'buffer' | 'datauri';
  }

  export interface NewWindowPolicy {
    ignore(): void;
    forceCurrent(): void;
    forceDownload(): void;
    forceNewWindow(): void;
    forceNewPopup(): void;
    setNewWindowManifest(m: Manifest): void;
  }

  export interface NavigationPolicy {
    ignore(): void;
  }
}

export class Window {
  static get(window_object?: DOMWindow_): Window;
  static open(url: string, option?: Window.OpenOptions, callback?: (new_win: Window) => void): void;

  private constructor();

  readonly window: DOMWindow_;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  menu: Menu | null | undefined;
  readonly isAlwaysOnTop: boolean;
  readonly isFullscreen: boolean;
  readonly isTransparent: boolean;
  readonly isKioskMode: boolean;
  zoomLevel: number;
  // cookies: typeof chrome.cookies; // TODO: somehow integrate this?

  moveTo(x: number, y: number): void;
  moveBy(x: number, y: number): void;
  resizeTo(width: number, height: number): void;
  resizeBy(width: number, height: number): void;
  focus(): void;
  blur(): void;
  show(is_show?: boolean): void;
  hide(): void;
  close(force?: boolean): void;
  reload(): void;
  // reloadDev(): void; // actually unsupported, yet listed in the documentation
  reloadIgnoringCache(): void;
  maximize(): void;
  /** @deprecated */
  unmaximize(): void;
  minimize(): void;
  restore(): void;
  enterFullscreen(): void;
  leaveFullscreen(): void;
  toggleFullscreen(): void;
  enterKioskMode(): void;
  leaveKioskMode(): void;
  toggleKioskMode(): void;
  /** @deprecated */
  setTransparent(transparent: boolean): void;
  setShadow(shadow: boolean): void;
  showDevTools(iframe?: string | HTMLIFrameElement, callback?: (dev_win?: Window) => void): void;
  closeDevTools(): void;
  getPrinters(callback: (printers: unknown[]) => void): void;
  // isDevToolsOpen(): boolean; // actually unsupported, yet listed in the documentation
  print(options?: Window.PrintOptions): void;
  setMaximumSize(width: number, height: number): void;
  setMinimumSize(width: number, height: number): void;
  setResizable(resizable: boolean): void;
  setAlwaysOnTop(top: boolean): void;
  setVisibleOnAllWorkspaces(visible: boolean): void;
  canSetVisibleOnAllWorkspaces(): boolean;
  setPosition(position: null | 'center' | 'position'): void;
  setShowInTaskbar(show: boolean): void;
  requestAttention(attension: boolean | number): void;
  capturePage(callback: (result: string | Buffer) => void, config?: Window.CaptureOptions): void;
  setProgressBar(progress: number): void;
  setBadgeLabel(label: string): void;
  eval(frame: HTMLIFrameElement | null, script: string): void;
  evalNWBin(frame: HTMLIFrameElement | null, path: string | ArrayBuffer | Buffer): void;
  evalNWBinModule(
    frame: HTMLIFrameElement | null,
    path: string | ArrayBuffer | Buffer,
    module_path: string,
  ): void;

  on(event: 'close', listener: (this: this) => void): void;
  on(event: 'closed', listener: (this: this) => void): void;
  on(event: 'loading', listener: (this: this) => void): void;
  on(event: 'loaded', listener: (this: this) => void): void;
  on(
    event: 'document-start',
    listener: (this: this, frame: HTMLIFrameElement | null) => void,
  ): void;
  on(event: 'document-end', listener: (this: this, frame: HTMLIFrameElement | null) => void): void;
  on(event: 'focus', listener: (this: this) => void): void;
  on(event: 'blur', listener: (this: this) => void): void;
  on(event: 'minimize', listener: (this: this) => void): void;
  on(event: 'restore', listener: (this: this) => void): void;
  on(event: 'maximize', listener: (this: this) => void): void;
  on(event: 'move', listener: (this: this, x: number, y: number) => void): void;
  on(event: 'resize', listener: (this: this, width: number, height: number) => void): void;
  on(event: 'enter-fullscreen', listener: (this: this) => void): void;
  /** @deprecated */
  on(event: 'leave-fullscreen', listener: (this: this) => void): void;
  on(event: 'zoom', listener: (this: this) => void): void;
  /** @deprecated */
  on(event: 'capturepagedone', listener: (this: this) => void): void;
  on(event: 'devtools-opened', listener: (this: this, url: string) => void): void;
  on(event: 'devtools-closed', listener: (this: this) => void): void;
  on(
    event: 'new-win-policy',
    listener: (
      this: this,
      frame: HTMLIFrameElement | null,
      url: string,
      policy: Window.NewWindowPolicy,
    ) => void,
  ): void;
  on(
    event: 'navigation',
    listener: (
      this: this,
      frame: HTMLIFrameElement | null,
      url: string,
      policy: Window.NavigationPolicy,
    ) => void,
  ): void;
  on(event: string, listener: (...args: any[]) => void): void;

  once(event: 'close', listener: (this: this) => void): void;
  once(event: 'closed', listener: (this: this) => void): void;
  once(event: 'loading', listener: (this: this) => void): void;
  once(event: 'loaded', listener: (this: this) => void): void;
  once(
    event: 'document-start',
    listener: (this: this, frame: HTMLIFrameElement | null) => void,
  ): void;
  once(
    event: 'document-end',
    listener: (this: this, frame: HTMLIFrameElement | null) => void,
  ): void;
  once(event: 'focus', listener: (this: this) => void): void;
  once(event: 'blur', listener: (this: this) => void): void;
  once(event: 'minimize', listener: (this: this) => void): void;
  once(event: 'restore', listener: (this: this) => void): void;
  once(event: 'maximize', listener: (this: this) => void): void;
  once(event: 'move', listener: (this: this, x: number, y: number) => void): void;
  once(event: 'resize', listener: (this: this, width: number, height: number) => void): void;
  once(event: 'enter-fullscreen', listener: (this: this) => void): void;
  /** @deprecated */
  once(event: 'leave-fullscreen', listener: (this: this) => void): void;
  once(event: 'zoom', listener: (this: this) => void): void;
  /** @deprecated */
  once(event: 'capturepagedone', listener: (this: this) => void): void;
  once(event: 'devtools-opened', listener: (this: this, url: string) => void): void;
  once(event: 'devtools-closed', listener: (this: this) => void): void;
  once(
    event: 'new-win-policy',
    listener: (
      this: this,
      frame: HTMLIFrameElement | null,
      url: string,
      policy: Window.NewWindowPolicy,
    ) => void,
  ): void;
  once(
    event: 'navigation',
    listener: (
      this: this,
      frame: HTMLIFrameElement | null,
      url: string,
      policy: Window.NavigationPolicy,
    ) => void,
  ): void;
  once(event: string, listener: (...args: any[]) => void): void;

  removeListener(event: string, listener: (...args: any[]) => void): void;
  removeAllListeners(event?: string): void;
}
