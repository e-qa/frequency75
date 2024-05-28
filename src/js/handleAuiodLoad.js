import * as Tone from 'tone';
import UserAudioPattern from './UserAudioPattern';

const modal = document.querySelector('.modal');
const addPatternBtn = document.getElementById('add');
const patternContainer = document.getElementById('patternContainer');
const input = document.getElementById('add_sample');
const playPauseBtn = document.getElementById('play_pause');

const allAudio = [];
let allPattern = {
  patterns: [],
};

addPatternBtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

input.addEventListener('change', () => {
  addAudioPattern(input.files[0]);
});

playPauseBtn.addEventListener('click', startStop);

function addAudioPattern(audioFile) {
  const file = audioFile;

  const audioName = file.name;
  const audioURL = URL.createObjectURL(file);

  const userAudio = new UserAudioPattern(audioName, audioURL);
  const { audioArr, checkboxContainer, element } = userAudio;
  allAudio.push(audioArr[0]);
  allPattern.patterns.push(checkboxContainer);
  patternContainer.appendChild(element);
  modal.classList.add('hidden');
}

function startStop() {
  triggerAudioSequence(16);
  Tone.Transport.start();
}

function triggerAudioSequence(patternlength) {
  const steps = [...Array(patternlength).keys()];

  new Tone.Sequence(
    function (time, step) {
      allAudio.map((s) => {
        if (allPattern.patterns[s.id]?.[step].checked) {
          s.sampler.triggerAttack('C2', time);
        }
      });
    },
    [...steps],
    '16n',
  ).start(0);
}

function handleAuiodLoad(file) {
  addAudioPattern(file);
}
export default handleAuiodLoad;
