import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => {
                return <ExpenseItem expense={expense} key={expense.id} />;
            })}
        </div>
    );
}

export default Expenses;
