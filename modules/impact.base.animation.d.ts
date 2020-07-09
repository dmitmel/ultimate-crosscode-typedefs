import './impact.base.loader';
import './impact.base.timer';
import './impact.base.image';
import './impact.base.sprite-fx';

export {};

declare global {
  namespace ig {
    interface AnimationState extends ig.Class {
      timer: number;
    }
    interface AnimationStateConstructor extends ImpactClass<AnimationState> {
      new (): AnimationState;
    }
    var AnimationState: AnimationStateConstructor;
  }
}
