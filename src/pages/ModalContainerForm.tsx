import Modal from "react-bootstrap/esm/Modal";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../state/reducers";
import * as ActionCreators from "../state/action-creators";
import { ModalBody } from "react-bootstrap";
import React from "react";
import { NoteList } from "../state/initialState";
import { EditNoteForm } from "./EditNoteForm";

import { AddNoteForm } from "./AddNoteForm";

function ModalContainerForm() {
  const showForm = useSelector((state: State) => state.showNoteForm);

  const notes = useSelector((state: State) => state.noteList);
  const dispatch = useDispatch();
  const { closeNoteForm } = bindActionCreators(ActionCreators, dispatch);

  function selectCurrentNote(notes: NoteList) {
    return notes.find((elem) => elem.id === showForm.noteIdForEdit);
  }

  const currentNote = selectCurrentNote(notes);

  return (
    <>
      {showForm && (
        <Modal show={showForm.show} onHide={() => closeNoteForm()}>
          <Modal.Header closeButton>
            <Modal.Title>Add a note</Modal.Title>
          </Modal.Header>
          <ModalBody>
            {currentNote !== undefined && <EditNoteForm {...currentNote} />}
            {currentNote === undefined && <AddNoteForm />}
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

export default ModalContainerForm;
