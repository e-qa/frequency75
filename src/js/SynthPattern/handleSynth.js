import * as Tone from 'tone';
import SynthPattern from './SynthPattern';
import Pattern from '../AudioPattern/AudioPattern';

const sytnhPatternContainer = document.getElementById('sytnhPattern');

const input = document.getElementById('add_synth');

input.addEventListener('click', () => {
  //   let { synth } = new SynthPattern('synth1');
  for (let i = 0; i <= 16; i++) {
    let createPattern = new Pattern(`C${i}`);
    sytnhPatternContainer.append(createPattern.element);
  }
});

export default function handleSynth() {}
