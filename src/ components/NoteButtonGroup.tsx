import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { OverlayedSecButton } from "./OverlayedSecButton";
import * as ActionCreators from "../state/action-creators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export interface NoteButtonGroupProps {
  id: number;
  showArchived: boolean;
}

export function NoteButtonGroup({ id, showArchived }: NoteButtonGroupProps) {
  const dispatch = useDispatch();
  const {
    deleteNote,

    archiveNote,
    restoreNote,
    showNoteForm,
  } = bindActionCreators(ActionCreators, dispatch);

  return (
    <ButtonGroup>
      <OverlayedSecButton
        message={"Edit"}
        pic={<i className="bi bi-pencil"></i>}
        onclick={() => {
          showNoteForm(id);
        }}
      />

      {!showArchived && (
        <OverlayedSecButton
          message={"Archive"}
          pic={<i className="bi bi-calendar"></i>}
          onclick={() => archiveNote(id)}
        />
      )}
      {showArchived && (
        <OverlayedSecButton
          message={"Restore"}
          pic={<i className="bi bi-calendar3"></i>}
          onclick={() => restoreNote(id)}
        />
      )}

      <OverlayedSecButton
        message="Delete"
        pic={<i className="bi bi-trash"></i>}
        onclick={() => deleteNote(id)}
      />
    </ButtonGroup>
  );
}
