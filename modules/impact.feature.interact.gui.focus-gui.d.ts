// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface FocusGui extends ig.GuiElementBase {
      focus: boolean;
      active: boolean;
      keepPressed: boolean;
      pressed: boolean;
      data?: any;

      onButtonPress(this: this): void;
      focusGained(this: this): void;
      focusLost(this: this): void;
      invokeButtonPress(this: this): void;
      canPlayFocusSounds(this: this): boolean;
    }
    interface FocusGuiConstructor extends ImpactClass<FocusGui> {}
    var FocusGui: FocusGuiConstructor;
  }
}
