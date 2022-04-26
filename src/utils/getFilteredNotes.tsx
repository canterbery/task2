import { NoteList } from "../state/initialState";

export function getFilteredNotes(notes: NoteList, showArchived: boolean) {
  function selectArchivedNotes(notes: NoteList) {
    return notes.filter((item, index) => item.isArchived === true);
  }

  function selectActiveNotes(notes: NoteList) {
    return notes.filter((item, index) => item.isArchived === false);
  }

  if (showArchived) {
    return selectArchivedNotes(notes);
  } else {
    return selectActiveNotes(notes);
  }
}
