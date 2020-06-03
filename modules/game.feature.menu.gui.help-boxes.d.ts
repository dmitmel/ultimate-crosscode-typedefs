// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.gui.base.boxes.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface MultiPageBoxGui extends ig.GuiElementBase {
    header: sc.TextGui;

    _createInitContent(this: this, width: number): void;
  }
  interface MultiPageBoxGuiConstructor extends ImpactClass<MultiPageBoxGui> {}
  var MultiPageBoxGui: MultiPageBoxGuiConstructor;
}
