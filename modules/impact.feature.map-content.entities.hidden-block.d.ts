import './impact.base.entity';

export {};

declare global {
  namespace ig.ENTITY {
    interface HiddenSkyBlock extends ig.Entity {}
    interface HiddenSkyBlockConstructor extends ImpactClass<HiddenSkyBlock> {}
    var HiddenSkyBlock: HiddenSkyBlockConstructor;
  }
}
