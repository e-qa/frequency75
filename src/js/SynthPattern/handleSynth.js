import * as Tone from 'tone';
import SynthPattern from './SynthPattern';
import { generateNoteNames } from '../../utils/generateNotes';

const synthPatternContainer = document.getElementById('synthPattern');
const input = document.getElementById('add_synth');
const modal = document.querySelector('.modal');
export let notes = generateNoteNames(40);
export let inputs = [];
export let synths = [];
export let beat = 0;

Tone.Transport.bpm.value = 100;

input.addEventListener('click', () => {
  for (var i = 0; i < 40; i++) {
    let createPattern = new SynthPattern(notes[i]);
    synthPatternContainer.append(createPattern.element);
    synths.push(createPattern.synth);
    inputs.push(createPattern.checkboxContainer);
  }
  input.disabled = true;
});
export function startSynth() {
  Tone.Transport.scheduleRepeat((time) => {
    inputs.forEach((row, index) => {
      if (row[beat]?.checked) {
        let notesToPlay = notes[index];
        synths[index].triggerAttackRelease(notesToPlay, '16n', time);
      }
    });
    beat = (beat + 1) % 26;
  }, '16n');
  Tone.Transport.start();
}

export default function handleSynth() {}
