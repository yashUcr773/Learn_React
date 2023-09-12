import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
    const getNewExpense = (expenseData) => {
        props.onNewExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onNewExpense={getNewExpense} />
        </div>
    );
};

export default NewExpense;
