declare namespace ig {
  interface Cacheable extends ig.Class {
    cacheType: string;

    decreaseRef(this: this): void;
  }
  interface CacheableConstructor extends ImpactClass<Cacheable> {}
  var Cacheable: CacheableConstructor;

  interface Loadable extends ig.Cacheable, ig.Resource {
    loaded: boolean;
    failed: boolean;
    path: string;

    loadingFinished(this: this, success: boolean): void;
  }
  interface LoadableConstructor extends ImpactClass<Loadable> {
    new (pathOrData: string): Loadable;
  }
  var Loadable: LoadableConstructor;

  interface SingleLoadable extends ig.Class, ig.Resource {
    loaded: boolean;
    failed: boolean;
    path: string;

    loadingFinished(this: this, success: boolean): void;
  }
  interface SingleLoadableConstructor extends ImpactClass<SingleLoadable> {
    new (): SingleLoadable;

    instance: SingleLoadable;
  }
  var SingleLoadable: SingleLoadableConstructor;

  interface Loader extends ig.Class {
    _unloaded: string[];

    _loadCallback: ReplaceThisParameter<ig.Resource.LoadCallback, this>;
  }
  interface LoaderConstructor extends ImpactClass<Loader> {}
  var Loader: LoaderConstructor;
}
