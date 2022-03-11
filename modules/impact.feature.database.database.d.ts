// requires impact.base.loader
// requires game.config

export {};

declare global {
  namespace ig {
    namespace Database {
      interface Data {
        areas: { [name: string]: sc.MapModel.Area };
        enemies: { [id: string]: EnemyData };
        shops: { [id: string]: sc.ShopModel };
      }

      interface EnemyData {
        name: ig.LangLabel.Data;
        species: ig.LangLabel.Data;
        descriptions: EnemyDescriptionBlock[];
        boostedLevel: number;
        boss: boolean;
      }

      interface EnemyDescriptionBlock {
        text: ig.LangLabel.Data;
        condition?: string | null;
      }
    }
    interface Database extends ig.SingleLoadable {
      data: ig.Database.Data;

      get<K extends keyof ig.Database['data']>(this: this, key: K): ig.Database['data'][K];
      get(this: this, key: string): unknown;
      onload(this: this, data: ig.Database.Data): void;
    }
    interface DatabaseConstructor extends ImpactClass<Database> {
      new (): Database;
    }
    var Database: DatabaseConstructor;
    var database: Database;
  }
}
