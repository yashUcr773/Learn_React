import ExpenseItems from "../ExpenseItem/ExpenseItem";
import CardWrapper from "../../UI/CardWrapper/CardWrapper";
import "./Expenses.scss";

function Expenses(props) {
    return (
        <CardWrapper className="expenses">
            {props.expenses.map((expense) => {
                return <ExpenseItems expense={expense} key={expense.id} />;
            })}
        </CardWrapper>
    );
}

export default Expenses;
