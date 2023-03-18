// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export { };

declare global {
  namespace sc {
    var BUTTON_DEFAULT_WIDTH: number;
    var BUTTON_SOUND: { [name: string]: ig.Sound };

    interface Highlight {
      startX: number;
      endX: number;
      leftWidth: number;
      rightWidth: number;
      offsetY: number;
      gfx: ig.Image;
      pattern: ig.ImagePattern;
    }

    interface ButtonHighlightGui extends ig.GuiElementBase {
      focusWeight: number;
      gfx: ig.Image;
      pattern: ig.ImagePattern;
      flipped: boolean;
      highlight: sc.Highlight;
    }

    interface ButtonHighlightGuiCon extends ImpactClass<ButtonHighlightGui> {
      new(width: number, type: sc.ButtonGui.Type): ButtonHighlightGui;
    }

    let ButtonHighlightGui: ButtonHighlightGuiCon;

    interface ButtonBgGui extends ig.BoxGui {

    }

    interface ButtonBgGuiCon extends ImpactClass<ButtonBgGui> {
      new(width: number, type: sc.ButtonGui.Type): ButtonBgGui;
    }

    let ButtonBgGui: ButtonBgGuiCon;

    namespace ButtonGui {
      interface Type {
        alignXPadding?: number;
      }
    }

    interface ButtonGui extends ig.FocusGui {
      text: sc.TextLike;
      buttonType: sc.ButtonGui.Type;
      textChild: sc.TextGui;
      data?: unknown;
      submitSound: ig.Sound;

      setWidth(this: this, width: number): void;
      setText(this: this, text: sc.TextLike, ignoreWidth?: boolean): void;
      getButtonText(this: this): string;
    }
    
    interface ButtonGuiConstructor extends ImpactClass<ButtonGui> {
      new(
        text: sc.TextLike,
        width?: number,
        active?: boolean,
        type?: sc.ButtonGui.Type,
        submitSound?: ig.Sound,
        keepPressed?: boolean,
        blockedSound?: ig.Sound,
      ): ButtonGui;
    }
    var ButtonGui: ButtonGuiConstructor;

    interface CheckboxGui extends sc.ButtonGui { }
    interface CheckboxGuiConstructor extends ImpactClass<CheckboxGui> { }
    var CheckboxGui: CheckboxGuiConstructor;

    var BUTTON_TYPE: { [type: string]: ButtonGui.Type };
  }
}
