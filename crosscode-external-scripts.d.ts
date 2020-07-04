declare function SHOW_GAMECODE(): void;
declare function SHOW_TWITTER(): void;
declare function SHOW_SCREENSHOT(imageSrc: string): void;
declare function SHOW_INDIEGOGO(): void;
declare function GAME_ERROR_CALLBACK(
  error: Error,
  info: Record<string, unknown>,
  gameInfo: Record<string, unknown>,
): void;
declare function SHOW_SAVE_DIALOG(currentSaveData: string): void;

declare namespace IG_OPTIONS {
  function load(): void;
  function save(): void;
}
