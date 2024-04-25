class Synth {
  constructor() {
    this.synth = null;
    this.gain = new Tone.Gain();
    this.gain.toDestination();
    this.setting = {};
  }
  get defaultSettings() {
    this.setting = {
      Synth: {
        oscillator: { type: "sine" },
        envelope: {
          attack: 0.005,
          decay: 1.1,
          sustain: 0.3,
          release: 1,
        },
      },
    };
  }
  startPlayback() {
    if (!this.synth) return;
    this.synth.triggerAttackRelease("C4", "16n");
  }
  setSynth(synthType) {
    if (this.synth) {
      this.synth.disconnect(this.gain);
      this.synth.dispose();
    }
    let settings = this.setting;

    let newSynth = new Tone[synthType](settings);
    this.synth = newSynth;
    this.synth.connect(this.gain);
    this.startPlayback();
  }
}
let synth = new Synth();
const playButton = document.getElementById("play");
const synthTypeEL = document.getElementById("synthtype");
let synthType = synthTypeEL.value;

playButton.addEventListener("click", () => {
  synthType = synthTypeEL.value;
  synth.setSynth(synthType);
});

synthTypeEL.addEventListener("change", (e) => {
  synthType = e.target.value;
  synth.setSynth(synthType);
});
