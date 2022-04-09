import { ActionTypes } from "../action-types";
import { Dispatch } from "react";
import Action from "../actions";
import { Note } from "../initialState";

export const insertNote = (note: Note) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.INSERT,
      payload: note,
    });
  };
};

export const updateNote = (note: Note) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: note,
    });
  };
};

export const deleteNote = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: id,
    });
  };
};

export const archiveNote = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ARCHIVE,
      payload: id,
    });
  };
};
export const restoreNote = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.RESTORE,
      payload: id,
    });
  };
};

export const showNoteForm = (id?: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SHOW_NOTE_FORM,
      payload: id,
    });
  };
};

export const closeNoteForm = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CLOSE_NOTE_FORM,
    });
  };
};

export const getTaskTypes = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_TASK_TYPES,
    });
  };
};
