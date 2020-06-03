// requires impact.base.loader.d.ts
// requires impact.base.system.web-audio.d.ts

declare namespace ig {
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
