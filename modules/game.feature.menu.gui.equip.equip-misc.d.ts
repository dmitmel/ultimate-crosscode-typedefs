// requires impact.feature.gui.gui.d.ts
// requires game.feature.gui.plug-in.d.ts

declare namespace sc {
  interface BodyPartButton extends sc.ButtonGui {}
  interface BodyPartButtonConstructor extends ImpactClass<BodyPartButton> {}
  var BodyPartButton: BodyPartButtonConstructor;
}
