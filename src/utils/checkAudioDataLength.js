import { allAudio, allPattern } from '../js/AudioPattern/handleAudioLoad';

export default function checkAudioDataLength() {
  return allAudio.length === 0 || allPattern.length === 0;
}
