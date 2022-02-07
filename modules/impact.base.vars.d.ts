export {};

declare global {
    namespace ig {
        namespace Vars {
            type CCVar = number | boolean | string | LangLabel.Data | Vec2 | Vec3 | undefined | null
    
            type VarStorage = {[key: string]: CCVar | VarStorage}
    
            // a list of known var types 
            interface KnownVars {
                map: Vars.VarStorage
                maps: Vars.VarStorage
                tmp: Vars.VarStorage
                call: Vars.VarStorage
                session: {
                    map: Vars.VarStorage
                    maps: Vars.VarStorage
                }
                plot: Vars.VarStorage & KnownVars.plot 
                [key: string]: Vars.VarStorage
            }
    
            namespace KnownVars {
                interface plot {
                    line?: number
                    metaSpace?: boolean
                }
            }
            interface KnownVarStrings {
                "plot.line": number
                "plot.metaSpace": boolean
            }
        }
    
        interface Vars extends ig.Class {
            storage: Vars.KnownVars;
    
            init(this: this): void;
    
            get(this: this, variable: string): Vars.CCVar;
            get<K extends keyof Vars.KnownVarStrings>(this: this, variable: K): Vars.KnownVarStrings[K];
    
            setDefault(this: this, variable: string, value: Vars.CCVar): void;
            set(this: this, variable: string, value: Vars.CCVar): void;
            set<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            add(this: this, variable: string, value: Vars.CCVar): void;
            add<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            sub(this: this, variable: string, value: Vars.CCVar): void;
            sub<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            mul(this: this, variable: string, value: Vars.CCVar): void;
            mul<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            div(this: this, variable: string, value: Vars.CCVar): void;
            div<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            mod(this: this, variable: string, value: Vars.CCVar): void;
            mod<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            and(this: this, variable: string, value: Vars.CCVar): void;
            and<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            or(this: this, variable: string, value: Vars.CCVar): void;
            or<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;
            xor(this: this, variable: string, value: Vars.CCVar): void;
            xor<K extends keyof Vars.KnownVarStrings>(this: this, variable: K, value: Vars.KnownVarStrings[K]): void;

        }
    
        interface VarsConstructor extends ImpactClass<Vars> {}
        var vars: Vars;
        var Vars: VarsConstructor;
        
        interface VarCondition extends ig.Class {
            code: string;
            pretty: string;
            vars: string[];
            condition: () => any;
            
            init(this: this, condition: string): void;
            setCondition(this: this, condition: string): void;
            evaluate(this: this): boolean;
            toString(this: this): string;
        }
        interface VarConditionConstructor extends ImpactClass<VarCondition> {
            new (condition: string): ig.VarCondition;
        }
        var VarCondition: ig.VarConditionConstructor;
    }
}