// modules
import React, { useState } from "react";

// components
import Header from "./components/Header";
import FormComponent from "./components/FormComponent";
import InvestmentTable from "./components/InvestmentTable";
import NoData from "./components/NoData";

// styles

function App() {
    const [yearlyData, setyearlyData] = useState([]);
    const [showRecords, setShowRecords] = useState(false);
    const calculateHandler = (userInput) => {
        const calculatedData = []; // per-year results

        let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            calculatedData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
        setyearlyData(calculatedData);
        setShowRecords(true);
    };
    const resetHandler = () => {
        setyearlyData([]);
        setShowRecords(false);
    };

    return (
        <div>
            <Header />
            <FormComponent
                onCalculate={calculateHandler}
                onReset={resetHandler}
            />
            {!showRecords && <NoData></NoData>}
            {showRecords && <InvestmentTable yearlyData={yearlyData} />}
        </div>
    );
}

export default App;
