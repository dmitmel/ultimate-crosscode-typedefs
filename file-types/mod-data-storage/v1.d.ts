import { ModID } from '../../modloader/mod';

export interface FileData {
  version: 1;
  data: Data;
}

export type Data = Record<ModID, ModEntry>;
export interface ModEntry {
  enabled: boolean;
}
