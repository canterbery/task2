import Action from "../actions";
import initialState, { NoteList } from "../initialState";
import { ActionTypes } from "../action-types";

const noteReducer = (state = initialState, action: Action): NoteList => {
  switch (action.type) {
    case ActionTypes.INSERT: {
      const clonedState = state.map((item) => ({ ...item }));
      clonedState.push(action.payload);
      return clonedState;
    }

    case ActionTypes.UPDATE: {
      return state.map((item, index) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    }

    case ActionTypes.DELETE:
      return state.filter((item, index) => item.id !== action.payload);

    case ActionTypes.ARCHIVE: {
      return state.map((item, index) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isArchived: true,
          };
        }

        return item;
      });
    }
    case ActionTypes.RESTORE: {
      return state.map((item, index) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isArchived: false,
          };
        }

        return item;
      });
    }

    default:
      return state;
  }
};

export default noteReducer;
