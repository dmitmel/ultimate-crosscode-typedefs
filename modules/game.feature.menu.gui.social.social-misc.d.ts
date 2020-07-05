// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.item.item-status-default.d.ts
// requires game.feature.msg.gui.side-message-hud.d.ts
// requires game.feature.menu.gui.enemies.enemy-pages.d.ts

declare namespace sc {
  interface SocialInfoBox extends ig.BoxGui {
    equip: ig.GuiElementBase;

    setCharacter(this: this, id: string): void;
  }
  interface SocialInfoBoxConstructor extends ImpactClass<SocialInfoBox> {}
  var SocialInfoBox: SocialInfoBoxConstructor;

  interface SocialEntryButton extends sc.ListBoxButton {
    gfx2: ig.Image;
    head: sc.SocialHead;
    status: ig.ImageGui;
    key: string;

    updateMemberStatus(this: this): void;
  }
  interface SocialEntryButtonConstructor extends ImpactClass<SocialEntryButton> {
    new (name: string, model: sc.PartyMemberModel): SocialEntryButton;
  }
  var SocialEntryButton: SocialEntryButtonConstructor;

  interface SocialHead extends ig.GuiElementBase {
    active: boolean;
  }
  interface SocialHeadConstructor extends ImpactClass<SocialHead> {}
  var SocialHead: SocialHeadConstructor;
}
