// Module Imports
import React, { useState } from "react";

// Style Imports
import "./ExpenseItem.scss";

// Component Imports
import CardWrapper from "../../UI/CardWrapper/CardWrapper";
import ExpenseDate from "../ExpenseDate/ExpensesDate";

function ExpenseItems(props) {
    const [expenseTitle, setExpenseTitle] = useState(props.expense.title);

    const updateTitleHandler = () => {
        setExpenseTitle("Updated!!");
    };

    return (
        <CardWrapper className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">
                    {props.expense.amount}
                </div>
                <button onClick={updateTitleHandler}>Update Title</button>
            </div>
        </CardWrapper>
    );
}

export default ExpenseItems;
