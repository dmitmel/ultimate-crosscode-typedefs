export {}

declare global {
namespace Vec2 {
    function create(): Vec2
    function clockangle(a: Vec2): Vec2
}

namespace Vec3 {
    function create(): Vec3
}

namespace ig {
    function error(...data: any[]): void

    function getRoundedFaceDir(x: number, y: number, angles: number, d: Vec2): Vec2

    
    namespace Database {
        interface Data {
            shops: Record<string, sc.ShopModel>
        }
    }

    interface ActionConstructor {
        getVec3(a: Vec3, b: ig.ActorEntity, c: Vec3): Vec3
    }

    interface ActorEntity {
        getTarget(): ig.ActorEntity
    }

    namespace ACTION_STEP {
        interface SET_PLAYER_INVINCIBLE extends ActionStepBase {
            factor: number

            run(this: this, target: ig.ENTITY.Player): boolean
        }

        interface SET_PLAYER_INVINCIBLE_CONSTRUCTOR extends ImpactClass<SET_PLAYER_INVINCIBLE> {}

        var SET_PLAYER_INVINCIBLE: SET_PLAYER_INVINCIBLE_CONSTRUCTOR

        
        interface SHOW_FOOD_ICON extends ActionStepBase {
            icon: number
            offset?: number

            init(a: any): void

            start(this: this, target: ig.ENTITY.Combatant): void
        }

        interface SHOW_FOOD_ICON_CONSTRUCTOR extends ImpactClass<SHOW_FOOD_ICON> {}

        var SHOW_FOOD_ICON: SHOW_FOOD_ICON_CONSTRUCTOR
    }
    interface ExtensionList extends SingleLoadable {

    }

    interface ExtensionManager {
        enabled: Record<string, boolean>;
        init(this: this): void;
    }

    interface ExtensionManagerConstructor extends ImpactClass<ExtensionManager> { }

    var ExtensionManager: ExtensionManagerConstructor
    var extensions: ExtensionManager

    interface System {
        ingameTick: number
    }

    namespace ENTITY {
        interface HitNumber extends sc.HitNumberEntityBase {
            spawnHealingNumber(this: this, pos: Vec3, entity: ig.Entity, healAmount: any): void
        }

        var HitNumber: HitNumber

        interface Enemy {
            boosterState: sc.ENEMY_BOOSTER_STATE
            enemyType: sc.EnemyType
            setLevelOverride(this: this, newLevel: number | null): void
        }

        interface Effect {
            target: any
            spriteFilter: any

            spawnParticle(this: this, a: ImpactClass<ig.Entity>, b: any, e: any, f?: any): void
            setIgnoreSlowdown(this: this): void
        }

        interface Combatant {
            invincibleTimer: number
            
            setTarget(target: Entity | null): void
        }

        interface NPC extends sc.ActorEntity {
            interactIcons: Record<string, sc.MapInteractIcon>;
            interactEntry: sc.MapInteractEntry
            init(this: this, a: any, b: unknown, c: unknown, d: unknown): void
            setMapInteractIcon(this: this, npcState: sc.NpcState): void
        }

        interface NPCConstructor extends ImpactClass<NPC> {}

        var NPC: NPCConstructor
    }

    interface Entity {
        setPos(x: number, y: number, z: number): void
    }

    interface CollEntry {
        size: Vec3
    }

    interface EffectStepBase extends Omit<StepBase, "start"> {
        particleData: EFFECT_ENTRY.EffectSettings

        start(this: this, entity: ig.ENTITY.Effect): void
    }
    type EffectStepBaseConstructor = StepBaseConstructor
    var EffectStepBase: EffectStepBaseConstructor

    namespace EFFECT_ENTRY {
        interface EffectSettings {
            particleDuration: number
            noLighter?: boolean,
            offset?: Vec3,
            fadeColor?: string | null
            colorAlpha?: number | null
            mode?: any
        }
    }

    interface EffectSheet extends ig.JsonLoadable {
        spawnOnTarget(this: this, key: string, a: ig.ActorEntity, effectConfig: any): ENTITY.Effect
        spawnFixed(this: this, effectName: string, x: number, y: number, z: number, target: ig.Entity, effectSettings?: ig.EFFECT_ENTRY.EffectSettings): ig.ENTITY.Effect | null
    }

    interface EffectSheetConstructor extends ImpactClass<EffectSheet> {
        new (sheet: string): EffectSheet
    }

    var EffectSheet: EffectSheetConstructor

    interface Config extends ig.Class {
        _data: any,
        init(this: this, a: any): void
        copy(this: this): Config
    }

    interface ConfigConstructor extends ImpactClass<Config> { }

    interface EffectConfig extends ig.Config {
        init(this: this, c: any): void
    }

    interface EffectConfigConstructor extends ImpactClass<EffectConfig> {
        loadParticleData(this: this, a: any, b: ig.EFFECT_ENTRY.EffectSettings, d: any): ig.EFFECT_ENTRY.EffectSettings
    }

    var EffectConfig: EffectConfigConstructor

    namespace SaveSlot {
        interface Data {
            vars: Data.Vars
        }

        namespace Data {
            interface Vars {
                storage: Vars.KnownVars
            }
        }
    }

    interface CubeSprite extends ig.Class {
        setImageSrc(image: ig.Image, offsetX: number, offsetY: number): void
    }

    interface CubeSpriteConstructor extends ImpactClass<CubeSprite> {

    }

    var CubeSprite: CubeSpriteConstructor

    interface TileSheet extends ig.Class {
        width: number
        height: number
        offX: number
        offY: number
        xCount: number
        image: ig.Image

        init(imageSrc: string, width: number, height: number, offX?: number, offY?: number, xCount?: number): void
    }

    interface TileSheetConstructor extends ImpactClass<TileSheet> {
        new (imageSrc: string, width: number, height: number, offX?: number, offY?: number, xCount?: number): TileSheet
    }

    var TileSheet: TileSheetConstructor

    namespace EVENT_STEP {
        namespace EventSettings {
            interface OPEN_SHOP {
                shop: string
            }
        }

        interface OPEN_SHOP {
            shop: string
            init(this: this, settings: EventSettings.OPEN_SHOP): void
            start(this: this): void
        }

        interface OPEN_SHOP_CONSTRUCTOR extends ImpactClass<OPEN_SHOP> {
            new (settings: EventSettings.OPEN_SHOP): OPEN_SHOP
        }

        var OPEN_SHOP: OPEN_SHOP_CONSTRUCTOR
    }

    interface Event extends ig.Class {
        init(this: this, eventSteps: any): void
    }

    interface EventConstructor extends ImpactClass<Event> {
        new (eventSteps: any): ig.Event
    }

    var Event: EventConstructor

    namespace NinePatch {
        interface TileSettings {
            width: number
            height: number
            top: number
            bottom: number
            right: number
            left: number
            offsets: Record<string, Vec2>;
        }
    }

    interface NinePatch extends ig.Class {
        init(this: this, tilesheet: string, tilesettings: NinePatch.TileSettings): void
    }

    interface NinePatchConstructor extends ImpactClass<NinePatch> {
        new (tilesheet: string, tilesettings: NinePatch.TileSettings): ig.NinePatch
    }

    var NinePatch: NinePatchConstructor
}

namespace sc {
    interface ModelMessage { }
    namespace ModelMessage {
        interface PlayerMessage extends ModelMessage {
            ELEMENT_MODE_CHANGE: 1
            CREDIT_CHANGE: 2
            EXP_CHANGE: 3
            LEVEL_CHANGE: 4
            EQUIP_CHANGE: 5
            CP_CHANGE: 6
            SKILL_CHANGED: 7
            SKILL_BRANCH_SWAP: 8
            RESET_PLAYER: 9
            ITEM_OBTAINED: 10
            SET_PARAMS: 11
            CONFIG_CHANGED: 12
            ITEM_USED: 13
            STATS_CHANGED: 14
            ITEM_REMOVED: 15
            ITEM_BLOCK_FINISH: 16
            ITEM_FAVORITES_CHANGED: 17
            ITEM_EQUIP_UPDATE: 18
            ITEM_CONSUME_START: 19
            ITEM_CONSUME_END: 20
            CORE_CHANGED: 21
            ITEM_TOGGLED: 22
        }
    }

    var PLAYER_MSG: ModelMessage.PlayerMessage

    enum SHIELD_RESULT {
        NONE,
        REGULAR,
        PERFECT,
        NEUTRALIZE
    }

    enum STATS_CATEGORY {
        GENERAL,
        COMBAT,
        ITEMS,
        QUESTS,
        EXPLORATION,
        MISC,
        LOG,
        ARENA
    }

    enum FOOD_ICON_STATE {
        HOLD = 0,
        BUBBLE = 1,
        DONE = 2
    }

    var FOOD_SPRITE: Record<string, number>

    interface CrossCode {
        getEntityByName(this: this, name: string): ig.Entity
        getEntitiesByType(this: this, type: ImpactClass<ig.Entity>): ig.Entity[]
    }

    //#region Arena

    //#endregion Arena

    //#region Stats
    interface StatsModel extends ig.GameAddon {
        set(this: this, stat: string, value: number): void
        setMax(this: this, stat: string, value: number): void
        setMin(this: this, stat: string, value: number): void

        add(this: this, stat: string, value: number): void
        subtract(this: this, stat: string, value: number): void

        getMap(this: this, map: string, stat: string): number
        setMap(this: this, map: string, stat: string, value: number): void
        addMap(this: this, map: string, stat: string, value: number): void
        subMap(this: this, map: string, stat: string, value: number): void
    }
    var stats: StatsModel

    interface StatsModelConstructor extends ImpactClass<StatsModel> {
        new(): StatsModel
    }

    var StatsModel: StatsModelConstructor
    namespace Stats {
        type StatItemType = "Percent" | "Separator" | "Time" | "KeyValue" | "KeyCurMax" | "List" | "Logs"

        interface StatItem {
            type?: StatItemType
            subtype?: StatItemType
            displayName?: string
            highlight?: {
                min: number
            } | boolean
            group?: string
            stat?: string
            map?: string
            max?(): number
            getSettings?(a: string): StatItem | null
        }
    }
    type StatCategory = Record<string, Stats.StatItem>

    var STATS_BUILD: StatCategory[]

    enum STAT_CHANGE_TYPE {
        STATS,
        MODIFIER,
        HEAL
    }

    interface StatParamType {
        key: string,
        index?: number
    }

    var STAT_PARAM_TYPE: Record<string, StatParamType>;

    interface StatChangeSetting {
        change: STAT_CHANGE_TYPE
        type: StatParamType
        value: number
        icon: string
        grade: string
    }

    var STAT_CHANGE_SETTINGS: Record<string, StatChangeSetting>
    //#endregion Stats

    //#region Map
    namespace MapModel {
        interface Area {
            path: string
            chests: number
        }
    }

    interface MapModel {
        currentArea: sc.MapModel.Area
        
        init(this: this): void
        isValidArea(this: this, areaName: string): boolean
        getChestCount(this: this, key: string): number
        getTotalChestsFound(this: this, asPercent: boolean): number
        getTotalChests(this: this): number,
        getVisitedArea(this: this, area: string): boolean
        getAreaName(this: this, a?: string, b?: boolean, c?: boolean): string
    }

    interface WorldmapAreaName extends ig.GuiElementBase {
        gfx: ig.Image
        name: sc.MapNameGui
        hasText: boolean
        setText(this: this, a: string, b?: any, c?: any): void
    }

    interface MapNameGui extends ig.BoxGui {

    }

    interface MapWorldMap {
        areaName: WorldmapAreaName
        _setAreaName(this: this, a: any): void
    }

    interface MapWorldMapConstructor extends ImpactClass<MapWorldMap> { }

    interface MapChestDisplay {
        max: sc.NumberGui
        current: sc.NumberGui
        _oldMax: number
        _oldCount: number
        update(this: this): void
    }

    interface MapChestDisplayConstructor extends ImpactClass<MapChestDisplay> { }

    var MapChestDisplay: MapChestDisplayConstructor
    var MapWorldMap: MapWorldMapConstructor
    //#endregion Map


    interface SaveSlotButton {
        chapter: SaveSlotChapter

        setSave(this: this, a: ig.SaveSlot.Data, b: any, c: any): void
    }

    interface SaveSlotChapter extends ig.GuiElementBase {
        metaMarker: ig.ImageGui

        init(this: this): void
    }

    interface SaveSlotChapterConstructor extends ImpactClass<SaveSlotChapter> { }

    var SaveSlotChapter: SaveSlotChapterConstructor

    interface TrophyIcon {
        index: number
        cat: "GENERAL" | "COMBAT" | "EXPLORATION"
        hidden?: boolean
    }

    var TROPHY_ICONS: Record<string, TrophyIcon>

    interface TrophyIconGraphic extends ig.GuiElementBase {
        icon: ig.ImageGui
        ribbon: ig.ImageGui
        points: sc.NumberGui

        init(this: this, icon: string, stars: number, points: number, trophyUnlocked: boolean): void
    }

    interface TrophyIconGraphicConstructor extends ImpactClass<TrophyIconGraphic> { }

    var TrophyIconGraphic: TrophyIconGraphicConstructor


    //#region Attacks
    enum ATTACK_TYPE {
        NONE,
        LIGHT,
        MEDIUM,
        HEAVY,
        MASSIVE,
        BREAK
    }

    interface AttackInfo extends ig.Class {
        type: sc.ATTACK_TYPE
        attackerParams: sc.CombatParams
        damageFactor: number
        defenseFactor: number
        element: sc.ELEMENT
        critFactor: number
    }

    interface AttackInfoConstructor extends ImpactClass<AttackInfo> { }

    var AttackInfo: AttackInfoConstructor

    interface HitNumberEntityBase extends ig.Entity {

    }
    namespace DAMAGE_MODIFIER_FUNCS {
        type DamageModifierFunction = (attackInfo: AttackInfo, damageFactor: number, combatantRoot: ig.ENTITY.Combatant,
            shieldResult: SHIELD_RESULT, hitIgnore: boolean, params: sc.CombatParams) =>
            { attackInfo: AttackInfo, damageFactor: number, applyDamageCallback: (() => void) | null }
    }
    var DAMAGE_MODIFIER_FUNCS: Record<string, DAMAGE_MODIFIER_FUNCS.DamageModifierFunction>;

    
    //#endregion Attacks

    namespace NewGamePlus {
        interface NewGamePlusOption {
            set: string
            cost: number
            disabled?: boolean
            needsSaveFile?: boolean
        }
    }
        
    var NEW_GAME_OPTIONS: Record<string, NewGamePlus.NewGamePlusOption>;

    interface NewGamePlusModel {
        get(this: this, option: string): boolean
        getDropRateMultiplier(this: this): number
    }

    enum GAME_MODEL_SUBSTATE {
        RUNNING = 0,
        TELEPORT = 1,
        LOADING = 2,
        NEWGAME = 3,
        RESET = 4,
        LOADGAME = 5,
        MENU = 6,
        PAUSE = 7,
        LEVELUP = 8,
        QUICK = 9,
        ONMAPMENU = 10,
        QUESTSOLVED = 11,
    }

    interface EnemyInfo {
        boostedLevel: number
        boss: true
    }

    var MIN_BOOSTER_LEVEL: number

    interface EnemyBooster extends ig.GameAddon {
        boosted: boolean

        updateBoosterState(this: this): void
        updateEnemyBoostState(this: this, enemy: ig.ENTITY.Enemy): void

        modelChanged(this: this, source: any, message: ModelMessage): void
    }

    interface EnemyBoosterConstructor extends ImpactClass<EnemyBooster> { }

    var enemyBooster: EnemyBooster
    var EnemyBooster: EnemyBoosterConstructor

    enum ENEMY_BOOSTER_STATE {
        NONE,
        BOOSTABLE,
        BOOSTED
    }

    interface EnemyInfoBox extends ig.BoxGui {
        level: sc.NumberGui
        enemy: EnemyInfo
        setEnemy(this: this, b: any): void
    }

    interface EnemyInfoBoxConstructor extends ImpactClass<EnemyInfoBox> { }

    var EnemyInfoBox: EnemyInfoBoxConstructor

    interface EnemyEntryButton extends sc.ListBoxButton {
        key: any,
        level: sc.NumberGui

        init(this: this, b: any, enemyKey: string, d: any): void
    }

    interface EnemyEntryButtonConstructor extends ImpactClass<EnemyEntryButton> { }

    var EnemyEntryButton: EnemyEntryButtonConstructor

    interface EnemyDisplayGui extends ig.GuiElementBase {
        init(this: this, b: any, a: any, d: any, c: any, e: any, isBoosted: boolean): void
    }

    interface EnemyDisplayGuiConstructor extends ImpactClass<EnemyDisplayGui> { }

    var EnemyDisplayGui: EnemyDisplayGuiConstructor

    interface EnemyPageGeneralInfo extends ig.GuiElementBase {
        drops: EnemyDrops
        setData(this: this, enemyName: string, enemyType: sc.EnemyType, f: boolean, boosted: boolean): void
    }

    interface EnemyPageGeneralInfoConstructor extends ImpactClass<EnemyPageGeneralInfo> { }

    var EnemyPageGeneralInfo: EnemyPageGeneralInfoConstructor

    interface EnemyDrops extends ig.GuiElementBase {
        setDrops(this: this, dropList: EnemyType.ItemDrop[], d: boolean, boosted: boolean): void
    }

    interface EnemyDropsConstructor extends ImpactClass<EnemyDrops> {}

    var EnemyDrops: EnemyDropsConstructor

    interface BasicCombatant {
        isPlayer?: boolean
    }

    interface BaseMenu extends ig.GuiElementBase {
        visible: boolean
        transitions: Record<string, ig.GuiHook.Transition>
        init(this: this): void
        addObservers(this: this): void
        removeObservers(this: this): void
        showMenu(this: this): void
        hideMenu(this: this): void
        exitMenu(this: this): void
    }

    interface BaseMenuConstructor extends ImpactClass<BaseMenu> { }

    var BaseMenu: BaseMenuConstructor

    namespace ShopModel {
        interface ShopPage {
            title: ig.LangLabel.Data
            content: ShopItem[]
        }

        interface ShopItem {
            item: sc.Inventory.ItemID
            condition?: string,
            price?: number
        }
    }

    interface ShopModel {
        name: ig.LangLabel.Data
        shopType: sc.MENU_SHOP_TYPES
        sellScale: number
        maxOwn?: number
        content?: any[][]
        pages: ShopModel.ShopPage[]
    }

    interface ShopListMenu extends MenuPanel {
        
    }

    interface ShopCart extends ig.BoxGui {

    }

    interface ShopCartConstructor extends ImpactClass<ShopCart> {
        
    }

    var ShopCart: ShopCartConstructor

    interface ShopMenu extends BaseMenu {
        cart: sc.ShopCart
        init(this: this): void
    }

    interface ShopMenuConstructor extends ImpactClass<ShopMenu> {
        new (): ShopMenu
    }

    var ShopMenu: ShopMenuConstructor

    interface MenuModel {
        shopID: string

        exitMenu(this: this): void
        setDirectMode(this: this, directMode: boolean, directMenu: sc.MENU_SUBMENU): void
    }

    namespace TradeModel {
        interface TradeItem {
            id: Inventory.ItemID
            amount: number
        }

        interface TradeOption {
            get: TradeItem[]
            require: TradeItem[]
            scale?: number
            cost?: number
        }

        interface Trader {
            name: ig.LangLabel.Data
            order: number
            area: string
            noTrack?: boolean
            options: TradeOption[]
            upgradeTo?: string
            child?: string
        }
    }

    interface TradeModel {
        traders: Record<string, TradeModel.Trader>

        init(this: this): void
    }

    interface Control extends ig.Class {
        moveDir(this: this, b: Vec2, d: number, f?: number): number;
        menuScrollUp(this: this): boolean;
        menuScrollDown(this: this): boolean;
    }

    interface ControlConstructor extends ImpactClass<Control> {}

    var Control: ControlConstructor
    var control: Control

    interface CombatantShieldConnection extends ig.Class {
        perfectGuardTime: number
        init(this: this, a: ig.ENTITY.Combatant, b: unknown, e: number): void
        resetPerfectGuardTime(this: this): void
    }

    interface CombatantShieldConnectionConstructor extends ImpactClass<CombatantShieldConnection> {}

    var CombatantShieldConnection: CombatantShieldConnectionConstructor

    interface NewUnlockButton extends ButtonGui {}

    interface StartMenu extends BaseMenu {
        buttons: {
            quest: ButtonGui,
            skills: ButtonGui,
            equipment: ButtonGui,
            items: ButtonGui,
            status: ButtonGui,
            social: ButtonGui,
            synopsis: NewUnlockButton,
            save: ButtonGui
        }

        showMenu(this: this): void
    }

    interface StartMenuConstructor extends ImpactClass<StartMenu> {

    }

    var StartMenu: StartMenuConstructor

    interface ButtonGui {
        setActive(this: this, state: boolean): void
    }

    namespace FoodIconEntity {
        interface Settings extends ig.Entity.Settings {
            icon: number
            combatant: ig.ENTITY.Combatant
        }
    }

    interface FoodIconEntity extends ig.Entity {
        state: sc.FOOD_ICON_STATE
        sprites: ig.CubeSprite[]
        icon: number

        init(this: this, a: any, b: any, d: any, g: FoodIconEntity.Settings): void
        setState(this: this, state: sc.FOOD_ICON_STATE, offset: number): void
        updateSprites(this: this): void
    }

    interface FoodIconEntityConstructor extends ImpactClass<FoodIconEntity> {
        new (x: number, y: number, z: number, settings: FoodIconEntity.Settings): FoodIconEntity
    }

    var FoodIconEntity: FoodIconEntityConstructor

    interface StatChange extends ig.Class {}

    interface StatChangeConstructor extends ImpactClass<StatChange> {}
    
    var StatChange: StatChangeConstructor

    interface ActionBuff extends sc.StatChange{
        active: boolean
        name: string
        hacked: boolean

        init(this: this, statChanges: string[], name: string, hacked: boolean): void
    }

    interface ActionBuffConstructor extends ImpactClass<ActionBuff> {
        new (statChanges: string[], name: string, hacked: boolean): ActionBuff
    }

    var ActionBuff: ActionBuffConstructor

    interface SubMenuInfo {
        Clazz: ImpactClass<sc.BaseMenu>
        name: string
        alt?: string
    }

    var SUB_MENU_INFO: Record<string | number, SubMenuInfo>;

    namespace EnemyType {
        interface ItemDrop {
            item: sc.Inventory.ItemID
            prob: number
            min: number
            max: number
            rank: "" | "D" | "C" | "B" | "A" | "S"
            boosted?: boolean
            condition?: string
        }
    }

    interface EnemyType {
        level: number
        boss: boolean
        boostedLevel: number
        itemDrops: EnemyType.ItemDrop[]
        resolveItemDrops(this: this, enemyEntity: ig.ENTITY.Enemy): void
    }

    interface ItemDropEntity extends ig.AnimatedEntity {}

    interface ItemDropEntityConstructor extends ImpactClass<ItemDropEntity> {
        spawnDrops(entity: ig.Entity, align: ig.ENTITY_ALIGN, target: ig.Entity, item: sc.Inventory.ItemID, amount: number, dropType: sc.ItemDropType): void
    }

    var ItemDropEntity: ItemDropEntityConstructor

    interface ItemDropType {
            preCollect?: boolean
            fly?: boolean
    }

    var ITEM_DROP_TYPE: Record<string, ItemDropType>

    namespace MapInteractIcon {
        interface interactOptions {
            FOCUS: number[]
            NEAR: number[]
            AWAY?: number[]
            RUNNING?: number[]
        }
    }

    interface MapInteractIcon extends ig.Class {
        init(this: this, tiles: ig.TileSheet, options: MapInteractIcon.interactOptions, frameTime: number): void
    }

    interface MapInteractIconConstructor extends ImpactClass<MapInteractIcon> {
        new (tiles: ig.TileSheet, options: MapInteractIcon.interactOptions, frameTime: number): MapInteractIcon
    }

    var MapInteractIcon: MapInteractIconConstructor

    enum NPC_EVENT_TYPE {
        SIMPLE = 0,
        TRADE = 1,
        QUEST = 2,
        SHOP = 3,
        ARENA = 4
    }

    interface NpcState {
        npcEventType: sc.NPC_EVENT_TYPE,
        npcEventObj: ig.Event
        init(this: this, a: any, b: any): void
    }

    interface NpcStateConstructor extends ImpactClass<NpcState> {}

    var NpcState: NpcStateConstructor

    interface MapInteractEntry extends ig.Class {
        setIcon(this: this, icon: sc.MapInteractIcon): void
    }
}

namespace itemAPI {
    var customItemToId: {[itemID: string]: number}
}
}