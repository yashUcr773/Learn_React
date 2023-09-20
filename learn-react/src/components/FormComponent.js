import React, { useState } from "react";
import style from "./FormComponent.module.scss";

const FormComponent = (props) => {
    const [currSavings, setcurrSavings] = useState(0);
    const [yearSavings, setyearSavings] = useState(0);
    const [interst, setInterst] = useState(0);
    const [duration, setDuration] = useState(0);

    const resetFields = () => {
        setcurrSavings(0);
        setyearSavings(0);
        setInterst(0);
        setDuration(0);
    };

    const resetClickHandler = () => {
        resetFields();
        props.onReset();
    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        const userInput = {
            "current-savings": currSavings,
            "yearly-contribution": yearSavings,
            "expected-return": interst,
            duration: duration,
        };
        props.onCalculate(userInput);
    };

    const currSavingsChangeHandler = (event) => {
        setcurrSavings(event.target.value);
    };
    const yearSavingsChangeHandler = (event) => {
        setyearSavings(event.target.value);
    };
    const interstChangeHandler = (event) => {
        setInterst(event.target.value);
    };
    const durationChangeHandler = (event) => {
        setDuration(event.target.value);
    };

    return (
        <form className={style.form}>
            <div className={style["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        value={currSavings}
                        onChange={currSavingsChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        value={yearSavings}
                        onChange={yearSavingsChangeHandler}
                    />
                </p>
            </div>
            <div className={style["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        value={interst}
                        onChange={interstChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={durationChangeHandler}
                    />
                </p>
            </div>
            <p className={style.actions}>
                <button
                    type="reset"
                    onClick={resetClickHandler}
                    className={style.buttonAlt}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    onClick={submitClickHandler}
                    className={style.button}
                >
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default FormComponent;
