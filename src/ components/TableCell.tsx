import { Note } from "../state/initialState";

export const TableCell: React.FC = ({ children }) => {
  return (
    <td className="px-3 py-3 border border-white bg-blue-100 text-lg">
      <p className="text-gray-900 whitespace-no-wrap">{children}</p>
    </td>
  );
};
