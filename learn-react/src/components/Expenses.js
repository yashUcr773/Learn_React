import ExpenseItem from "./ExpenseItem";
import CardWrapper from "./CardWrapper";
import "./Expenses.scss";

function Expenses(props) {
    return (
        <CardWrapper className="expenses">
            {props.expenses.map((expense) => {
                return <ExpenseItem expense={expense} key={expense.id} />;
            })}
        </CardWrapper>
    );
}

export default Expenses;
