import './impact.feature.gui.gui';

export {};

declare global {
  namespace ig {
    interface FocusGui extends ig.GuiElementBase {
      focus: boolean;
      active: boolean;
      keepPressed: boolean;
      pressed: boolean;

      onButtonPress(this: this): void;
    }
    interface FocusGuiConstructor extends ImpactClass<FocusGui> {}
    var FocusGui: FocusGuiConstructor;
  }
}
