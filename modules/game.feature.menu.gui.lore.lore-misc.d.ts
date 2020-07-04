// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface LoreInfoBox extends ig.BoxGui {
    title: sc.TextGui;
    category: sc.TextGui;
    alternativeArrow: ig.ImageGui;
    alternative: sc.TextGui;
    scrollContainer: sc.ScrollPane;
    focus: boolean;

    setLore(this: this, key: string): void;
  }
  interface LoreInfoBoxConstructor extends ImpactClass<LoreInfoBox> {
    new (): LoreInfoBox;
  }
  var LoreInfoBox: LoreInfoBoxConstructor;

  interface LoreEntryButton extends sc.ListBoxButton {}
  interface LoreEntryButtonConstructor extends ImpactClass<LoreEntryButton> {}
  var LoreEntryButton: LoreEntryButtonConstructor;
}
