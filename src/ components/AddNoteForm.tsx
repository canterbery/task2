import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../state/reducers";
import * as ActionCreators from "../state/action-creators";
import { getNextId } from "../state/initialState";

export function AddNoteForm() {
  const dispatch = useDispatch();
  const { insertNote, closeNoteForm } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const [noteForEdit, setNote] = useState({
    name: "",
    category: "",
    content: "",
  });
  const handleChange = (e: any) => {
    setNote({
      ...noteForEdit,
      [e.target.name]: e.target.value,
    });
  };
  const taskTypes = useSelector((state: State) => state.noteCategories);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let dates = noteForEdit.content
      .replace(/(\r\n|\n|\r)/gm, "")
      .match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
    let checkedDates = dates === null ? "" : dates.toString();

    let partNote = {
      id: getNextId(),
      created: new Date().toDateString(),
      dates: checkedDates,
      isArchived: false,
    };
    let fullNote = Object.assign(partNote, noteForEdit);
    insertNote(fullNote);
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
          aria-label="With textarea"
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
