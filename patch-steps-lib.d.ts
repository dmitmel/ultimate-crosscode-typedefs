export const version: string;

export type PatchFile = AnyPatchStep[] | Record<string, unknown>;

export type Index = string | number;

export interface BasePatchStep {
  comment?: string;
}

export namespace PatchStep {
  export interface ENTER extends BasePatchStep {
    type: 'ENTER';
    index: Index | Index[];
  }

  export interface EXIT extends BasePatchStep {
    type: 'EXIT';
    count?: number;
  }

  export interface SET_KEY extends BasePatchStep {
    type: 'SET_KEY';
    index: Index;
    content?: unknown;
  }

  export interface INIT_KEY extends BasePatchStep {
    type: 'INIT_KEY';
    index: Index;
    content: unknown;
  }

  export interface REMOVE_ARRAY_ELEMENT extends BasePatchStep {
    type: 'REMOVE_ARRAY_ELEMENT';
    index: number;
  }

  export interface ADD_ARRAY_ELEMENT extends BasePatchStep {
    type: 'ADD_ARRAY_ELEMENT';
    index?: number;
    content: unknown;
  }

  export interface IMPORT extends BasePatchStep {
    type: 'IMPORT';
    src: string;
    path?: Index[];
    index?: Index;
  }

  export interface INCLUDE extends BasePatchStep {
    type: 'INCLUDE';
    src: string;
  }

  export interface FOR_IN extends BasePatchStep {
    type: 'FOR_IN';
    values: unknown[] | Array<Record<string, unknown>>;
    keyword: string | Record<string, string>;
    body: AnyPatchStep[];
  }

  export interface COPY extends BasePatchStep {
    type: 'COPY';
    alias: string;
  }

  export interface PASTE extends BasePatchStep {
    type: 'PASTE';
    alias: string;
    index?: Index;
  }

  export interface COMMENT extends BasePatchStep {
    type: 'COMMENT';
    value: unknown;
  }

  export interface DEBUG extends BasePatchStep {
    type: 'DEBUG';
    value: boolean;
  }
}

// This is expressed with an interface so that mods can define their own
// patching steps.
export interface PatchStepsRegistry {
  ENTER: PatchStep.ENTER;
  EXIT: PatchStep.EXIT;
  SET_KEY: PatchStep.SET_KEY;
  INIT_KEY: PatchStep.INIT_KEY;
  REMOVE_ARRAY_ELEMENT: PatchStep.REMOVE_ARRAY_ELEMENT;
  ADD_ARRAY_ELEMENT: PatchStep.ADD_ARRAY_ELEMENT;
  IMPORT: PatchStep.IMPORT;
  INCLUDE: PatchStep.INCLUDE;
  FOR_IN: PatchStep.FOR_IN;
  COPY: PatchStep.COPY;
  PASTE: PatchStep.PASTE;
  COMMENT: PatchStep.COMMENT;
  DEBUG: PatchStep.DEBUG;
}
export type AnyPatchStep = Extract<PatchStepsRegistry[keyof PatchStepsRegistry], BasePatchStep>;

export function photomerge<A = unknown, B = A>(a: A, b: B): A & B;
export function photocopy<O = unknown>(o: O): O;

export function diff(
  a: unknown,
  b: unknown,
  settings: Partial<DiffSettings>,
): AnyPatchStep[] | null;

export interface DiffSettings {
  arrayTrulyDifferentThreshold: number;
  trulyDifferentThreshold: number;
  arrayLookahead: number;
  diffAddNewKey: number;
  diffAddDelKey: number;
  diffMulSameKey: number;

  diffCore: DiffCore;
  comment?: string;
  commentValue?: string;
  path: Index[];
  optimize: boolean;
}

export type DiffCore = (a: unknown, b: unknown, settings: DiffSettings) => AnyPatchStep[] | null;

export function diffApplyComment<T extends BasePatchStep>(step: T, settings: DiffSettings): T;

export function diffEnterLevel(
  a: unknown,
  b: unknown,
  index: Index,
  settings: DiffSettings,
): AnyPatchStep[] | null;

export type ParsedPath = null | [/* fromGame */ boolean | string, /* url */ string];

export interface FileInfo {
  path: string;
  stack: StackEntry[];
}

export type StackEntry = StackEntry.Step | StackEntry.Error;
export namespace StackEntry {
  export interface Step {
    type: 'Step';
    index: Index;
    name: string;
  }

  export interface Error {
    type: 'Error';
    errorType: string;
    errorMessage: string;
  }
}

export class DebugState {
  fileStack: Array<FileInfo | null>;
  currentFile: FileInfo | null;

  translateParsedPath(parsedPath: ParsedPath | null): string;
  /** @final */
  addFile(parsedPath: ParsedPath): void;
  /** @final */
  removeLastFile(): FileInfo;
  /** @final */
  addStep(index: Index, name?: string): void;
  /** @final */
  removeLastStep(): FileInfo;
  /** @final */
  getLastStep(): StackEntry.Step;
  /** @final */
  throwError(type: string, message: string): void;
  printFileInfo(file: FileInfo): void;
  /** @final */
  print(): void;
  beforeStep(): Promise<void>;
  afterStep(): Promise<void>;
}

export const appliers: Record<string, Applier>;

export type Applier = (this: StackEntry.Step, state: ApplierState) => Promise<void>;

export interface ApplierState {
  currentValue: unknown;
  stack: StackEntry[];
  cloneMap: Map<string, unknown>;
  loader: Loader;
  debugState: DebugState;
  debug: boolean;
}

export function patch(
  a: unknown,
  steps: PatchFile,
  loader: Loader,
  debugState?: DebugState,
): Promise<void>;

type Loader = (fromGame: boolean | string, path: string) => Promise<unknown>;
