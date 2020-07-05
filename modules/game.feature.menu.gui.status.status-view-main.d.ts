import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
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
}
