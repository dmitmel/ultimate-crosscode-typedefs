// requires impact.base.timer.d.ts
// requires impact.base.image.d.ts
// requires impact.base.vars.d.ts

declare namespace ig {
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
