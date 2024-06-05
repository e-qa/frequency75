import * as Tone from 'tone';
import Pattern from '../AudioPattern/AudioPattern';

class SynthPattern extends Pattern {
  constructor(patternName) {
    super(patternName);
    this.synth = new Tone.Synth({
      oscillator: {
        type: 'square',
      },
    }).toDestination();
  }
}

export default SynthPattern;
