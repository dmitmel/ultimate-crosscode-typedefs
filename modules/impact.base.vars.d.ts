export {};

declare global {
  namespace ig {
    type VarValue = number | boolean | string | LangLabel.Data | Vec2 | Vec3 | undefined | null;

    interface KnownVars {
      'arena.active': boolean;
      'plot.line': number;
      'plot.metaSpace': boolean;
    }

    namespace Vars {
      interface Accessor {
        onVarAccess(this: this, varString: string, varParts: string[]): VarValue;
      }

      interface VarObject {
        indirect?: string;
        varName?: string;
      }
    }

    interface Vars extends ig.Class {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      storage: any;

      get<K extends keyof ig.KnownVars>(this: this, path: K): ig.KnownVars[K];
      get<T extends ig.VarValue = ig.VarValue>(this: this, path: string): T;
      setDefault<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      setDefault(this: this, path: string, value: ig.VarValue): void;
      set<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      set(this: this, path: string, value: ig.VarValue): void;
      add<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      add(this: this, path: string, value: ig.VarValue): void;
      sub<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      sub(this: this, path: string, value: ig.VarValue): void;
      mul<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mul(this: this, path: string, value: ig.VarValue): void;
      div<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      div(this: this, path: string, value: ig.VarValue): void;
      mod<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      mod(this: this, path: string, value: ig.VarValue): void;
      and<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      and(this: this, path: string, value: ig.VarValue): void;
      or<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      or(this: this, path: string, value: ig.VarValue): void;
      xor<K extends keyof ig.KnownVars>(this: this, path: K, value: ig.KnownVars[K]): void;
      xor(this: this, path: string, value: ig.VarValue): void;
      
      registerVarAccessor(this: this, domain: string, accessor: ig.Vars.Accessor, editor?: string): void;
    }
    interface VarsConstructor extends ImpactClass<Vars> {
      new (): Vars;
    }
    var Vars: VarsConstructor;
    var vars: Vars;

    interface VarCondition extends ig.Class {
      code: string;
      pretty: string;
      vars: string[];
      condition: () => unknown;

      setCondition(this: this, condition: string): void;
      evaluate(this: this): boolean;
      toString(this: this): string;
    }
    interface VarConditionConstructor extends ImpactClass<VarCondition> {
      new (condition: string | undefined): ig.VarCondition;
    }
    var VarCondition: ig.VarConditionConstructor;
  }
}
