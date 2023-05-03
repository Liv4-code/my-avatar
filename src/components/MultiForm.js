import React, { useState } from "react";
import "../componentStyles/MultiForm.css";
import Name from "./Name";
import Gender from "./Gender";
import Occupation from "./Occupation";

const MultiForm = () => {
    let [currentPage, setCurrentPage] = useState(1);
    let [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        gender: "",
        dob: "",
        occupation: "",
        faveColor: "",
    });

    const displayPage = () => {
        if (currentPage === 1) {
            return <Name data={formData} />;
        } else if (currentPage === 2) {
            return <Gender />;
        } else {
            return <Occupation />;
        }
    };

    return (
        <form>
            <div className="formDisplay">{displayPage()}</div>
            <div className="stepButtons">
                <button
                    disabled={currentPage === 1}
                    type="button"
                    className="btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>
                <button
                    disabled={currentPage === 3}
                    type="button"
                    className="btn"
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default MultiForm;
