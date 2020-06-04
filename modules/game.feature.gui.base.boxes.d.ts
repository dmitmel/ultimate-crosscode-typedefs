// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts

declare namespace sc {
  interface BlackWhiteBox extends ig.BoxGui {}
  interface BlackWhiteBoxConstructor extends ImpactClass<BlackWhiteBox> {}
  var BlackWhiteBox: BlackWhiteBoxConstructor;

  interface CenterBoxGui extends ig.GuiElementBase {}
  interface CenterBoxGuiConstructor extends ImpactClass<CenterBoxGui> {}
  var CenterBoxGui: CenterBoxGuiConstructor;
}
