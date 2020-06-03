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

declare var activeMods: Mod[];
declare var inactiveMods: Mod[];
declare var versions: { ccloader: string; crosscode: string } & {
  [name: string]: string;
};
