import * as Tone from 'tone';
import Pattern from '../AudioPattern/AudioPattern';

class SynthPattern extends Pattern {
  constructor(patternName) {
    super(patternName);
    this.synth = new Tone.Synth({
      oscillator: {
        type: 'sine',
        count: 3,
        spread: 30,
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 0.4,
        attackCurve: 'exponential',
      },
    }).toDestination();
  }
}

export default SynthPattern;
