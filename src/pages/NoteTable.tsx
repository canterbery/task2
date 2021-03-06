import React, { useState } from "react";
import { ButtonGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../state/action-creators";
import { NoteList } from "../state/initialState";
import { State } from "../state/reducers";
import { NoteButtonGroup } from "../ components/NoteButtonGroup";
import { OverlayedSecButton } from "../ components/OverlayedSecButton";

export default function NoteTable() {
  const notes = useSelector((state: State) => state.noteList);
  const [showArchived, setDisplayMode] = useState(false);

  const dispatch = useDispatch();
  const { showNoteForm } = bindActionCreators(ActionCreators, dispatch);

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
                <OverlayedSecButton
                  message={"Add Note"}
                  pic={<i className="bi bi-plus-square"></i>}
                  onclick={() => showNoteForm()}
                />

                {!showArchived && (
                  <OverlayedSecButton
                    message={"Show Archived Notes"}
                    pic={<i className="bi bi-calendar"></i>}
                    onclick={() => setDisplayMode(true)}
                  />
                )}

                {showArchived && (
                  <OverlayedSecButton
                    message={"Show Active Notes"}
                    pic={<i className="bi bi-calendar3"></i>}
                    onclick={() => setDisplayMode(false)}
                  />
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
                  <NoteButtonGroup id={note.id} showArchived={showArchived} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
