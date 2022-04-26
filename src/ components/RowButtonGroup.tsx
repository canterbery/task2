import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ArchiveButton } from "./ArchiveButton";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import { RestoreButton } from "./RestoreButton";
import * as ActionCreators from "../state/action-creators";

export interface RowButtonGroupProps {
  id: number;
  showArchived: boolean;
}

export const RowButtonGroup = ({ id, showArchived }: RowButtonGroupProps) => {
  const dispatch = useDispatch();
  const { deleteNote, archiveNote, restoreNote, showNoteForm } =
    bindActionCreators(ActionCreators, dispatch);
  return (
    <div className="container flex justify-center">
      <EditButton onclick={() => showNoteForm(id)} />
      {!showArchived && <ArchiveButton onclick={() => archiveNote(id)} />}
      {showArchived && <RestoreButton onclick={() => restoreNote(id)} />}
      <DeleteButton onclick={() => deleteNote(id)} />
    </div>
  );
};
