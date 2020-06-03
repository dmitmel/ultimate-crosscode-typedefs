// requires impact.feature.gui.gui.d.ts
// requires game.feature.gui.plug-in.d.ts
// requires game.feature.menu.gui.equip.equip-misc.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
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
