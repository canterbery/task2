import { combineReducers } from "redux";

import noteReducer from "./noteReducer";
import noteFormReducer from "./noteFormReducer";
import noteCategoriesReducer from "./noteCategoriesReducer";

const reducers = combineReducers({
  noteList: noteReducer,
  showNoteForm: noteFormReducer,
  noteCategories: noteCategoriesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
