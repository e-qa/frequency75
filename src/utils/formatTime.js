export function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min <= 0 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
