import './impact.feature.gui.gui';
import './game.feature.gui.plug-in';
import './game.feature.menu.gui.equip.equip-misc';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    namespace EquipBodyPartContainer {
      interface Entry extends ig.GuiElementBase {
        numberGfx: ig.Image;
        button: sc.BodyPartButton;
        level: number;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (
          bodyPart: string,
          equip: sc.Inventory.Item,
          x: number,
          y: number,
          globalButton: sc.BodyPartButton,
          topY: number,
        ): Entry;
      }
      var Entry: EntryConstructor;
    }
  }
}
