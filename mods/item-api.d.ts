export {};

declare global {
  namespace itemAPI {
    var customItemToId: Record<sc.ItemID, number>;
  }
}
