import './dom.ready';
import './impact.base.image';
import './impact.base.font';
import './impact.base.sound';
import './impact.base.loader';
import './impact.base.system';
import './impact.base.input';
import './impact.base.vars';
import './impact.base.lang';

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
