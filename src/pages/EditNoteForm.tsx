import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Note } from "../state/initialState";
import { State } from "../state/reducers";
import * as ActionCreators from "../state/action-creators";
import { Button, Modal } from "react-bootstrap";
import { checkStringForDates } from "../utils/checkStringFroDates";

export function EditNoteForm(note: Note) {
  const dispatch = useDispatch();
  const { updateNote, closeNoteForm } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const { isArchived, id, created, dates, ...noteFieldsForEdit } = note;

  const [noteForEdit, setNote] = useState(noteFieldsForEdit);
  const handleChange = (e: any) => {
    setNote({
      ...noteForEdit,
      [e.target.name]: e.target.value,
    });
  };
  const taskTypes = useSelector((state: State) => state.noteCategories);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let partNote = {
      id: note.id,
      isArchived: note.isArchived,
      created: note.created,
      dates: checkStringForDates(noteForEdit.content),
    };

    let fullNote = Object.assign(partNote, noteForEdit);

    updateNote(fullNote);
    closeNoteForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <label className="input-group-text" style={{ width: "20%" }}>
          <nav>Note Type</nav>
        </label>
        <select
          className="form-select"
          name="category"
          onChange={handleChange}
          value={noteForEdit.category}
        >
          {taskTypes.map((elem) => {
            return (
              <option key={elem} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" style={{ width: "20%" }}>
          Header
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Header"
          name="name"
          onChange={handleChange}
          value={noteForEdit.name}
        />
      </div>
      <div className="input-group">
        <span className="input-group-text" style={{ width: "20%" }}>
          Note
        </span>
        <textarea
          className="form-control"
          required
          height="100px"
          onChange={handleChange}
          name="content"
          value={noteForEdit.content}
        ></textarea>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeNoteForm()}>
          Close
        </Button>
        <Button type="submit" variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </form>
  );
}
