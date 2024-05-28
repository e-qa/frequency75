import * as Tone from 'tone';
import CreatePattern from './CreatePattern';

class UserAudioPattern extends CreatePattern {
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
