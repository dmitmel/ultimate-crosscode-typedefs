// requires impact.feature.env-particles.env-particles
// requires game.feature.combat.entities.ball
// requires game.feature.player.entities.player-base
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.entities.player-pet
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace ig.ENTITY {
    namespace Player {
      interface PlayerState {
        startState: number;
        guarding: boolean;
        applyCharge: boolean;
        isCharging: boolean;
        redashReady: boolean;
      }

      interface PlayerInput {
        thrown: boolean;
        melee: boolean;
        aim: boolean;
        autoThrow: false;
        attack: boolean;
        guard: boolean;
        charge: boolean;
        dashX: number;
        dashY: number;
        switchMode: false;
        relativeVel: number;
        moveDir: Vec2;
      }

      namespace Charging {
        interface Type {
          actionKey: string;
        }
      }

      interface Charging {
        time: number;
        cancelTime: number;
        swapped: boolean;
        maxLevel: number;
        block: number;
        prefDir: Vec2;
        type: Charging.Type;
      }

      type ActionKey = {
        actionKey: 'ATTACK_SPECIAL' | 'THROW_SPECIAL' | 'GUARD_SPECIAL' | 'DASH_SPECIAL';
      };
    }
    interface Player extends sc.PlayerBaseEntity {
      proxies: Record<string, sc.ProxySpawnerBase>;
      perfectGuardCooldown: number;
      dashPerfect: boolean;
      stunEscapeDash: boolean;
      regenFactor: number;
      model: sc.PlayerModel;
      attackCounter: number;
      updateModelStats(this: this, a: boolean): void;
      onPerfectDash(this: this): void;
      updateSkinAura(this: this): void;
      handleStateStart(
        this: this,
        playerState: Player.PlayerState,
        inputState: Player.PlayerInput,
      ): void;
      getMaxChargeLevel(this: this, actionKey: Player.ActionKey): number;
    }
    interface PlayerConstructor extends ImpactClass<Player> {}
    var Player: PlayerConstructor;
  }
}
