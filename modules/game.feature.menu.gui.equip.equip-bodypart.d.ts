// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.equip.equip-misc
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace EquipBodyPartContainer {
      interface Entry extends ig.GuiElementBase {
        numberGfx: ig.Image;
        button: sc.BodyPartButton;
        level: number;
        isScalable: boolean;
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
