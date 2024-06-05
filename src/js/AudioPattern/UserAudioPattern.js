import * as Tone from 'tone';
import Pattern from './AudioPattern';

class UserAudioPattern extends Pattern {
  audioArr = [];
  constructor(patternName, audioFileUrl) {
    super(patternName);
    this.audioFileUrl = audioFileUrl;
    this.laodAudio();
  }
  laodAudio() {
    this.audioArr.push({
      id: this.id,
      sampler: new Tone.Sampler({
        urls: {
          ['C2']: this.audioFileUrl,
        },
      }).toDestination(),
    });
  }
}

export default UserAudioPattern;
