import * as Tone from 'tone';
import SynthPattern from './SynthPattern';
import { generateNoteNames } from '../../utils/generateNotes';

const sytnhPatternContainer = document.getElementById('sytnhPattern');
const input = document.getElementById('add_synth');
const modal = document.querySelector('.modal');
const play = document.getElementById('sytnhStart');
let notes = generateNoteNames(25);
let inputs = [];
let synths = [];
let beat = 0;
Tone.Transport.bpm.value = 120;
input.addEventListener('click', () => {
  modal.classList.add('hidden');
  for (var i = 0; i < 25; i++) {
    let createPattern = new SynthPattern(notes[i]);

    sytnhPatternContainer.append(createPattern.element);
    synths.push(createPattern.synth);
    inputs.push(createPattern.checkboxContainer);
  }
});

play.addEventListener('click', () => {
  Tone.Transport.scheduleRepeat((time) => {
    inputs.forEach((row, index) => {
      if (row[beat]?.checked) {
        let notesToPlay = notes[index];
        synths[index].triggerAttackRelease(notesToPlay, '16n', time);
      }
    });
    beat = (beat + 1) % 16;
  }, '16n');

  Tone.Transport.start();
});

export default function handleSynth() {}
