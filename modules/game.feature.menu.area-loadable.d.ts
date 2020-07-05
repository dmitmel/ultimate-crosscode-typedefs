import './impact.base.game';
import './impact.base.loader';

export {};

declare global {
  namespace sc {
    namespace AreaLoadable {
      interface Data {
        DOCTYPE: 'AREAS_MAP';
        name: ig.LangLabel.Data;
        width: number;
        height: number;
        floors: Floor[];
        defaultFloor: number;
        chests: number;
      }

      // TODO
      interface Floor {
        level: number;
        name: ig.LangLabel.Data;
        tiles: number[][];
        maps: Map[];
      }

      interface Map {
        path: string;
        name: ig.LangLabel.Data;
        offset: Vec2;
        dungeon: '' | 'DUNGEON' | 'NO_DUNGEON';
      }
    }
    interface AreaLoadable extends ig.Loadable {
      data: sc.AreaLoadable.Data;
    }
    interface AreaLoadableConstructor extends ImpactClass<AreaLoadable> {
      new (path: string): AreaLoadable;
    }
    var AreaLoadable: AreaLoadableConstructor;
  }
}
