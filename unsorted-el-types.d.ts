export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      interface EffectSettings {
        particleDuration: number;
        noLighter?: boolean;
        offset?: Vec3;
        fadeColor?: string | null;
        colorAlpha?: number | null;
        mode?: any;
      }
    }

    interface EffectSheet extends ig.JsonLoadable {
      spawnOnTarget(this: this, key: string, a: ig.ActorEntity, effectConfig: any): ENTITY.Effect;
      spawnFixed(
        this: this,
        effectName: string,
        x: number,
        y: number,
        z: number,
        target: ig.Entity,
        effectSettings?: ig.EFFECT_ENTRY.EffectSettings,
      ): ig.ENTITY.Effect | null;
    }
    interface EffectSheetConstructor extends ImpactClass<EffectSheet> {
      new (sheet: string): EffectSheet;
    }
    var EffectSheet: EffectSheetConstructor;

    interface EffectConfig extends ig.Config {}
    interface EffectConfigConstructor extends ImpactClass<EffectConfig> {
      new (c: any): EffectConfig;
      loadParticleData(
        this: this,
        a: any,
        b: ig.EFFECT_ENTRY.EffectSettings,
        d: any,
      ): ig.EFFECT_ENTRY.EffectSettings;
    }
    var EffectConfig: EffectConfigConstructor;
  }

  namespace sc {
    interface ModelMessage {}
    namespace ModelMessage {
      interface PlayerMessage extends ModelMessage {
        ELEMENT_MODE_CHANGE: 1;
        CREDIT_CHANGE: 2;
        EXP_CHANGE: 3;
        LEVEL_CHANGE: 4;
        EQUIP_CHANGE: 5;
        CP_CHANGE: 6;
        SKILL_CHANGED: 7;
        SKILL_BRANCH_SWAP: 8;
        RESET_PLAYER: 9;
        ITEM_OBTAINED: 10;
        SET_PARAMS: 11;
        CONFIG_CHANGED: 12;
        ITEM_USED: 13;
        STATS_CHANGED: 14;
        ITEM_REMOVED: 15;
        ITEM_BLOCK_FINISH: 16;
        ITEM_FAVORITES_CHANGED: 17;
        ITEM_EQUIP_UPDATE: 18;
        ITEM_CONSUME_START: 19;
        ITEM_CONSUME_END: 20;
        CORE_CHANGED: 21;
        ITEM_TOGGLED: 22;
      }
    }

    var PLAYER_MSG: ModelMessage.PlayerMessage;

    enum SHIELD_RESULT {
      NONE,
      REGULAR,
      PERFECT,
      NEUTRALIZE,
    }

    enum STATS_CATEGORY {
      GENERAL,
      COMBAT,
      ITEMS,
      QUESTS,
      EXPLORATION,
      MISC,
      LOG,
      ARENA,
    }

    enum FOOD_ICON_STATE {
      HOLD = 0,
      BUBBLE = 1,
      DONE = 2,
    }

    var FOOD_SPRITE: Record<string, number>;

    interface CrossCode {
      getEntityByName(this: this, name: string): ig.Entity;
      getEntitiesByType(this: this, type: ImpactClass<ig.Entity>): ig.Entity[];
    }

    //#region Arena

    //#endregion Arena

    //#region Stats
    interface StatsModel extends ig.GameAddon {
      set(this: this, stat: string, value: number): void;
      setMax(this: this, stat: string, value: number): void;
      setMin(this: this, stat: string, value: number): void;

      add(this: this, stat: string, value: number): void;
      subtract(this: this, stat: string, value: number): void;

      getMap(this: this, map: string, stat: string): number;
      setMap(this: this, map: string, stat: string, value: number): void;
      addMap(this: this, map: string, stat: string, value: number): void;
      subMap(this: this, map: string, stat: string, value: number): void;
    }
    interface StatsModelConstructor extends ImpactClass<StatsModel> {
      new (): StatsModel;
    }
    var StatsModel: StatsModelConstructor;
    var stats: StatsModel;

    namespace Stats {
      type StatItemType =
        | 'Percent'
        | 'Separator'
        | 'Time'
        | 'KeyValue'
        | 'KeyCurMax'
        | 'List'
        | 'Logs';

      interface StatItem {
        type?: StatItemType;
        subtype?: StatItemType;
        displayName?: string;
        highlight?:
          | {
              min: number;
            }
          | boolean;
        group?: string;
        stat?: string;
        map?: string;
        max?(): number;
        getSettings?(a: string): StatItem | null;
      }
    }
    type StatCategory = Record<string, Stats.StatItem>;

    var STATS_BUILD: StatCategory[];

    //#endregion Stats

    //#region Map
    namespace MapModel {
      interface Area {
        path: string;
        chests: number;
      }
    }
    interface MapModel {
      currentArea: sc.MapModel.Area;

      isValidArea(this: this, areaName: string): boolean;
      getChestCount(this: this, key: string): number;
      getTotalChestsFound(this: this, asPercent: boolean): number;
      getTotalChests(this: this): number;
      getVisitedArea(this: this, area: string): boolean;
      getAreaName(this: this, a?: string, b?: boolean, c?: boolean): string;
    }

    interface WorldmapAreaName extends ig.GuiElementBase {
      gfx: ig.Image;
      name: sc.MapNameGui;
      hasText: boolean;
      setText(this: this, a: string, b?: any, c?: any): void;
    }

    interface MapNameGui extends ig.BoxGui {}

    interface MapWorldMap {
      areaName: WorldmapAreaName;
      _setAreaName(this: this, a: any): void;
    }
    interface MapWorldMapConstructor extends ImpactClass<MapWorldMap> {}
    var MapWorldMap: MapWorldMapConstructor;

    interface MapChestDisplay {
      max: sc.NumberGui;
      current: sc.NumberGui;
      _oldMax: number;
      _oldCount: number;
      update(this: this): void;
    }
    interface MapChestDisplayConstructor extends ImpactClass<MapChestDisplay> {}
    var MapChestDisplay: MapChestDisplayConstructor;
    //#endregion Map

    interface SaveSlotButton {
      chapter: SaveSlotChapter;

      setSave(this: this, a: ig.SaveSlot.Data, b: any, c: any): void;
    }

    interface TrophyIcon {
      index: number;
      cat: 'GENERAL' | 'COMBAT' | 'EXPLORATION';
      hidden?: boolean;
    }

    var TROPHY_ICONS: Record<string, TrophyIcon>;

    interface TrophyIconGraphic extends ig.GuiElementBase {
      icon: ig.ImageGui;
      ribbon: ig.ImageGui;
      points: sc.NumberGui;
    }
    interface TrophyIconGraphicConstructor extends ImpactClass<TrophyIconGraphic> {
      new (icon: string, stars: number, points: number, trophyUnlocked: boolean): TrophyIconGraphic;
    }
    var TrophyIconGraphic: TrophyIconGraphicConstructor;

    //#region Attacks
    enum ATTACK_TYPE {
      NONE,
      LIGHT,
      MEDIUM,
      HEAVY,
      MASSIVE,
      BREAK,
    }

    interface AttackInfo extends ig.Class {
      type: sc.ATTACK_TYPE;
      attackerParams: sc.CombatParams;
      damageFactor: number;
      defenseFactor: number;
      element: sc.ELEMENT;
      critFactor: number;
    }
    interface AttackInfoConstructor extends ImpactClass<AttackInfo> {}
    var AttackInfo: AttackInfoConstructor;

    interface HitNumberEntityBase extends ig.Entity {}
    namespace DAMAGE_MODIFIER_FUNCS {
      type DamageModifierFunction = (
        attackInfo: AttackInfo,
        damageFactor: number,
        combatantRoot: ig.ENTITY.Combatant,
        shieldResult: SHIELD_RESULT,
        hitIgnore: boolean,
        params: sc.CombatParams,
      ) => {
        attackInfo: AttackInfo;
        damageFactor: number;
        applyDamageCallback: (() => void) | null;
      };
    }
    var DAMAGE_MODIFIER_FUNCS: Record<string, DAMAGE_MODIFIER_FUNCS.DamageModifierFunction>;

    //#endregion Attacks

    namespace NewGamePlus {
      interface NewGamePlusOption {
        set: string;
        cost: number;
        disabled?: boolean;
        needsSaveFile?: boolean;
      }
    }

    var NEW_GAME_OPTIONS: Record<string, NewGamePlus.NewGamePlusOption>;

    interface NewGamePlusModel {
      get(this: this, option: string): boolean;
      getDropRateMultiplier(this: this): number;
    }

    enum GAME_MODEL_SUBSTATE {
      RUNNING = 0,
      TELEPORT = 1,
      LOADING = 2,
      NEWGAME = 3,
      RESET = 4,
      LOADGAME = 5,
      MENU = 6,
      PAUSE = 7,
      LEVELUP = 8,
      QUICK = 9,
      ONMAPMENU = 10,
      QUESTSOLVED = 11,
    }

    var MIN_BOOSTER_LEVEL: number;

    interface EnemyBooster extends ig.GameAddon {
      boosted: boolean;

      updateBoosterState(this: this): void;
      updateEnemyBoostState(this: this, enemy: ig.ENTITY.Enemy): void;

      modelChanged(this: this, source: any, message: ModelMessage): void;
    }
    interface EnemyBoosterConstructor extends ImpactClass<EnemyBooster> {}
    var enemyBooster: EnemyBooster;
    var EnemyBooster: EnemyBoosterConstructor;

    enum ENEMY_BOOSTER_STATE {
      NONE,
      BOOSTABLE,
      BOOSTED,
    }

    interface EnemyInfoBox extends ig.BoxGui {
      level: sc.NumberGui;
      enemy: ig.Database.EnemyData;
      setEnemy(this: this, b: any): void;
    }
    interface EnemyInfoBoxConstructor extends ImpactClass<EnemyInfoBox> {}
    var EnemyInfoBox: EnemyInfoBoxConstructor;

    interface EnemyEntryButton extends sc.ListBoxButton {
      key: any;
      level: sc.NumberGui;
    }
    interface EnemyEntryButtonConstructor extends ImpactClass<EnemyEntryButton> {
      new (b: any, enemyKey: string, d: any): EnemyEntryButton;
    }
    var EnemyEntryButton: EnemyEntryButtonConstructor;

    interface EnemyDisplayGui extends ig.GuiElementBase {}
    interface EnemyDisplayGuiConstructor extends ImpactClass<EnemyDisplayGui> {
      new (b: any, a: any, d: any, c: any, e: any, isBoosted: boolean): EnemyDisplayGui;
    }
    var EnemyDisplayGui: EnemyDisplayGuiConstructor;

    interface EnemyPageGeneralInfo extends ig.GuiElementBase {
      drops: EnemyDrops;
      setData(
        this: this,
        enemyName: string,
        enemyType: sc.EnemyType,
        f: boolean,
        boosted: boolean,
      ): void;
    }

    interface EnemyPageGeneralInfoConstructor extends ImpactClass<EnemyPageGeneralInfo> {}

    var EnemyPageGeneralInfo: EnemyPageGeneralInfoConstructor;

    interface EnemyDrops extends ig.GuiElementBase {
      setDrops(this: this, dropList: EnemyType.ItemDrop[], d: boolean, boosted: boolean): void;
    }
    interface EnemyDropsConstructor extends ImpactClass<EnemyDrops> {}
    var EnemyDrops: EnemyDropsConstructor;

    interface BasicCombatant {
      isPlayer?: boolean;
    }

    namespace ShopModel {
      interface ShopPage {
        title: ig.LangLabel.Data;
        content: ShopItem[];
      }

      interface ShopItem {
        item: sc.ItemID;
        condition?: string;
        price?: number;
      }
    }

    interface ShopModel {
      name: ig.LangLabel.Data;
      shopType: keyof typeof sc.MENU_SHOP_TYPES;
      sellScale: number;
      maxOwn?: number;
      content?: any[][];
      pages: ShopModel.ShopPage[];
    }

    namespace TradeModel {
      interface TradeItem {
        id: sc.ItemID;
        amount: number;
      }

      interface TradeOption {
        get: TradeItem[];
        require: TradeItem[];
        scale?: number;
        cost?: number;
      }

      interface Trader {
        name: ig.LangLabel.Data;
        order: number;
        area: string;
        noTrack?: boolean;
        options: TradeOption[];
        upgradeTo?: string;
        child?: string;
      }
    }
  }
}
