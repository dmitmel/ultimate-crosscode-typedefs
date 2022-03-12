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
