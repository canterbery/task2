import internal from "stream";
import { ActionTypes } from "../action-types";

interface InsertAction {
  type: ActionTypes.INSERT;
  payload: {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    isArchived: boolean;
  };
}

interface UpdatetAction {
  type: ActionTypes.UPDATE;
  payload: {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    isArchived: boolean;
  };
}
interface DeletetAction {
  type: ActionTypes.DELETE;
  payload: number;
}
interface ArchiveAction {
  type: ActionTypes.ARCHIVE;

  payload: number;
}
interface RestoretAction {
  type: ActionTypes.RESTORE;
  payload: number;
}

interface ShowNoteForm {
  type: ActionTypes.SHOW_NOTE_FORM;
  payload?: number;
}
interface CloseNoteForm {
  type: ActionTypes.CLOSE_NOTE_FORM;
}
interface GetTaskTypes {
  type: ActionTypes.GET_TASK_TYPES;
}

type Action =
  | InsertAction
  | UpdatetAction
  | DeletetAction
  | ArchiveAction
  | RestoretAction
  | ShowNoteForm
  | CloseNoteForm
  | GetTaskTypes;

export default Action;
