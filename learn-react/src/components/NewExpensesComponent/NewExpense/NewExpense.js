import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const getNewExpense = (expenseData) => {
        props.onNewExpense(expenseData);
    };

    const onFormClose = () => {
        setShowForm(false);
    };

    let expenseJSX = (
        <button
            onClick={() => {
                setShowForm(true);
            }}
        >
            Add new Expense
        </button>
    );

    if (showForm) {
        expenseJSX = (
            <ExpenseForm
                onNewExpense={getNewExpense}
                onFormClose={onFormClose}
            />
        );
    }

    return <div className="new-expense">{expenseJSX}</div>;
};

export default NewExpense;
