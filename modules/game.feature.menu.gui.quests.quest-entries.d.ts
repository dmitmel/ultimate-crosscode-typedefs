// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface SubTaskEntryBase extends ig.BoxGui {
      textGui: sc.TextGui;
    }
    interface SubTaskEntryBaseConstructor extends ImpactClass<SubTaskEntryBase> {
      new (
        quest: sc.Quest,
        taskIndex: number,
        subTaskIndex: number,
        subTask?: sc.QuestSubTaskBase,
      ): SubTaskEntryBase;
    }
    var SubTaskEntryBase: SubTaskEntryBaseConstructor;

    interface TaskEntry extends ig.GuiElementBase {
      _subtasks: sc.SubTaskEntryBase[];

      setTask(
        this: this,
        taskIndex?: number,
        quest?: sc.Quest,
        hide?: boolean,
        large?: boolean,
        minimize?: boolean,
      ): void;
    }
    interface TaskEntryConstructor extends ImpactClass<TaskEntry> {}
    var TaskEntry: TaskEntryConstructor;
  }
}
