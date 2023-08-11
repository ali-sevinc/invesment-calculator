import { useState } from "react";
import InputGroup from "./InputGroup";
import FormAction from "./FormAction";

function Form({ setYearlyData }) {
  const [currentSave, setCurrentSave] = useState("");
  const [yearlySave, setYearlySave] = useState("");
  const [interest, setInterest] = useState("");
  const [invDuration, setInvDuration] = useState("");

  const calculateHandler = () => {
    const Calculation_Array = [];
    let dummyTotalInterest = 0;
    let currentSavings = +currentSave;
    const yearlyContribution = +yearlySave;
    const expectedReturn = +interest / 100;
    const duration = +invDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      dummyTotalInterest = dummyTotalInterest + yearlyInterest;

      Calculation_Array.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: dummyTotalInterest,
      });
    }

    setYearlyData(Calculation_Array);
  };

  function submitHandler(event) {
    event.preventDefault();
    if (!currentSave || !yearlySave || !interest || !invDuration) return;

    calculateHandler();
    setCurrentSave("");
    setInterest("");
    setInvDuration("");
    setYearlySave("");
  }

  function resetHandler() {
    setCurrentSave("");
    setInterest("");
    setInvDuration("");
    setYearlySave("");
    setYearlyData([]);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto my-8 max-w-[30rem] rounded-s bg-gradient-to-r from-[#307e6c] to-[#2b996d] p-4"
    >
      <div className="flex justify-evenly gap-6">
        <InputGroup
          value={currentSave}
          onSetValue={setCurrentSave}
          label="Current Savings ($)"
          id="current-savings"
        />
        <InputGroup
          value={yearlySave}
          onSetValue={setYearlySave}
          label="Yearly Savings ($)"
          id="yearly-contribution"
        />
      </div>
      <div className="flex justify-evenly gap-6">
        <InputGroup
          value={interest}
          onSetValue={setInterest}
          label="Expected Interest (%, per year)"
          id="expected-return"
        />

        <InputGroup
          value={invDuration}
          onSetValue={setInvDuration}
          label="Investment Duration (years)"
          id="duration"
        />
      </div>
      <FormAction onReset={resetHandler} />
    </form>
  );
}

export default Form;
