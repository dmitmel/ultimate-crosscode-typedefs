import './game.feature.combat.entities.projectile';
import './game.feature.combat.model.ball-behavior';
import './game.feature.combat.model.proxy';
import './game.constants';
import './impact.feature.effect.effect-sheet';
import './impact.base.entity';
import './impact.feature.light.light';

export {};

declare global {
  namespace sc.PROXY_TYPE {
    type BALL = sc.BallInfo;
    var BALL: typeof sc.BallInfo;
  }

  namespace sc {
    // TODO data
    interface BallInfo extends sc.ProxySpawnerBase {
      data: any;
    }
    interface BallInfoConstructor extends ImpactClass<BallInfo> {
      new (data: any): BallInfo;
    }
    var BallInfo: BallInfo;
  }

  namespace ig.ENTITY {
    interface Ball extends ig.ENTITY.Projectile {}
    interface BallConstructor extends ImpactClass<Ball> {}
    var Ball: BallConstructor;
  }
}
