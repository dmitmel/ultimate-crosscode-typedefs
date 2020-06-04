// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.options.options-misc.d.ts
// requires game.feature.model.options-model.d.ts

declare namespace sc {
  namespace OPTION_GUIS_DEFS {
    interface BUTTON_GROUP extends ig.GuiElementBase {}
    interface BUTTON_GROUP_CONSTRUCTOR extends ImpactClass<BUTTON_GROUP> {}

    interface ARRAY_SLIDER extends ig.GuiElementBase {}
    interface ARRAY_SLIDER_CONSTRUCTOR extends ImpactClass<ARRAY_SLIDER> {}

    interface OBJECT_SLIDER extends ig.GuiElementBase {}
    interface OBJECT_SLIDER_CONSTRUCTOR extends ImpactClass<OBJECT_SLIDER> {}

    interface CHECKBOX extends ig.GuiElementBase {
      button: sc.CheckboxGui;
    }
    interface CHECKBOX_CONSTRUCTOR extends ImpactClass<CHECKBOX> {}

    interface CONTROLS extends ig.GuiElementBase {}
    interface CONTROLS_CONSTRUCTOR extends ImpactClass<CONTROLS> {}

    interface LANGUAGE extends ig.GuiElementBase {}
    interface LANGUAGE_CONSTRUCTOR extends ImpactClass<LANGUAGE> {}
  }
  var OPTION_GUIS: [
    sc.OPTION_GUIS_DEFS.BUTTON_GROUP_CONSTRUCTOR,
    sc.OPTION_GUIS_DEFS.ARRAY_SLIDER_CONSTRUCTOR,
    sc.OPTION_GUIS_DEFS.OBJECT_SLIDER_CONSTRUCTOR,
    sc.OPTION_GUIS_DEFS.CHECKBOX_CONSTRUCTOR,
    sc.OPTION_GUIS_DEFS.CONTROLS_CONSTRUCTOR,
    sc.OPTION_GUIS_DEFS.LANGUAGE_CONSTRUCTOR,
  ];

  interface OptionInfoBox extends ig.GuiElementBase {
    text: sc.TextGui;
    box: sc.CenterBoxGui;
  }
  interface OptionInfoBoxConstructor extends ImpactClass<OptionInfoBox> {
    new (option: sc.OptionDefinition.INFO, width: number): OptionInfoBox;
  }
  var OptionInfoBox: OptionInfoBoxConstructor;

  interface OptionRow extends ig.GuiElementBase {
    option: sc.OptionDefinition;
    nameGui: sc.TextGui;
    typeGui:
      | sc.OPTION_GUIS_DEFS.BUTTON_GROUP
      | sc.OPTION_GUIS_DEFS.ARRAY_SLIDER
      | sc.OPTION_GUIS_DEFS.OBJECT_SLIDER
      | sc.OPTION_GUIS_DEFS.CHECKBOX
      | sc.OPTION_GUIS_DEFS.CONTROLS
      | sc.OPTION_GUIS_DEFS.LANGUAGE;
    _hasEntered: boolean;
  }
  interface OptionRowConstructor extends ImpactClass<OptionRow> {
    new (
      option: string,
      row: number,
      rowGroup: sc.RowButtonGroup,
      local?: boolean,
      width?: number,
      height?: number,
    ): OptionRow;
  }
  var OptionRow: OptionRowConstructor;
}
