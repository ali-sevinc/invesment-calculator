import { useState } from "react";

import Table from "./components/table/Table";
import Header from "./components/ui/Header";
import Form from "./components/form/Form";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  return (
    <div>
      <Header />
      <Form setYearlyData={setYearlyData} />
      {yearlyData.length === 0 && (
        <p className="text-center font-customSerif">No Calculation Yet</p>
      )}

      {yearlyData.length > 0 && <Table yearlyData={yearlyData} />}
    </div>
  );
}

export default App;
