import { Frequency } from 'tone';

export function generateNoteNames(number) {
  let notes = [];
  let note = 'C3';

  for (let i = 0; i < number; i++) {
    notes.push(note);
    note = Frequency(note).transpose(1).toNote();
  }

  return notes;
}
