export interface ChangelogFileData {
  changelog: Entry[];
}

export interface Entry {
  name: string;
  version: string;
  date: string;
  fixes?: string[];
  changes?: string[];
}
