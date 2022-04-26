export interface TableHeadProps {
  buttonGroup?: JSX.Element;
}

export const TableHead = ({ buttonGroup }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        <th className=" w-2/12 font-bold p-2 border border-white-700 text-left bg-indigo-700 text-white">
          Name
        </th>
        <th className="w-2/12 font-bold p-2 border text-left border-white-700 bg-indigo-700 text-white">
          Created
        </th>
        <th className="w-2/12 font-bold py-2 px-4 border  text-left border-white-700 bg-indigo-700 text-white">
          Category
        </th>
        <th className="font-bold py-2 px-4 border text-left border-white-700 bg-indigo-700 text-white">
          Content
        </th>
        <th className=" w-2/12 font-bold py-2 px-4 border text-left border-white-700 bg-indigo-700 text-white">
          Dates
        </th>
        <th className=" w-2/12 font-bold py-2 px-4 border text-left border-white-700 bg-indigo-700 text-white">
          {buttonGroup}
        </th>
      </tr>
    </thead>
  );
};
