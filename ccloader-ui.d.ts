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
      modVersionGui: sc.TextGui;
      slopeGui: ig.ImageGui;
      lineGui: ig.ColorGui;
    }
    interface OptionDefinitionCommon {
      mod?: modloader.Mod | null;
    }

    namespace OPTIONS_DEFINITION {
      interface KnownTypesMap {
        'logLevel-log': sc.OptionDefinition.CHECKBOX;
        'logLevel-warn': sc.OptionDefinition.CHECKBOX;
        'logLevel-error': sc.OptionDefinition.CHECKBOX;
        'mods-description': sc.OptionDefinition.INFO;
      }
    }

    interface TitleScreenGui {
      ccloaderVersionGui: sc.TextGui;
    }
    interface PauseScreenGui {
      ccloaderVersionGui: sc.TextGui;
    }
  }
}
