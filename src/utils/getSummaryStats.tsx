import { NoteList } from "../state/initialState";

export function getSummaryStats(notes: NoteList) {
  let result: {
    type: string;
    archived: number;
    active: number;
  }[];
  result = [];
  notes.forEach((elem) => {
    let curr =
      result === undefined
        ? undefined
        : result.find((item) => item.type === elem.category);
    if (curr === undefined) {
      result.push({
        type: elem.category,
        archived: elem.isArchived ? 1 : 0,
        active: elem.isArchived ? 0 : 1,
      });
    } else {
      if (elem.isArchived) {
        curr.archived += 1;
      } else {
        curr.active += 1;
      }
    }
  });

  return result;
}
