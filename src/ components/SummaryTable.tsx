import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { noteCategories } from "../state/initialState";
import { State } from "../state/reducers";

export function SummaryTable() {
  const notes = useSelector((state: State) => state.noteList);

  /* function getSummaryStats() {
    let data:any;
    noteCategories.forEach((elem) => {
      data[elem] = [0, 0];
    });
  
    notes.forEach((elem) => {
      let cur = data[elem.category];
      elem.isArchived ? cur[1]++ : cur[0]++;
    });
    return data;
  }
  const data = getSummaryStats();*/

  function getSummaryStats() {
    let result: {
      type: string;
      archived: number;
      active: number;
    }[];
    result = [];
    notes.forEach((elem) => {
      let curr =
        result === undefined
          ? undefined
          : result.find((item) => item.type === elem.category);
      if (curr === undefined) {
        result.push({
          type: elem.category,
          archived: elem.isArchived ? 1 : 0,
          active: elem.isArchived ? 0 : 1,
        });
      } else {
        if (elem.isArchived) {
          curr.archived += 1;
        } else {
          curr.active += 1;
        }
      }
    });

    return result;
  }

  const data = getSummaryStats();

  return (
    <>
      <Table striped bordered hover size="sm">
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
