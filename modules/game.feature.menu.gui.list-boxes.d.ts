import './impact.feature.gui.gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface ButtonListBox extends sc.ScrollPane {
      contentPane: ig.GuiElementBase;
    }
    interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {}
    var ButtonListBox: ButtonListBoxConstructor;
  }
}
