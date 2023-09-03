import "./ExpenseItem.scss";

function ExpenseItems() {

    let date = new Date(2020, 2, 26)
    let desc = 'My Expenditure'
    let price = 222.22

    return (
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{desc}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </div>
    );
}

export default ExpenseItems;
