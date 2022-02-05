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
        }
    
        interface Vars extends ig.Class {
            storage: Vars.KnownVars;
    
            init(this: this): void;
    
            get(this: this, variable: string): Vars.CCVar;
            get<K extends Vars.CCVar>(this: this, variable: string): K;
    
            setDefault(this: this, variable: string, value: Vars.CCVar): void;
            set(this: this, variable: string, value: Vars.CCVar): void;
            add(this: this, variable: string, value: Vars.CCVar): void;
            sub(this: this, variable: string, value: Vars.CCVar): void;
            mul(this: this, variable: string, value: Vars.CCVar): void;
            div(this: this, variable: string, value: Vars.CCVar): void;
            mod(this: this, variable: string, value: Vars.CCVar): void;
            and(this: this, variable: string, value: Vars.CCVar): void;
            or(this: this, variable: string, value: Vars.CCVar): void;
            xor(this: this, variable: string, value: Vars.CCVar): void;
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