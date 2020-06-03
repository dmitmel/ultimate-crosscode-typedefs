// requires impact.feature.gui.gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface ButtonListBox extends sc.ScrollPane {
    contentPane: ig.GuiElementBase;
  }
  interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {}
  var ButtonListBox: ButtonListBoxConstructor;
}
