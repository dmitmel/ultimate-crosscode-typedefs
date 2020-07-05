import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
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
}
