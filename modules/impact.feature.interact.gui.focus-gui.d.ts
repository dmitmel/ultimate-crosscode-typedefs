// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface FocusGui extends ig.GuiElementBase {
      focus: boolean;
      active: boolean;
      keepPressed: boolean;
      pressed: boolean;

      focusGained(this: this): void;
      focusLost(this: this): void;
      invokeButtonPress(this: this): void;
      onButtonPress(this: this): void;
      canPlayFocusSounds(this: this): boolean;
      setActive(this: this, active: boolean): void;
    }
    interface FocusGuiConstructor extends ImpactClass<FocusGui> {}
    var FocusGui: FocusGuiConstructor;
  }
}
