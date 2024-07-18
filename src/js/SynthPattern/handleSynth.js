import * as Tone from 'tone';
import SynthPattern from './SynthPattern';
import { generateNoteNames } from '../../utils/generateNotes';
import { startStop } from '../AudioPattern/handleAuiodLoad';

const sytnhPatternContainer = document.getElementById('sytnhPattern');
const input = document.getElementById('add_synth');
const modal = document.querySelector('.modal');
export const play = document.getElementById('sytnhStart');
export let notes = generateNoteNames(40);
export let inputs = [];
export let synths = [];
export let beat = 0;

Tone.Transport.bpm.value = 100;

input.addEventListener('click', () => {
  for (var i = 0; i < 40; i++) {
    let createPattern = new SynthPattern(notes[i]);
    sytnhPatternContainer.append(createPattern.element);
    synths.push(createPattern.synth);
    inputs.push(createPattern.checkboxContainer);
  }
  input.disabled = true;
});

export function startSynt() {
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
