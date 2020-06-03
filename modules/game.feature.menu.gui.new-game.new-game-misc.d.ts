// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface NewGameToggleSet extends ig.GuiElementBase {}
  interface NewGameToggleSetConstructor extends ImpactClass<NewGameToggleSet> {}
  var NewGameToggleSet: NewGameToggleSetConstructor;

  interface NewGameOptionButton extends sc.ListBoxButton {
    data: { id: string; description: string };

    set: sc.NewGameToggleSet.SetOptions;

    updateToggleState(this: this): void;
  }
  interface NewGameOptionButtonConstructor
    extends ImpactClass<NewGameOptionButton> {
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
