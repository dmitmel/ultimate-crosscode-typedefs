// requires impact.base.game
// requires impact.base.loader
// requires impact.base.vars
// requires impact.feature.database.database
// requires game.config
// requires game.feature.quick-menu.quick-menu-model
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace MapModel {
      namespace Area {
        interface Landmark {
          name: ig.LangLabel.Data;
          description: ig.LangLabel.Data;
        }
      }
      interface Area {
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        areaType: 'PATH' | 'TOWN' | 'DUNGEON';
        order: number;
        track: boolean;
        chests: number;
        boosterItem: string;
        position: Vec2;
        landmarks: { [name: string]: Area.Landmark };
      }

      interface Map {
        name: string;
      }
    }
    interface MapModel extends ig.GameAddon, sc.Model {
      areas: {[key: string]: sc.MapModel.Area};

      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      validateCurrentPlayerFloor(this: this): void;
      getLandmark(this: this, landmark: string, area: string): sc.MapModel.Area.Landmark;
      getCurrentAreaLandmark(this: this, landmark: string): sc.MapModel.Area.Landmark;
    }
    interface MapModelConstructor extends ImpactClass<MapModel> {}
    var MapModel: MapModelConstructor;
    var map: sc.MapModel;
  }
}
