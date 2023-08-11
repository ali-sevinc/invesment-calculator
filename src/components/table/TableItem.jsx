function formatCurrency(money) {
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return format.format(money);
}

function TableItem({ yearlyData }) {
  const { year, yearlyInterest, savingsEndOfYear, totalInterest } = yearlyData;

  const totalCapital = savingsEndOfYear - totalInterest;
  return (
    <tbody className="font-customSerif text-[0.85rem] text-[#c2e9e0]">
      <tr>
        <td className="px-3">{year}</td>
        <td className="px-3">{formatCurrency(savingsEndOfYear)}</td>
        <td className="px-3">{formatCurrency(yearlyInterest)}</td>
        <td className="px-3">{formatCurrency(totalInterest)}</td>
        <td className="px-3">{formatCurrency(totalCapital)}</td>
      </tr>
    </tbody>
  );
}

export default TableItem;
