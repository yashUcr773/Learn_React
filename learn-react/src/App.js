import React, { useState } from "react";
import Expenses from "./components/ExpensesComponent/Expenses/Expenses";
import NewExpenses from "./components/NewExpensesComponent/NewExpense/NewExpense";
import FragmentsTest from "./components/FragmentsTest/FragmentsTest";
import PortalTest from "./components/PortalTest/PortalTest";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: "$94.12",
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: "$799.49",
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: "$294.67",
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: "$450",
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const getNewExpense = (expenseData) => {
        setExpenses((prevExpenses) => {
            expenseData.amount = "$" + expenseData.amount;
            expenseData.id = "e" + (prevExpenses.length + 1);
            return [expenseData, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpenses onNewExpense={getNewExpense} />
            <Expenses expenses={expenses} />
            <FragmentsTest></FragmentsTest>
            <PortalTest></PortalTest>
        </div>
    );
}

export default App;
