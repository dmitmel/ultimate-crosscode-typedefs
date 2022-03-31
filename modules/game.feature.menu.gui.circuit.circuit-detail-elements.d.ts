// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.interact
// requires game.feature.font.font-system
// requires game.feature.menu.gui.circuit.circuit-misc
// requires game.feature.menu.gui.menu-misc
// requires game.feature.model.options-model
// requires game.feature.skills.skills

export {};

declare global {
  namespace sc {
    interface CircuitNodeMenu extends sc.MenuPanel {
      activate: sc.ButtonGui;
    }
    interface CircuitNodeMenuConstructor extends ImpactClass<CircuitNodeMenu> {
      new (scrollHook: ig.GuiHook): CircuitNodeMenu;
    }
    var CircuitNodeMenu: CircuitNodeMenuConstructor;

    interface CircuitInfoBox extends sc.MenuPanel {
      header: sc.TextGui;
      special: sc.TextGui;
    }
    interface CircuitInfoBoxConstructor extends ImpactClass<CircuitInfoBox> {
      new (scrollHook: ig.GuiHook): CircuitInfoBox;
    }
    var CircuitInfoBox: CircuitInfoBoxConstructor;
  }
}
