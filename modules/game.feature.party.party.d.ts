// requires impact.feature.storage.storage.d.ts
// requires impact.base.event.d.ts
// requires game.feature.menu.map-model.d.ts
// requires game.feature.model.game-model.d.ts

declare namespace sc {
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
