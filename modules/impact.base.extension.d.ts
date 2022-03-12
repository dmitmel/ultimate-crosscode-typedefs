export {};

declare global {
  namespace ig {
    type ExtensionName = string;

    interface ExtensionManager extends ig.Class {
      enabled: Record<ExtensionName, boolean>;
    }
    interface ExtensionManagerConstructor extends ImpactClass<ExtensionManager> {
      new (): ExtensionManager;
    }
    var ExtensionManager: ExtensionManagerConstructor;
    var extensions: ExtensionManager;

    interface ExtensionList extends ig.SingleLoadable {}
    interface ExtensionListConstructor extends ImpactClass<ExtensionList> {
      new (): ExtensionList;
    }
    var ExtensionList: ExtensionListConstructor;
  }
}
