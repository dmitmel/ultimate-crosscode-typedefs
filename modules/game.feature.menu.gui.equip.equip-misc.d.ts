import './impact.feature.gui.gui';
import './game.feature.gui.plug-in';

export {};

declare global {
  namespace sc {
    interface BodyPartButton extends sc.ButtonGui {}
    interface BodyPartButtonConstructor extends ImpactClass<BodyPartButton> {}
    var BodyPartButton: BodyPartButtonConstructor;
  }
}
