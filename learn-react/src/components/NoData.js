import React from "react";
import styles from "./NoData.module.scss";

const NoData = () => {
    return (
        <div className={styles["no-records"]}>
            <p>No Records</p>
            <p>Add Information to see records.</p>
        </div>
    );
};
export default NoData;
