import { Transport } from 'tone';
import checkAudioDataLength from '../utils/checkAudioDataLength';
import { changeIsPlay, startStop } from './AudioPattern/handleAudioLoad';

let isPlay = false;

export function spacebarPlayPauseHandler(e) {
  if (e.code === 'Space') {
    if (checkAudioDataLength()) {
      return alert('you must add audio or synth to play');
    }

    if (isPlay) {
      Transport.cancel();
      Transport.stop();
      changeIsPlay(false);
    } else {
      startStop();
      changeIsPlay(true);
    }
    isPlay = !isPlay;
  }
}
