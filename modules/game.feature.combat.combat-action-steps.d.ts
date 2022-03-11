// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.combat.entities.drop
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.entities.combat-proxy
// requires impact.feature.effect.effect-steps
// requires game.feature.combat.combat-sweep

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_TEMP_TARGET {
        interface Settings {
          kind:
            | 'PLAYER'
            | 'PARTY_0'
            | 'PARTY_1'
            | 'COLLAB_ENTITY'
            | 'COLLAB_LABELED_ENTITY'
            | 'CLOSEST_ENEMY'
            | 'GUARDED_ATTACKER'
            | 'FIRST_HIT'
            | 'PROXY_OWNER'
            | 'ENEMY_OWNER'
            | 'ENEMY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC'
            | 'ACTION_PROXY'
            | 'PROXY'
            | 'PROXY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC_ACTION_PROXY'
            | 'NAMED_ENTITY'
            | 'ATTRIB_ENTITY'
            | 'THREAT'
            | 'ENTITY_VIA_ID'
            | 'PART_TARGET_ROOT';
          key: string;
        }
      }
      interface SET_TEMP_TARGET extends ig.ActionStepBase {
        kind: (combatant: sc.BasicCombatant, key?: string) => sc.BasicCombatant;
      }
      interface SET_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_TEMP_TARGET> {
        new (settings: SET_TEMP_TARGET.Settings): SET_TEMP_TARGET;
      }
      var SET_TEMP_TARGET: SET_TEMP_TARGET_CONSTRUCTOR;
    }
  }
}
