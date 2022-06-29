// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    namespace PartyMemberModel {
      interface Healing {
        sandwich: number[];
        cooldown: number;
        needRestock: boolean;
      }
    }
    interface PartyMemberModel extends ig.Class {
      config: sc.PlayerConfig;
      healing: PartyMemberModel.Healing;

      getHeadIdx(this: this): number;
      revive(this: this): void;
      setTemporary(this: this, a: boolean): void;
      setNoDie(this: this, a: boolean): void;
      update(this: this): void;
    }
    interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {
      new (name: string): PartyMemberModel;
    }
    var PartyMemberModel: PartyMemberModelConstructor;
  }
}
