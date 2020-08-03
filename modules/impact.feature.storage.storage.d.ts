import './impact.base.game';

export {};

declare global {
  namespace ig {
    namespace SaveSlot {
      // TODO see https://crosscode.gamepedia.com/Savegame
      interface Data {
        area: ig.LangLabel.Data;
        floor: ig.LangLabel.Data | 'MISSING LABEL';
        specialMap: ig.LangLabel.Data;
        tradersFound: { [id: string]: Data.TraderFound };
        quests: Data.Quests;
      }

      namespace Data {
        interface TraderFound {
          characterName: string;
          map: ig.LangLabel.Data;
          area: ig.LangLabel.Data;
          time: number;
        }

        interface Quests {
          locale: { [id: string]: Quests.Locale };
        }

        namespace Quests {
          interface Locale {
            time: number;
            location: Locale.Location;
            character: string;
          }

          namespace Locale {
            interface Location {
              area: ig.LangLabel.Data;
              map: ig.LangLabel.Data;
            }
          }
        }
      }
    }
    interface SaveSlot extends ig.Class {
      src: string;
      data: ig.SaveSlot.Data;

      getData(this: this): this['data'];
      getSrc(this: this): this['src'];
      mergeData(this: this, data: Partial<ig.SaveSlot.Data>): void;
    }
    interface SaveSlotConstructor extends ImpactClass<SaveSlot> {
      new (source: string | ig.SaveSlot.Data): SaveSlot;
    }
    var SaveSlot: SaveSlotConstructor;

    namespace StorageData {
      interface SaveFileData {
        slots: Array<string | ig.SaveSlot.Data>;
        autoSlot?: string | ig.SaveSlot.Data | null;
        globals: string | ig.Storage.GlobalsData;
        lastSlot?: number;
      }
    }
    interface StorageData extends ig.Class {
      data: ig.StorageData.SaveFileData | null;

      save(this: this, data: string): void;
      getData(this: this): this['data'];
    }
    interface StorageDataConstructor extends ImpactClass<StorageData> {
      new (): StorageData;
    }
    var StorageData: StorageDataConstructor;

    namespace Storage {
      namespace GlobalsData {
        type Options = {
          [K in keyof sc.OPTIONS_DEFINITION.KnownTypesMap]: sc.OPTIONS_DEFINITION.KnownTypesMap[K]['init'];
        } &
          Record<string, unknown>;
      }
      interface GlobalsData {
        featVersion: number;
        feats: Record<string, boolean>;
        options: GlobalsData.Options;
      }

      interface Listener {
        onStorageGlobalSave?(this: this, globals: ig.Storage.GlobalsData): void;
        onStorageSave?(this: this, savefile: ig.SaveSlot.Data): void;
        onStoragePreLoad?(this: this, savefile: ig.SaveSlot.Data): void;
        onStoragePostLoad?(this: this, savefile: ig.SaveSlot.Data): void;
      }
    }
    interface Storage extends ig.GameAddon, sc.Model {
      slots: ig.SaveSlot[];
      autoSlot: ig.SaveSlot | null;
      lastUsedSlot: number;
      listeners: ig.Storage.Listener[];
      globalData: ig.Storage.GlobalsData;
      data: ig.StorageData;

      register(this: this, listener: ig.Storage.Listener): void;
      _saveToStorage(this: this): ig.StorageData.SaveFileData;
    }
    interface StorageConstructor extends ImpactClass<Storage> {
      new (): Storage;
    }
    var Storage: StorageConstructor;
    var storage: Storage;

    namespace StorageTools {
      function isEncrypted(data: unknown): data is string;
      function encrypt(data: string): string;
      function decrypt(data: string): string;
      function decryptSlotData(data: string): ig.SaveSlot.Data;
      function encryptSlotData(data: ig.SaveSlot.Data): string;
    }
  }
}
