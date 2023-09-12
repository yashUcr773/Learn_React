// Style Imports
import "./ExpenseItem.scss";

// Component Imports
import CardWrapper from "../../UI/CardWrapper/CardWrapper";
import ExpenseDate from "../ExpenseDate/ExpensesDate";

function ExpenseItems(props) {
    return (
        <CardWrapper className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>
                    {props.expense.title}
                    {props.expense.id}
                </h2>
                <div className="expense-item__price">
                    {props.expense.amount}
                </div>
            </div>
        </CardWrapper>
    );
}

export default ExpenseItems;
