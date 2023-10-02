import React from "react";
import WrapperMethod from "./WrapperMethod";
import FragmentMethod from "./FragmentMethod";
import EmptyTagMethod from "./EmptyTagMethod";

const FragmentsTest = (props) => {
    return (
        <div className="fragments-parent">
            <WrapperMethod></WrapperMethod>
            <FragmentMethod></FragmentMethod>
            <EmptyTagMethod></EmptyTagMethod>
        </div>
    );
};

export default FragmentsTest;
