// An ESLint config which defines all globals declared by CrossCode. For use in
// ESLint configs. If this list ever needs updating, run
//
//   require('fs').writeFileSync('globals.json', JSON.stringify(Object.getOwnPropertyNames(window), null, 2))
//
// with the game loaded and in an empty page (about:blank will do) inside the
// same nwjs, then diff these lists.

module.exports = {
  globals: {
    // External libraries used by the game:
    CryptoJS: true,
    $: true,
    jQuery: true,

    // The core namespaces:
    ig: true,
    sc: true,
    Vec2: true,
    Vec3: true,
    Line2: true,
    KeySpline: true,
    KEY_SPLINES: true,

    // Utilities defined by Impact:
    assert: true,
    assertContent: true,

    // Functions defined in assets/game/page/game-base.js:
    SHOW_GAMECODE: true,
    SHOW_TWITTER: true,
    SHOW_SCREENSHOT: true,
    SHOW_INDIEGOGO: true,
    GAME_ERROR_CALLBACK: true,
    SHOW_SAVE_DIALOG: true,

    // Impact configuration in assets/node-webkit.html:
    IG_GAME_SCALE: true,
    IG_GAME_CACHE: true,
    IG_ROOT: true,
    IG_WIDTH: true,
    IG_HEIGHT: true,
    IG_HIDE_DEBUG: true,
    IG_SCREEN_MODE_OVERRIDE: true,
    IG_WEB_AUDIO_BGM: true,
    IG_FORCE_HTML5_AUDIO: true,
    LOAD_LEVEL_ON_GAME_START: true,
    IG_GAME_DEBUG: true,
    IG_GAME_BETA: true,

    // Assigned in assets/impact/page/js/options.js:
    IG_OPTIONS: true,
    IG_SCREEN_MODE: true,
    IG_SOUND_VOLUME: true,
    IG_MUSIC_VOLUME: true,

    // Startup:
    doStartCrossCodePlz: true,
    startCrossCode: true,

    // Unused, debugging leftovers and others:
    Constants: true,
    BrowserDetect: true,
    IG_ENTITY_KILL_CALL: true,
    FOR_THE_HACKERS: true,
    checkPlayerPos: true,
    IG_KEEP_WINDOW_FOCUS: true,
    testGui: true,
  },
};
