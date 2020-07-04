// requires impact.base.impact.d.ts
// requires impact.base.entity.d.ts
// requires impact.base.event.d.ts
// requires impact.base.renderer.d.ts
// requires impact.base.physics.d.ts
// requires impact.base.game-state.d.ts
// requires impact.base.collision-map.d.ts
// requires impact.base.background-map.d.ts
// requires impact.base.global-settings.d.ts
// requires impact.base.extension.d.ts
// requires impact.base.utils.d.ts
// requires impact.base.dom.d.ts

declare namespace ig {
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
      map: any,
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
