// requires impact.base.game

export {};

declare global {
    namespace ig {
        let MAP_STYLES: Record<string, MapStyle.MapStyleEntry>;
        namespace MapStyle {
            namespace MapStyleType {
                namespace Map {
                    interface TeleportField {
                        x: number;
                        y: number;
                        xCount: number;
                        zHeight: number;
                    }
                    interface DoorGlow {
                        x: number;
                        y: number;
                        xCount: number;
                    }
                    interface DoorVariation {
                        x: number;
                        y: number;
                        doorMat: boolean;
                    }
                }
                interface Map {
                    sheet: string;
                    hasDoorMat: boolean;
                    teleportField: Map.TeleportField;
                    doorGlow?: Map.DoorGlow;
                    doorVariations?: Record<string, Map.DoorVariation>;
                }

                interface Puzzle {
                    sheet: string;
                }

                interface Puzzle2 {
                    sheet: string;
                }

                namespace Walls {
                    interface Colors {
                        blockFront: string;
                        blockTop: string;
                        pBlockFront: string;
                        pBlockTop: string;
                        npBlockFront: string;
                        npBlockTop: string;
                    }
                }
                interface Walls {
                    colors: Walls.Colors;
                }
            }
            interface MapStyleTypes {
                map: MapStyleType.Map;
                puzzle: MapStyleType.Puzzle;
                puzzle2: MapStyleType.Puzzle2;
                walls: MapStyleType.Walls;
            }

            type MapStyleEntry = PartialRecord<string, MapStyleTypes>;
        }
        interface MapStyle extends ig.GameAddon {}
        interface MapStyleConstructor extends ImpactClass<MapStyle> {
            new (): MapStyle;

            registerStyle<K extends keyof MapStyle.MapStyleTypes>(name: string, contentType: K, data: MapStyle.MapStyleTypes[K]): void;
        }
        let MapStyle: MapStyleConstructor;
    }
}