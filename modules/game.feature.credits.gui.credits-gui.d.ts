// requires game.feature.gui.base.boxes.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.base.image.d.ts
// requires impact.base.lang.d.ts
// requires game.feature.gui.base.boxes.d.ts
// requires game.feature.credits.credit-loadable.d.ts
// requires game.feature.gui.base.text.d.ts

declare namespace ig {
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
