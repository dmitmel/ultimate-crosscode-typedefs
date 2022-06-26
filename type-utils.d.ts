type MaybePromise<T> = T | Promise<T>;
type NullablePartial<T> = { [P in keyof T]?: T[P] | null };
type Writable<T> = { -readonly [P in keyof T]: T[P] };

// See:
// <https://github.com/microsoft/TypeScript/issues/29729>
// <https://github.com/sindresorhus/type-fest/blob/v2.14.0/source/literal-union.d.ts>
type LiteralUnion<Literal, Base = string> = Literal | (Base & Record<never, never>);
