// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface NewGameToggleSet extends ig.GuiElementBase {}
    interface NewGameToggleSetConstructor extends ImpactClass<NewGameToggleSet> {}
    var NewGameToggleSet: NewGameToggleSetConstructor;

    interface NewGameOptionButton extends sc.ListBoxButton {
      data: { id: string; description: string };

      set: sc.NewGameToggleSet.SetOptions;

      updateToggleState(this: this): void;
    }
    interface NewGameOptionButtonConstructor extends ImpactClass<NewGameOptionButton> {
      new (
        name: string,
        amount: number,
        id: string,
        description: string,
        setKey: string,
        setOptions: sc.NewGameToggleSet.SetOptions,
        setGui: sc.NewGameToggleSet,
      ): NewGameOptionButton;
    }
    var NewGameOptionButton: NewGameOptionButtonConstructor;
  }
}
