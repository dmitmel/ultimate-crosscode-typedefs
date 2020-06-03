// requires impact.base.game.d.ts
// requires impact.base.loader.d.ts
// requires impact.base.vars.d.ts
// requires impact.feature.database.database.d.ts
// requires game.config.d.ts
// requires game.feature.quick-menu.quick-menu-model.d.ts
// requires game.feature.model.options-model.d.ts

declare namespace sc {
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
    areas: sc.MapModel.Area[];

    onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
    validateCurrentPlayerFloor(this: this): void;
  }
  interface MapModelConstructor extends ImpactClass<MapModel> {}
  var MapModel: MapModelConstructor;
  var map: sc.MapModel;
}
