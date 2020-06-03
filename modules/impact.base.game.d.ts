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
  interface Game extends ig.Class {
    playerEntity: ig.ENTITY.Player;

    createPlayer(this: this): void;
  }
  interface GameConstructor extends ImpactClass<Game> {
    new (): Game;
  }
  var Game: GameConstructor;
  var game: Game;

  interface GameAddon extends ig.Class {
    onLevelLoadStart?(this: this, data: sc.MapModel.Map): void;
    onLevelLoaded?(this: this, data: ig.Game): void;
  }
  interface GameAddonConstructor extends ImpactClass<GameAddon> {}
  var GameAddon: GameAddonConstructor;
}
