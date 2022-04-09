import React from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../state/action-creators";
import { NoteList } from "../state/initialState";
import { State } from "../state/reducers";

export default function NoteTable() {
  const notes = useSelector((state: State) => state.noteList);
  const showArchived = useSelector((state: State) => state.showArchivedNotes);

  const dispatch = useDispatch();
  const {
    deleteNote,
    showActiveNotes,
    showArchivedNotes,
    archiveNote,
    restoreNote,
    showNoteForm,
  } = bindActionCreators(ActionCreators, dispatch);

  function selectArchivedNotes(notes: NoteList) {
    return notes.filter((item, index) => item.isArchived === true);
  }

  function selectActiveNotes(notes: NoteList) {
    return notes.filter((item, index) => item.isArchived === false);
  }

  let filteredNotes: NoteList;

  if (showArchived) {
    filteredNotes = selectArchivedNotes(notes);
  } else {
    filteredNotes = selectActiveNotes(notes);
  }
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col" width="20%">
              Name
            </th>
            <th scope="col" width="15%">
              Created
            </th>
            <th scope="col" width="15%">
              Category
            </th>
            <th scope="col" width="35%">
              Content
            </th>
            <th scope="col" width="10%">
              Dates
            </th>
            <th scope="col" width="5%">
              <ButtonGroup>
                <Button variant="secondary" onClick={() => showNoteForm()}>
                  <i className="bi bi-plus-square"></i>
                </Button>

                {!showArchived && (
                  <Button
                    variant="secondary"
                    onClick={() => showArchivedNotes()}
                  >
                    <i className="bi bi-calendar"></i>
                  </Button>
                )}

                {showArchived && (
                  <Button variant="secondary" onClick={() => showActiveNotes()}>
                    <i className="bi bi-calendar3"></i>
                  </Button>
                )}
              </ButtonGroup>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => {
            return (
              <tr key={note.id}>
                <td>{note.name}</td>
                <td>{note.created}</td>
                <td>{note.category}</td>
                <td>{note.content}</td>
                <td>{note.dates}</td>
                <td>
                  <ButtonGroup>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        showNoteForm(note.id);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>

                    {!showArchived && (
                      <Button
                        variant="secondary"
                        onClick={() => archiveNote(note.id)}
                      >
                        <i className="bi bi-calendar"></i>
                      </Button>
                    )}
                    {showArchived && (
                      <Button
                        variant="secondary"
                        onClick={() => restoreNote(note.id)}
                      >
                        <i className="bi bi-calendar3"></i>
                      </Button>
                    )}

                    <Button
                      variant="secondary"
                      onClick={() => deleteNote(note.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
