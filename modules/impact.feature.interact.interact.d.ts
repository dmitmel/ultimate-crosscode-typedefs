// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface InteractEntry extends ig.Class {
      isActive(this: this): boolean;
      onConnect(this: this): void;
      onDisconnect(this: this): void;
      update(this: this): void;
    }
    interface InteractEntryConstructor extends ImpactClass<InteractEntry> {
      new (): InteractEntry;
    }
    var InteractEntry: InteractEntryConstructor;

    interface InteractManager extends ig.GameAddon {
      blockTimer: number;
      entries: ig.InteractEntry[];

      addEntry(this: this, entry: ig.InteractEntry): void;
      removeEntry(this: this, entry: ig.InteractEntry): void;
      setBlockDelay(this: this, time?: number | undefined): void;
      isBlocked(this: this): boolean;

      deferredUpdateOrder: number;
      onDeferredUpdate(this: this): void;
    }
    interface InteractManagerConstructor extends ImpactClass<InteractManager> {
      new (): InteractManager;
    }
    var InteractManager: InteractManagerConstructor;
    var interact: ig.InteractManager;
  }
}
