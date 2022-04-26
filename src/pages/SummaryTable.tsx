import { useSelector } from "react-redux";
import { TableCell } from "../ components/TableCell";
import { State } from "../state/reducers";
import { getSummaryStats } from "../utils/getSummaryStats";

export function SummaryTable() {
  const notes = useSelector((state: State) => state.noteList);

  const data = getSummaryStats(notes);

  return (
    <div className="container flex justify-center my-2 mx-auto">
      <table className="table-fixed w-1/2">
        <thead>
          <tr>
            <th className=" w-3/6 font-bold p-2 border border-white-700 text-left bg-indigo-700 text-white">
              Note Category
            </th>
            <th className="w-2/12 font-bold p-2 border text-left border-white-700 bg-indigo-700 text-white">
              Active
            </th>
            <th className="w-2/12 font-bold py-2 px-4 border  text-left border-white-700 bg-indigo-700 text-white">
              Archived
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={elem.type}>
                <TableCell>{elem.type}</TableCell>
                <TableCell>{elem.active}</TableCell>
                <TableCell>{elem.archived}</TableCell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
