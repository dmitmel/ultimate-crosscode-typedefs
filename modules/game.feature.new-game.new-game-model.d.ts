// requires impact.base.game.d.ts
// requires impact.feature.storage.storage.d.ts
// requires game.feature.model.base-model.d.ts

declare namespace sc {
  namespace NewGameToggleSet {
    interface SetOptions {
      type: sc.TOGGLE_SET_TYPE;
      order: number;
    }
  }

  var NEW_GAME_SETS: { [id: string]: sc.NewGameToggleSet.SetOptions };

  interface NewGamePlusModel extends ig.GameAddon, sc.Model {
    options: { [id: string]: boolean };
  }
  interface NewGamePlusModelConstructor extends ImpactClass<NewGamePlusModel> {}
  var NewGamePlusModel: NewGamePlusModelConstructor;
  var newgame: sc.NewGamePlusModel;
}
