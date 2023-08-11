import TableHead from "./TableHead";
import TableItem from "./TableItem";

function Table({ yearlyData }) {
  return (
    <table className="mx-auto my-8 max-w-[50rem] table-fixed border-spacing-4 p-4 text-right">
      <TableHead />
      {yearlyData.map((item) => (
        <TableItem key={item.year} yearlyData={item} />
      ))}
    </table>
  );
}

export default Table;
