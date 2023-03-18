// requires impact.base.entity
// requires impact.base.coll-entry

export {};

declare global {
	namespace ig {
		interface Physics extends Class {
			cellSize: number,
			_updateCount: number,
		}
	}
}