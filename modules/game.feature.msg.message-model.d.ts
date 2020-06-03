// requires impact.base.game.d.ts
// requires impact.feature.storage.storage.d.ts
// requires game.feature.model.base-model.d.ts
// requires impact.feature.interact.interact.d.ts
// requires impact.feature.interact.button-interact.d.ts

declare namespace sc {
  interface MessageModel extends ig.GameAddon, sc.Model {
    showMessage(
      this: this,
      personName: string,
      message: string,
      autoContinue: boolean,
    ): void;
    setExpression(
      this: this,
      personName: string,
      expression: sc.CharacterExpression,
    ): void;
  }
  interface MessageModelConstructor extends ImpactClass<MessageModel> {}
  var MessageModel: MessageModelConstructor;
  var message: sc.MessageModel;
}
