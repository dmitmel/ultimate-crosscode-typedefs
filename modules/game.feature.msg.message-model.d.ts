// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires impact.feature.interact.interact
// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface MessageModel extends ig.GameAddon, sc.Model {
      showMessage(this: this, personName: string, message: string, autoContinue: boolean): void;
      setExpression(this: this, personName: string, expression: sc.CharacterExpression): void;
    }
    interface MessageModelConstructor extends ImpactClass<MessageModel> {}
    var MessageModel: MessageModelConstructor;
    var message: sc.MessageModel;
  }
}
