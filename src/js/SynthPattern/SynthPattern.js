import * as Tone from 'tone';
import Pattern from '../AudioPattern/AudioPattern';

class SynthPattern extends Pattern {
  constructor(patternName) {
    super(patternName);
    this.synth = new Tone.AMSynth().toDestination();
  }
}

export default SynthPattern;
