import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.interact.interact';
import './game.feature.font.font-system';
import './game.feature.menu.gui.circuit.circuit-misc';
import './game.feature.menu.gui.menu-misc';
import './game.feature.model.options-model';
import './game.feature.skills.skills';

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
      special: sc.TextGui;
    }
    interface CircuitInfoBoxConstructor extends ImpactClass<CircuitInfoBox> {
      new (scrollHook: ig.GuiHook): CircuitInfoBox;
    }
    var CircuitInfoBox: CircuitInfoBoxConstructor;
  }
}
