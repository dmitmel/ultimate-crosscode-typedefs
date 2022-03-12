// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    interface NewGameSet {
      type: sc.TOGGLE_SET_TYPE;
      order: number;
    }
    var NEW_GAME_SETS: Record<string, sc.NewGameSet>;

    interface NewGameOption {
      set: string;
      cost: number;
      disabled?: boolean;
      needsSaveFile?: boolean;
    }
    var NEW_GAME_OPTIONS: Record<string, sc.NewGameOption>;

    interface NewGamePlusModel extends ig.GameAddon, sc.Model {
      options: { [id: string]: boolean };

      get(this: this, option: keyof typeof sc.NEW_GAME_OPTIONS): boolean;
      getDropRateMultiplier(this: this): number;
    }
    interface NewGamePlusModelConstructor extends ImpactClass<NewGamePlusModel> {
      new (): NewGamePlusModel;
    }
    var NewGamePlusModel: NewGamePlusModelConstructor;
    var newgame: sc.NewGamePlusModel;
  }
}
