// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-status-default
// requires game.feature.msg.gui.side-message-hud
// requires game.feature.menu.gui.enemies.enemy-pages

export {};

declare global {
  namespace sc {
    interface SocialInfoBox extends ig.BoxGui {
      equip: ig.GuiElementBase;

      setCharacter(this: this, id: string): void;
      createEquipEntry(
        this: this,
        itemID: sc.Inventory.ItemID,
        y: number,
        bodypart: sc.MENU_EQUIP_BODYPART_STR,
      ): number;
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
}
