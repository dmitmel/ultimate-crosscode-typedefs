export {};

declare global {
  namespace sc {
    interface QuestSubTaskBase extends ig.Class {}
    interface QuestSubTaskBaseConstructor extends ImpactClass<QuestSubTaskBase> {}
    var QuestSubTaskBase: QuestSubTaskBaseConstructor;

    namespace Quest {
      interface Rewards {
        exp: ExpReward;
        items: ItemReward[];
        money: number;
        cp: number;
      }

      interface ExpReward {
        bonus: number;
        exp: number;
      }

      interface ItemReward {
        id: sc.ItemID;
        amount: number;
      }
    }
    interface Quest extends ig.Class {
      id: string;
      rewards: sc.Quest.Rewards;
      hideRewards: boolean;
    }
    interface QuestConstructor extends ImpactClass<Quest> {}
    var Quest: QuestConstructor;
  }
}
