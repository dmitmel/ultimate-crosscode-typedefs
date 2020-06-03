// requires impact.base.font.d.ts
// requires impact.base.game.d.ts
// requires game.feature.combat.stat-change.d.ts

declare namespace sc {
  enum FONT_COLORS {
    RED,
    GREEN,
    PURPLE,
    GREY,
    ORANGE,
  }

  interface FontSystem extends ig.GameAddon {
    font: ig.MultiFont;
    smallFont: ig.MultiFont;
    tinyFont: ig.MultiFont;
  }
  interface FontSystemConstructor extends ImpactClass<FontSystem> {}
  var FontSystem: FontSystemConstructor;
  var fontsystem: sc.FontSystem;
}
