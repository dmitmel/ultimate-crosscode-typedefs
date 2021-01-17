// TypeScript definitions for nw.js 0.35.5
// based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/nw.js/index.d.ts
// undocumented fields and methods aren't defined here

/* eslint-disable @typescript-eslint/naming-convention */

/// <reference types="node" />

import * as types from './nw-types';

type NodeBuffer_ = typeof Buffer;
type NodeGlobal_ = typeof global;
type NodeProcess_ = typeof process;
type NodeRequire_ = typeof require;
type Node__dirname_ = typeof __dirname;
type Node__filename_ = typeof __filename;

export {};

declare global {
  namespace NodeJS {
    // https://nwjs.readthedocs.io/en/latest/References/Changes%20to%20Node/#process
    interface ProcessVersions {
      nw: string;
      chromium: string;
      'nw-flavor': 'sdk' | 'normal';
    }
  }

  namespace nw {
    let Buffer: NodeBuffer_;
    let global: NodeGlobal_;
    let process: NodeProcess_;
    let require: NodeRequire_;
    let __dirname: Node__dirname_;
    let __filename: Node__filename_;

    export import App = types.App;
    export import Clipboard = types.Clipboard;
    export import Tray = types.Tray;
    export import Menu = types.Menu;
    export import MenuItem = types.MenuItem;
    export import Screen = types.Screen;
    export import Shell = types.Shell;
    export import Shortcut = types.Shortcut;
    export import Window = types.Window;
  }
}

/** @deprecated */
declare module 'nw.gui' {
  export = nw;
}
