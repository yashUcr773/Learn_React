import React from "react";

import styles from "./InvestmentTable.module.scss";

const InvestmentTable = (props) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.yearlyData.map((data) => {
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.savingsEndOfYear)}</td>
                            <td>{formatter.format(data.yearlyInterest)}</td>
                            <td>{formatter.format(data.savingsEndOfYear)}</td>
                            <td>{formatter.format(data.savingsEndOfYear)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default InvestmentTable;
