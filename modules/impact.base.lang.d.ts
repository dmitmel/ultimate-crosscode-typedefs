// requires impact.base.loader.d.ts

declare namespace ig {
  interface Lang extends ig.SingleLoadable {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    labels: any;

    get<T = string>(this: this, path: string): T;
  }
  interface LangConstructor extends ImpactClass<Lang> {}
  var Lang: LangConstructor;
  var lang: ig.Lang;

  namespace LangLabel {
    // TODO: is a simple string valid `ig.LangLabel.Data`
    type Data = { [locale: string]: string } & { langUid?: number };
  }
  interface LangLabel extends ig.Class {
    value: string;
    data: ig.LangLabel.Data;

    toString(this: this): string;
  }
  interface LangLabelConstructor extends ImpactClass<LangLabel> {}
  var LangLabel: LangLabelConstructor;
}
