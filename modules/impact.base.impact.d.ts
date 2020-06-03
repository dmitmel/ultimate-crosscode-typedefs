// requires dom.ready.d.ts
// requires impact.base.image.d.ts
// requires impact.base.font.d.ts
// requires impact.base.sound.d.ts
// requires impact.base.loader.d.ts
// requires impact.base.system.d.ts
// requires impact.base.input.d.ts
// requires impact.base.sound.d.ts
// requires impact.base.vars.d.ts
// requires impact.base.lang.d.ts

declare namespace ig {
  var mainLoader: ig.Loader;
  function main(
    canvasId: string,
    inputDomId: string,
    gameClass: ig.Game,
    fps: number,
    width: number,
    height: number,
    scale: number,
    loaderClass: ig.Loader,
  ): void;
}
