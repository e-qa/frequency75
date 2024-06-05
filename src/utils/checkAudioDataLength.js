import { allAudio, allPattern } from '../js/AudioPattern/handleAuiodLoad';

export default function checkAudioDataLength() {
  return allAudio.length === 0 || allPattern.length === 0;
}
