import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
import { getSummaryStats } from "../utils/getSummaryStats";

export function SummaryTable() {
  const notes = useSelector((state: State) => state.noteList);

  const data = getSummaryStats(notes);

  return (
    <>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th scope="col" width="50%">
              Note Category
            </th>
            <th scope="col" width="25%">
              Active
            </th>
            <th scope="col" width="25%">
              Archived
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={elem.type}>
                <td>{elem.type}</td>
                <td>{elem.active}</td>
                <td>{elem.archived}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
