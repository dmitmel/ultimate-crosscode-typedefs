// requires impact.base.game

export {};

declare global {
  namespace sc {
    var STAT_CHANGE_ICONS: Record<string, [number, number]>;
    var STAT_CHANGE_ICONS_LARGE: Record<string, [number, number]>;

    namespace StatChange {
      type StatName = keyof typeof sc.STAT_CHANGE_SETTINGS;
      interface Params {
        hp: number;
        attack: number;
        defense: number;
        focus: number;
        elemFactor: number[]
      }
    }
    interface StatChange extends ig.Class {
      params: StatChange.Params;
      modifiers: sc.ModifierList;
      iconString: string;
      hasTimer: boolean;

      update(this: this): boolean;
      onActionEndDetach(this: this): void;
      onEntityKillDetach(this: this): void;
      clear(this: this): void;
      reset(this: this, time: number): void;
      getTimeFactor(this: this): number;
    }
    interface StatChangeConstructor extends ImpactClass<StatChange> {
      new (stats: sc.StatChange.StatName[]): StatChange;
    }
    var StatChange: StatChangeConstructor;

    interface ActionBuff extends sc.StatChange {
      active: boolean;
      name: string;
      hacked: boolean;
    }
    interface ActionBuffConstructor extends ImpactClass<ActionBuff> {
      new (stats: sc.StatChange.StatName[], name: string, hacked?: Optional<boolean>): ActionBuff;
    }
    var ActionBuff: ActionBuffConstructor;

    enum STAT_CHANGE_TYPE {
      STATS = 0,
      MODIFIER = 1,
      HEAL = 2,
    }

    interface StatParamType {
      key: string;
      index?: number;
    }
    var STAT_PARAM_TYPE: Record<string, StatParamType>;

    interface StatChangeSettings {
      change: sc.STAT_CHANGE_TYPE;
      type: sc.StatParamType;
      value: number;
      icon: string;
      grade?: string;
    }
    var STAT_CHANGE_SETTINGS: Record<string, StatChangeSettings>;
  }
}
