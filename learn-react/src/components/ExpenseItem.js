import "./ExpenseItem.scss";
import CardWrapper from "./CardWrapper";
import ExpenseDate from "./ExpensesDate";

function ExpenseItems(props) {
    return (
        <CardWrapper className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">
                    {props.expense.amount}
                </div>
            </div>
        </CardWrapper>
    );
}

export default ExpenseItems;
