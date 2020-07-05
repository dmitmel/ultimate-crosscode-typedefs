import './impact.base.game';
import './impact.base.vars';

export {};

declare global {
  namespace ig {
    namespace Greenworks {
      type Step = 'loaded' | 'initialized' | 'activated' | 'cleared';
    }
    interface Greenworks extends ig.GameAddon {
      // TODO: TS defs for greenworks, see https://github.com/greenheartgames/greenworks/tree/master/docs
      // this is absolutely not critical though, maybe even useless
      greenworks: any;
      steps: Greenworks.Step[];

      isActive(this: this): boolean;
      hasSteamStartArgument(this: this): boolean;
      activateAchievement(
        this: this,
        achievement: string,
        clearAfterwards: boolean, // ???
      ): void;
      clearAchievement(this: this, achievement: string): void;
    }
    interface GreenworksConstructor extends ImpactClass<Greenworks> {
      new (): Greenworks;
    }
    var Greenworks: GreenworksConstructor;
    var greenworks: Greenworks;
  }
}
