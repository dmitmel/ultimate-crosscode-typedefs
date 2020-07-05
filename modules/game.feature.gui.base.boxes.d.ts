import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';

export {};

declare global {
  namespace sc {
    interface BlackWhiteBox extends ig.BoxGui {}
    interface BlackWhiteBoxConstructor extends ImpactClass<BlackWhiteBox> {}
    var BlackWhiteBox: BlackWhiteBoxConstructor;

    interface CenterBoxGui extends ig.GuiElementBase {}
    interface CenterBoxGuiConstructor extends ImpactClass<CenterBoxGui> {}
    var CenterBoxGui: CenterBoxGuiConstructor;
  }
}
