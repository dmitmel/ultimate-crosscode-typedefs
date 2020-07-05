import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.quests.quest-misc';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.item.item-sort-menu';

export {};

declare global {
  namespace sc {
    interface QuestListBox extends ig.GuiElementBase {}
    interface QuestListBoxConstructor extends ImpactClass<QuestListBox> {}
    var QuestListBox: QuestListBoxConstructor;
  }
}
