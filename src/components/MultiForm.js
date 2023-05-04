import React, { useState } from "react";
import "../componentStyles/Forms.css";
import Name from "./Name";
import Gender from "./Gender";
import Occupation from "./Occupation";
import Results from "./Results";

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
            return <Name formData={formData} setFormData={setFormData} />;
        } else if (currentPage === 2) {
            return <Gender formData={formData} setFormData={setFormData} />;
        } else if (currentPage === 3) {
            return <Occupation formData={formData} setFormData={setFormData} />;
        } else {
            return <Results formData={formData} />;
        }
    };

    const submitForm = () => {
        console.log(formData);
        return "Submit";
    };

    return (
        <form>
            <div className="bar">
                <div
                    className="bar__progress-bar"
                    style={{
                        width:
                            currentPage === 1
                                ? "33%"
                                : currentPage === 2
                                ? "67%"
                                : "100%",
                    }}
                ></div>
            </div>
            <div className="form-display">{displayPage()}</div>
            <div className="step-buttons">
                <button
                    disabled={currentPage === 1}
                    type="button"
                    className="btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>
                <button
                    style={{ display: currentPage === 4 ? "none" : "block" }}
                    type="button"
                    className="btn"
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        // submitForm();
                    }}
                >
                    {currentPage === 3 ? submitForm() : "Next"}
                </button>
            </div>
        </form>
    );
};

export default MultiForm;
