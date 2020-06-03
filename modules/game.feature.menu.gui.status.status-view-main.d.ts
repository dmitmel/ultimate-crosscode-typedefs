// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  namespace StatusViewMainEquipment {
    interface Entry extends ig.GuiElementBase {
      textGui: sc.TextGui;
      itemGui: sc.TextGui & sc.TextGui.LevelDrawData;
    }
    interface EntryConstructor extends ImpactClass<Entry> {
      new (bodyPart: string): Entry;
    }
    var Entry: EntryConstructor;
  }
}
