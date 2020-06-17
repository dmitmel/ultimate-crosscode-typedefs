// requires impact.base.loader.d.ts
// requires impact.base.system.web-audio.d.ts

declare namespace ig {
  interface SoundManager extends ig.Class {
    loadWebAudio(
      this: this,
      path: string,
      loadCallback: (path: string, success: boolean) => void,
    ): void;
  }
  interface SoundManagerConstructor extends ImpactClass<SoundManager> {}
  var SoundManager: SoundManagerConstructor;

  interface SoundDefault extends ig.Class {}
  interface SoundDefaultConstructor extends ImpactClass<SoundDefault> {}
  var SoundDefault: SoundDefaultConstructor;

  interface SoundWebAudio extends ig.Class {}
  interface SoundWebAudioConstructor extends ImpactClass<SoundWebAudio> {}
  var SoundWebAudio: SoundWebAudioConstructor;

  type Sound = SoundDefault | SoundWebAudio;
  type SoundConstructor = SoundDefaultConstructor | SoundWebAudioConstructor;
  var Sound: SoundConstructor;
}
