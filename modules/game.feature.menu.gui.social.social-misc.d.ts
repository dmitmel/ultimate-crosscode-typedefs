import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.item.item-status-default';
import './game.feature.msg.gui.side-message-hud';
import './game.feature.menu.gui.enemies.enemy-pages';

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
