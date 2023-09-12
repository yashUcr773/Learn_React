// module imports

import React, { useState } from "react";

// component imports
import ExpenseItems from "../ExpenseItem/ExpenseItem";
import CardWrapper from "../../UI/CardWrapper/CardWrapper";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

// style imports
import "./Expenses.scss";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const getExpenseFilterValue = (value) => {
        setFilteredYear(value);
    };

    let filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() == +filteredYear;
    });

    return (
        <div>
            <CardWrapper className="expenses">
                <ExpenseFilter
                    filteredYear={filteredYear}
                    getExpenseFilterValue={getExpenseFilterValue}
                />
                {filteredExpenses.map((expense) => {
                    return <ExpenseItems expense={expense} key={expense.id} />;
                })}
            </CardWrapper>
        </div>
    );
}

export default Expenses;
