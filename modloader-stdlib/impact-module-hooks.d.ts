import { PatchList } from './patch-list';

export type ImpactModuleHook = (moduleName: string) => void;
export const patchList: PatchList<ImpactModuleHook>;
export function add(moduleName: string | RegExp, callback: ImpactModuleHook): void;
