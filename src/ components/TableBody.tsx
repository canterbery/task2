import { NoteList } from "../state/initialState";
import { RowButtonGroup } from "./RowButtonGroup";
import { TableCell } from "./TableCell";

export interface TableDataProps {
  data: NoteList;
  showArchived: boolean;
}

export const TableBody = ({ data, showArchived }: TableDataProps) => {
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr id={item.id.toString()}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.created}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.content}</TableCell>
            <TableCell>{item.dates}</TableCell>
            <TableCell>
              <RowButtonGroup id={item.id} showArchived={showArchived} />
            </TableCell>
          </tr>
        );
      })}
    </tbody>
  );
};
