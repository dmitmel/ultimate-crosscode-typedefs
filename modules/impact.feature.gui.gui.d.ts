// requires impact.base.image
// requires impact.base.game
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface GuiRenderer extends ig.Class {
      addGfx(
        this: this,
        gfx: ig.Image | ig.ImageAtlasFragment,
        posX: number,
        posY: number,
        srcX: number,
        srcY: number,
        sizeX: number,
        sizeY: number,
        flipX?: boolean,
        flipY?: boolean,
      ): void;
      addColor(
        this: this,
        color: string,
        posX: number,
        posY: number,
        sizeX: number,
        sizeY: number,
      ): ig.GuiDrawable;
      addPattern(
        this: this,
        pattern: ig.ImagePattern,
        posX: number,
        posY: number,
        srcX: number,
        srcY: number,
        sizeX: number,
        sizeY: number,
      ): ig.GuiDrawable;
      addText(this: this, textBlock: ig.TextBlock, posX: number, posY: number): ig.GuiDrawable;

      addTransform(this: this): ig.GuiTransform;
      undoTransform(this: this): void;
    }

    namespace GUI {}

    enum GUI_ALIGN {
      Y_TOP,
      Y_CENTER,
      Y_BOTTOM,
      X_LEFT,
      X_CENTER,
      X_RIGHT,
    }

    namespace GuiHook {
      interface State {
        offsetX: number;
        offsetY: number;
        alpha: number;
        scaleX: number;
        scaleY: number;
        angle: number;
      }

      interface Transition {
        state: Partial<ig.GuiHook.State>;
        time: number;
        timeFunction: KeySpline;
      }

      interface ScreenCoords {
        x: number;
        y: number;
        w: number;
        h: number;
        active: boolean;
        zIndex: number;
      }
    }
    interface GuiHook extends ig.Class {
      pos: Vec2;
      size: Vec2;
      align: { x: ig.GUI_ALIGN; y: ig.GUI_ALIGN };
      children: ig.GuiHook[];
      gui: ig.GuiElementBase;
      transitions: { [name: string]: ig.GuiHook.Transition };
      currentStateName: string;
      screenCoords?: ig.GuiHook.ScreenCoords;

      removeChildHook(this: this, hook: ig.GuiHook): void;
      removeChildHookByIndex(this: this, index: number): ig.GuiHook;
      doStateTransition(
        this: this,
        name: string,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: (() => void) | null,
        initDelay?: number,
      ): void;
      setScale(this: this, scaleX: number, scaleY: number): void;
    }
    interface GuiHookConstructor extends ImpactClass<GuiHook> {}
    var GuiHook: GuiHookConstructor;

    interface GuiDrawable extends ig.Class {
      setAlpha(this: this, alpha: number): this;
      setCompositionMode(this: this, mode: string): this;
    }
    interface GuiDrawableConstructor extends ImpactClass<GuiDrawable> {}
    var GuiDrawable: GuiDrawableConstructor;

    interface GuiTransform extends ig.Class {
      translate: Vec2;
      scale: Vec2;
      rotate: number;
      pivot: Vec2;
      alpha: number;
      clip: Vec2;
      prePos: Vec2;
      preAlpha: number;

      setAlpha(this: this, alpha: number): this;
      setClip(this: this, x: number, y: number): this;
      setTranslate(this: this, x: number, y: number): this;
      setScale(this: this, x: number, y: number): this;
      setRotate(this: this, r: number): this;
      isComplex(this: this): boolean;
      transform(this: this, x: number, y: number): void;
      kill(this: this): void;
      clear(this: this): void;
    }
    interface GuiTransformConstructor extends ImpactClass<GuiTransform> {}
    var GuiTransform: GuiTransformConstructor;

    interface GuiElementBase extends ig.Class {
      hook: ig.GuiHook;

      setPos(this: this, x: number, y: number): void;
      setSize(this: this, w: number, h: number): void;
      setPivot(this: this, x: number, y: number): void;
      setAlign(this: this, x: ig.GUI_ALIGN, y: ig.GUI_ALIGN): void;
      isVisible(this: this): boolean;
      addChildGui(this: this, guiElement: ig.GuiElementBase): void;
      removeChildGui(this: this, guiElement: ig.GuiElementBase): void;
      removeChildGuiByIndex(this: this, index: number): ig.GuiElementBase;
      removeAllChildren(this: this): void;
      update(this: this): void;
      updateDrawables(this: this, renderer: ig.GuiRenderer): void;
      onAttach(this: this, parentHook: ig.GuiHook): void;
      onDetach(this: this): void;
      doStateTransition(
        this: this,
        name: string,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: (() => void) | null,
        initDelay?: number,
      ): void;

      // For whatever reason if I change type of `onVisibilityChange` to field
      // which contains a callback this will confuse the TS compiler and I won't
      // be able to cast children of `ig.GuiElementBase` to the base class.
      // Probably because TS can't upgrade `this` type in sub-interfaces when it
      // is specified in a callback.
      onVisibilityChange?(this: this, visible: boolean): void;
    }
    interface GuiElementBaseConstructor extends ImpactClass<GuiElementBase> {
      new (): GuiElementBase;
    }
    var GuiElementBase: GuiElementBaseConstructor;
  }
}
