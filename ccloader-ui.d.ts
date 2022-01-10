export {};

declare global {
  namespace sc {
    enum OPTION_CATEGORY {
      MODS = 8,
    }

    namespace OptionsTabBox {
      interface Tabs {
        mods: sc.ItemTabbedBox.TabButton;
      }
    }

    interface OptionRow {
      modIconGfx: ig.Image | null | undefined;
      modIconFallbackGfx: ig.Image;
      modIconPosX: number;
      modIconPosY: number;
      slopeGui: ig.ImageGui;
      lineGui: ig.ColorGui;
    }
    interface OptionDefinitionCommon {
      mod?: modloader.Mod | null;
      modIcon?: boolean | null;
    }

    namespace OPTIONS_DEFINITION {
      interface KnownTypesMap {
        'logLevel-log': sc.OptionDefinition.CHECKBOX;
        'logLevel-warn': sc.OptionDefinition.CHECKBOX;
        'logLevel-error': sc.OptionDefinition.CHECKBOX;
        'mods-description': sc.OptionDefinition.INFO;
      }
    }

    interface CCLoaderVersionGuiMixin {
      ccloaderVersionGui: sc.TextGui;
    }
    interface TitleScreenGui extends CCLoaderVersionGuiMixin {}
    interface PauseScreenGui extends CCLoaderVersionGuiMixin {}
  }
}
