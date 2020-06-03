// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.interact.interact.d.ts
// requires game.feature.font.font-system.d.ts
// requires game.feature.menu.gui.circuit.circuit-misc.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.model.options-model.d.ts
// requires game.feature.skills.skills.d.ts

declare namespace sc {
  interface CircuitNodeMenu extends sc.MenuPanel {
    activate: sc.ButtonGui;
  }
  interface CircuitNodeMenuConstructor extends ImpactClass<CircuitNodeMenu> {
    new (scrollHook: ig.GuiHook): CircuitNodeMenu;
  }
  var CircuitNodeMenu: CircuitNodeMenuConstructor;

  interface CircuitInfoBox extends sc.MenuPanel {
    special: sc.TextGui;
  }
  interface CircuitInfoBoxConstructor extends ImpactClass<CircuitInfoBox> {
    new (scrollHook: ig.GuiHook): CircuitInfoBox;
  }
  var CircuitInfoBox: CircuitInfoBoxConstructor;
}
