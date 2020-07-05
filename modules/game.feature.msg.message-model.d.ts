import './impact.base.game';
import './impact.feature.storage.storage';
import './game.feature.model.base-model';
import './impact.feature.interact.interact';
import './impact.feature.interact.button-interact';

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
