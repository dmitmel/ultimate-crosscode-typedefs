// requires game.feature.npc.entities.sc-actor
// requires game.feature.character.character
// requires game.feature.interact.map-interact
// requires game.feature.trade.gui.trade-menu

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace NPC {
        interface Settings extends ig.Entity.Settings {}

        interface InteractIcons {
          normal: sc.MapInteractIcon;
          shop: sc.MapInteractIcon;
          quest: sc.MapInteractIcon;
          arena: sc.MapInteractIcon;
          newMsg: sc.MapInteractIcon;
          trade: sc.MapInteractIcon;
          xeno: sc.MapInteractIcon;
          xenoEvent: sc.MapInteractIcon;
        }
      }
      interface NPC extends ig.Class {
        interactEntry: sc.MapInteractEntry;
        interactIcons: ig.ENTITY.NPC.InteractIcons;

        setMapInteractIcon(this: this, npcState: sc.NpcState): void;
      }
      interface NPCConstructor extends ImpactClass<NPC> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.NPC.Settings): NPC;
      }
      var NPC: NPCConstructor;
    }
  }

  namespace sc {
    enum NPC_EVENT_TYPE {
      SIMPLE = 0,
      TRADE = 1,
      QUEST = 2,
      SHOP = 3,
      ARENA = 4,
    }

    interface NpcState extends ig.Class {
      npcEventType: sc.NPC_EVENT_TYPE;
      npcEventObj: ig.Event;
    }
    interface NpcStateConstructor extends ImpactClass<NpcState> {
      new (settings: unknown, entity: ig.ENTITY.NPC): NpcState;
    }
    var NpcState: NpcStateConstructor;
  }
}
