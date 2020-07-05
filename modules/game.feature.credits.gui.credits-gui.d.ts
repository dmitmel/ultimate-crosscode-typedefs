import './game.feature.gui.base.boxes';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.base.image';
import './impact.base.lang';
import './game.feature.credits.credit-loadable';
import './game.feature.gui.base.text';

export {};

declare global {
  namespace ig {
    namespace GUI {
      interface CreditSection extends ig.GuiElementBase {
        content: ig.GuiElementBase;
        finished: boolean;
        isOffscreen: boolean;

        remove(this: this): void;
        createHeader(
          this: this,
          text: ig.LangLabel.Data | string,
          pos: Vec2,
          namesEmpty: boolean,
        ): void;
        createNames(
          this: this,
          names: Array<ig.LangLabel.Data | string>,
          columns: number,
          columnGuis: ig.GuiElementBase[],
          pos: Vec2,
        ): void;
      }
      interface CreditSectionConstructor extends ImpactClass<CreditSection> {}
      var CreditSection: CreditSectionConstructor;
    }
  }
}
