// requires impact.base.loader.d.ts
// requires game.config.d.ts

declare namespace ig {
  namespace Database {
    interface Data {
      areas: { [name: string]: sc.MapModel.Area };
    }
  }
  interface Database extends ig.SingleLoadable {
    data: ig.Database.Data;

    get<K extends keyof ig.Database['data']>(
      this: this,
      key: K,
    ): ig.Database['data'][K];
    get(this: this, key: string): unknown;
    onload(this: this, data: ig.Database.Data): void;
  }
  interface DatabaseConstructor extends ImpactClass<Database> {
    new (): Database;
  }
  var Database: DatabaseConstructor;
  var database: Database;
}
