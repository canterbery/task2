import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import initialState, { noteCategories } from "./initialState";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  {
    noteList: initialState,
    showArchivedNotes: false,
    showNoteForm: { show: false, noteIdForEdit: 0 },
    noteCategories: noteCategories,
  },
  applyMiddleware(thunk)
);
