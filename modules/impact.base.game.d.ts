import './impact.base.impact';
import './impact.base.entity';
import './impact.base.event';
import './impact.base.renderer';
import './impact.base.physics';
import './impact.base.game-state';
import './impact.base.collision-map';
import './impact.base.background-map';
import './impact.base.global-settings';
import './impact.base.extension';
import './impact.base.utils';
import './impact.base.dom';

export {};

declare global {
  namespace ig {
    namespace Game {
      namespace Addons {
        type EventHandlersArr<Name extends keyof ig.GameAddon> = Array<
          {
            [K in Name]: ig.GameAddon[K] extends
              | ((...args: infer Args) => infer Ret)
              | null
              | undefined
              ? (...args: Args) => Ret
              : never;
          }
        >;
      }
      interface Addons {
        all: ig.GameAddon[];
        levelLoadStart: Addons.EventHandlersArr<'onLevelLoadStart'>;
        levelLoaded: Addons.EventHandlersArr<'onLevelLoaded'>;
        teleport: Addons.EventHandlersArr<'onTeleport'>;
        preUpdate: Addons.EventHandlersArr<'onPreUpdate'>;
        postUpdate: Addons.EventHandlersArr<'onPostUpdate'>;
        deferredUpdate: Addons.EventHandlersArr<'onDeferredUpdate'>;
        preDraw: Addons.EventHandlersArr<'onPreDraw'>;
        midDraw: Addons.EventHandlersArr<'onMidDraw'>;
        postDraw: Addons.EventHandlersArr<'onPostDraw'>;
        varsChanged: Addons.EventHandlersArr<'onVarsChanged'>;
        reset: Addons.EventHandlersArr<'onReset'>;
        windowFocusChanged: Addons.EventHandlersArr<'onWindowFocusChanged'>;
      }
    }
    interface Game extends ig.Class {
      playerEntity: ig.ENTITY.Player;
      addons: Game.Addons;

      createPlayer(this: this): void;
      getErrorData(this: this, gameInfo: Record<string, unknown>): void;
    }
    interface GameConstructor extends ImpactClass<Game> {
      new (): Game;
    }
    var Game: GameConstructor;
    var game: Game;

    interface GameAddon extends ig.Class {
      name: string;

      levelLoadStartOrder: number;
      onLevelLoadStart?(this: this, data: sc.MapModel.Map): void;

      levelLoadedOrder: number;
      onLevelLoaded?(this: this, data: ig.Game): void;

      teleportOrder: number;
      onTeleport?(
        this: this,
        map: string,
        teleportPosition?: ig.TeleportPosition | null,
        hint?: 'NEW' | 'LOAD' | null,
        clearCache?: boolean | null,
        reloadCache?: boolean | null,
      ): void;

      preUpdateOrder: number;
      onPreUpdate?(this: this): void;

      postUpdateOrder: number;
      onPostUpdate?(this: this): void;

      deferredUpdateOrder: number;
      onDeferredUpdate?(this: this): void;

      preDrawOrder: number;
      onPreDraw?(this: this): void;

      midDrawOrder: number;
      onMidDraw?(this: this): void;

      postDrawOrder: number;
      onPostDraw?(this: this): void;

      resetOrder: number;
      onReset?(this: this): void;

      varsChangedOrder: number;
      onVarsChanged?(this: this): void;

      windowFocusOrder: number;
      onWindowFocusChanged?(this: this, status: boolean): void;
    }
    interface GameAddonConstructor extends ImpactClass<GameAddon> {
      new (name: string): GameAddon;
    }
    var GameAddon: GameAddonConstructor;

    interface TeleportPosition extends ig.Class {}
    interface TeleportPositionConstructor extends ImpactClass<TeleportPosition> {
      new (marker?: string | null): TeleportPosition;
    }
  }
}
