import { MaybePromise } from './utils';

export class PatchList<P> {
  patternPatchers: Array<[RegExp, P]>;
  specificPatchers: Map<string, P[]>;

  forPath(path: string): P[];
  add(path: string | RegExp, patcher: P): void;
}

export type ResourceGenerator<Data, Ctx> = (context: Ctx) => MaybePromise<Data>;

export type ResourcePatcherSimple<Data, Deps, Ctx> = (
  data: Data,
  dependencies: Deps,
  context: Ctx,
) => MaybePromise<Data | void>;

export interface ResourcePatcherWithDeps<Data, Deps, Ctx> {
  dependencies?: ((context: Ctx) => PromiseLike<Deps>) | null;
  patcher: ResourcePatcherSimple<Data, Deps, Ctx>;
}

export class ResourcePatchList<Data, Ctx> extends PatchList<
  ResourcePatcherWithDeps<Data, unknown, Ctx>
> {
  add<Data2 extends Data = Data, Deps = never>(
    path: string | RegExp,
    patcher: ResourcePatcherSimple<Data2, Deps, Ctx> | ResourcePatcherWithDeps<Data2, Deps, Ctx>,
  ): void;
}
