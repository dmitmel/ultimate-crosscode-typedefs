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
        path: string;
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
        mapHeight: number;
        mapWidth: number;
        masterLevel: number;
        layer: MapLayer[];
        levels: { height: number }[];
        entities: MapEntity[],
        attributes: MapAttributes
        screen: Vec2
      }
      
      interface MapEntity {
        x: number,
        y: number,
        level: number,
        settings: ig.Entity.Settings
      }

      interface MapAttributes {
        saveMode: 'ENABLED' | 'DISABLED' | ''
        cameraInBounds: boolean
        bgm: string
        'map-sounds': string
        mapStyle: string
        weather: string
        area: string
      }

      type MapLayerType = 'Background' | 'Collision' | 'Navigation' | 'Light' | 'object1' | 'object2' | 'object3';
      type MapLayerLevelType = 'last' | 'light' | 'object1' | 'object2' | 'object3' | number;

      interface MapLayer {
        id: number;
        type: MapLayerType;
        name: string;
        level: MapLayerLevelType;
        width: number;
        height: number;
        distance: number;
        repeat: boolean;
        moveSpeed: Vec2;
        tilesetName: string;
        tilesize: number;
        visible: number;
        yDistance: number;
        data: number[][];
      }
    }
    interface MapModel extends ig.GameAddon, sc.Model {
      areas: { [name: string]: sc.MapModel.Area };
      currentArea: sc.AreaLoadable;

      isValidArea(this: this, key: string): boolean;
      getTotalChestsFound(this: this, asPercent: boolean): number;
      getTotalChests(this: this): number;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      validateCurrentPlayerFloor(this: this): void;
      getLandmark(this: this, landmark: string, area: string): sc.MapModel.Area.Landmark;
      getCurrentAreaLandmark(this: this, landmark: string): sc.MapModel.Area.Landmark;
      getAreaName(this: this, a?: string, b?: boolean, c?: boolean): string;
      getVisitedArea(this: this, area: string): boolean;
      getChestCount(this: this, key: string): number;
    }
    interface MapModelConstructor extends ImpactClass<MapModel> {
      new (): MapModel;
    }
    var MapModel: MapModelConstructor;
    var map: sc.MapModel;
  }
}
