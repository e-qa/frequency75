import { allAudio, allPattern } from '../js/handleAuiodLoad';

export default function checkAudioDataLength() {
  return allAudio.length === 0 || allPattern.length === 0;
}
