// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    namespace EnemyDisplayGui {
      type LoadedCallback = (gui: sc.EnemyDisplayGui) => void;
    }
    interface EnemyDisplayGui extends ig.GuiElementBase {}
    interface EnemyDisplayGuiConstructor extends ImpactClass<EnemyDisplayGui> {
      new (
        enemyName: string,
        skipIfLoaded?: boolean | null,
        anim?: string | null,
        callback?: sc.EnemyDisplayGui.LoadedCallback | null,
        random?: boolean | null,
        boosted?: boolean | null,
      ): EnemyDisplayGui;
    }
    var EnemyDisplayGui: EnemyDisplayGuiConstructor;
  }
}
