import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../state/reducers";
import { useDisplayMode } from "../utils/useDisplayMode";
import { TableBody } from "../ components/TableBody";
import { TableHead } from "../ components/TableHead";
import * as ActionCreators from "../state/action-creators";
import { AddButton } from "../ components/AddButton";
import { ShowActiveButton } from "../ components/ShowActiveButton";
import { ShowArchivedButton } from "../ components/ShowArchivedButton";
import { getFilteredNotes } from "../utils/getFilteredNotes";

export const TableNoteList = () => {
  const notes = useSelector((state: State) => state.noteList);
  const { showArchived, toggleDisplayMode } = useDisplayMode();
  const dispatch = useDispatch();
  const { showNoteForm } = bindActionCreators(ActionCreators, dispatch);

  const headButtonGroup = (
    <div className="container flex justify-center">
      <AddButton onclick={() => showNoteForm()} />
      {showArchived && <ShowActiveButton onclick={toggleDisplayMode} />}
      {!showArchived && <ShowArchivedButton onclick={toggleDisplayMode} />}
    </div>
  );

  return (
    <div className="container flex justify-center my-2 mx-auto">
      <table className="table-fixed w-full">
        <TableHead buttonGroup={headButtonGroup} />
        <TableBody
          data={getFilteredNotes(notes, showArchived)}
          showArchived={showArchived}
        />
      </table>
    </div>
  );
};
