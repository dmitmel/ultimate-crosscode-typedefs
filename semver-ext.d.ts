import * as semver from 'semver';

declare module 'semver' {
  interface SemVer {
    toString(): string;
  }

  interface Comparator {
    toString(): string;
  }

  interface Range {
    toString(): string;
  }
}
export = semver;
