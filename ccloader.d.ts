declare namespace Mod {
  interface Manifest {
    description?: string;
  }
}

declare interface Mod {
  name: string;
  version: string;
  manifest: Mod.Manifest;
}

declare interface Window {
  activeMods: Mod[];
  inactiveMods: Mod[];
  versions: { ccloader: string; crosscode: string } & {
    [name: string]: string;
  };
}

declare let activeMods: Window['activeMods'];
declare let inactiveMods: Window['inactiveMods'];
declare let versions: Window['versions'];
