import './impact.feature.storage.storage';
import './impact.base.event';
import './game.feature.menu.map-model';
import './game.feature.model.game-model';

export {};

declare global {
  namespace sc {
    enum PARTY_MEMBER_TYPE {
      UNKNOWN,
      CONTACT,
      FRIEND,
    }

    namespace PartyModel {
      interface Contact {
        status: sc.PARTY_MEMBER_TYPE;
        online: boolean;
        locked: boolean;
      }
    }
    interface PartyModel extends ig.GameAddon, sc.Model {
      contacts: { [name: string]: sc.PartyModel.Contact };
      isPartyMember(this: this, name: string): boolean;
    }
    interface PartyModelConstructor extends ImpactClass<PartyModel> {}
    var PartyModel: PartyModelConstructor;
    var party: sc.PartyModel;
  }
}
