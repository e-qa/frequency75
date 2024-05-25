import * as Tone from 'tone';
import './main.css';
import CreatePattern from './src/js/createPattern';

document.addEventListener('DOMContentLoaded', () => {
  const addPatternBtn = document.getElementById('add');
  const patternContainer = document.getElementById('patternContainer');

  addPatternBtn.addEventListener('click', () => {
    const newPattern = new CreatePattern('kick');
    patternContainer.appendChild(newPattern.element);
  });
});

// const input = document.getElementById('file');

// class BeatPattern {
//   constructor() {
//     this.lineCount = 1;
//   }
//   createLine(bgClass) {
//     const div = document.createElement('div');
//     div.className = `${bgClass}`;
//     div.innerText = this.lineCount;
//     div.setAttribute('data-id', this.lineCount);
//     div.addEventListener('click', () => {
//       const dataId = div.getAttribute('data-id');
//       soundSampler.playSample(dataId);
//     });

//     document.body.appendChild(div);
//     this.lineCount++;
//   }
// }

// class SoundSampler {
//   constructor() {
//     this.samples = [];
//     this.id = null;
//     this.static = 1;
//   }

//   newSample(url) {
//     this.samples.push({
//       id: this.static,
//       sampler: new Tone.Sampler({
//         urls: {
//           ['C2']: url,
//         },
//       }).toDestination(),
//     });
//     this.static++;
//   }
//   getID(id) {
//     this.id = id;
//   }
//   playSample(dataID) {
//     this.samples.map((s) => {
//       if (s.id == dataID) {
//         s.sampler.triggerAttack('C2');
//       }
//     });
//   }
// }

// const beatPattern = new BeatPattern();
// const soundSampler = new SoundSampler();
// const createPattern = document.getElementById('create-pattern');

// createPattern.addEventListener('click', () => {
//   beatPattern.createLine('w-20 m-2 bg-green-600 play');
//   soundSampler.getID(beatPattern.lineCount);
// });

// input.addEventListener('change', function () {
//   let file = input.files[0];
//   let wavBlobURL = URL.createObjectURL(file);
//   soundSampler.newSample(wavBlobURL);
// });

// const play = document.getElementById('play');
// play.addEventListener('click', (e) => {
//   soundSampler.playSample();
// });
