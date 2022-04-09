import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import noteReducer from "./noteReducer";
import noteFormReducer from "./noteFormReducer";
import taskTypesReducer from "./taskTypesReducer";

const reducers = combineReducers({
  noteList: noteReducer,
  showArchivedNotes: filterReducer,
  showNoteForm: noteFormReducer,
  noteCategories: taskTypesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
