import * as Tone from 'tone';
import UserAudioPattern from './UserAudioPattern';
import checkAudioDataLength from '../../utils/checkAudioDataLength';
import { spacebarPlayPauseHandler } from '../keyboardHandler.js';
import { formatTime } from '../../utils/formatTime.js';
import { startSynth } from '../SynthPattern/handleSynth.js';

const modal = document.querySelector('.modal');
const addPatternBtn = document.getElementById('add');
const patternContainer = document.getElementById('patternContainer');
const input = document.getElementById('add_sample');
const playPauseBtn = document.getElementById('play_pause');
const timeEl = document.getElementById('time');

document.addEventListener('keypress', (e) => spacebarPlayPauseHandler(e));

export const allAudio = [];

export let allPattern = [];
let isPlay = false;
Tone.Transport.bpm.value = 100;
export function changeIsPlay(newIsPlay) {
  isPlay = newIsPlay;
}

addPatternBtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

input.addEventListener('change', () => {
  addAudioPattern(input.files[0]);
});

playPauseBtn.addEventListener('click', () => {
  // if (checkAudioDataLength()) {
  //   return alert('you must add audio or synth to play');
  // }

  if (isPlay) {
    // Tone.Transport.cancel();
    // Tone.Transport.stop();
    Tone.Transport.pause();
  } else {
    startStop();
  }
  isPlay = !isPlay;
});

function addAudioPattern(audioFile) {
  const file = audioFile;

  const audioName = file.name;
  const audioURL = URL.createObjectURL(file);

  const userAudio = new UserAudioPattern(audioName, audioURL);
  const { audioArr, checkboxContainer, element } = userAudio;
  allAudio.push(audioArr[0]);

  allPattern.push(checkboxContainer);

  patternContainer.appendChild(element);
  modal.classList.add('hidden');
}

export function startStop() {
  triggerAudioSequence(16);
  Tone.start();
  Tone.Transport.start();

  startSynth();
  startTimer();
}

function triggerAudioSequence(patternLength) {
  const steps = [...Array(patternLength).keys()];

  let sequencer = new Tone.Sequence(
    function (time, column) {
      allPattern.forEach((input, index) => {
        if (input[column].checked) {
          allAudio[index].sampler.triggerAttack('C2', time);
        }
      });
    },
    [...steps],
    '16n',
  );
  sequencer.start(0);
}

function handleAudioLoad(file) {
  addAudioPattern(file);
}
function startTimer() {
  setInterval(() => {
    const seconds = Tone.Transport.seconds;
    timeEl.textContent = formatTime(seconds);
  }, 1000);
}

export default handleAudioLoad;
