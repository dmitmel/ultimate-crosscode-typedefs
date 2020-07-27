export function loadText(url: string): Promise<string>;
export function loadJSON<T = unknown>(url: string): Promise<T>;
export function loadImage(url: string): Promise<HTMLImageElement>;
export function loadStylesheet(
  url: string,
  options?: { type?: string | null } | null,
): Promise<void>;
export function loadScript(
  url: string,
  options?: { type?: string | null; async?: boolean | null } | null,
): Promise<void>;
