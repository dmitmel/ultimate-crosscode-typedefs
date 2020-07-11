import './impact.base.loader';
import './game.config';
import './game.feature.inventory.item-level-scaling';

export {};

declare global {
  namespace sc {
    namespace Inventory {
      interface Item {
        // TODO
      }
    }
  }
}
