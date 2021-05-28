// requires dom.ready
// requires impact.base.image
// requires impact.base.font
// requires impact.base.sound
// requires impact.base.loader
// requires impact.base.system
// requires impact.base.input
// requires impact.base.vars
// requires impact.base.lang

export {};

declare global {
  namespace ig {
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
}
