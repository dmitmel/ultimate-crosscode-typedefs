import { ModID } from './mod';
import * as modDataStorageFT from '../file-types/mod-data-storage';
import * as modDataStorageV1FT from '../file-types/mod-data-storage/v1';

export type FileData = modDataStorageFT.FileData;

export const filePath: string | null;
export const data: Map<ModID, modDataStorageV1FT.ModEntry>;

export function readImmediately(): Promise<void>;
export function writeImmediately(): Promise<void>;
export function write(): Promise<void>;

export function isModEnabled(id: ModID): boolean;
export function setModEnabled(id: ModID, enabled: boolean): void;
