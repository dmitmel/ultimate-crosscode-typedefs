export {};

declare global {
  function SHOW_GAMECODE(): void;
  function SHOW_TWITTER(): void;
  function SHOW_SCREENSHOT(imageSrc: string): void;
  function SHOW_INDIEGOGO(): void;
  function GAME_ERROR_CALLBACK(
    error: Error,
    info: Record<string, unknown>,
    gameInfo: Record<string, unknown>,
  ): void;
  function SHOW_SAVE_DIALOG(currentSaveData: string): void;

  namespace IG_OPTIONS {
    function load(): void;
    function save(): void;
  }
}
