import './impact.base.timer';
import './impact.base.image';
import './impact.base.vars';

export {};

declare global {
  namespace ig {
    interface System extends ig.Class {
      width: number;
      height: number;
      tick: number;
      actualTick: number;
      context: CanvasRenderingContext2D;

      setFocusLost(this: this): void;
      regainFocus(this: this): void;
      addFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      removeFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      getBufferContext(this: this, buffer: HTMLCanvasElement): CanvasRenderingContext2D;
      error(this: this, error: Error): void;
    }
    interface SystemConstructor extends ImpactClass<System> {}
    var System: SystemConstructor;
    var system: ig.System;
  }
}
