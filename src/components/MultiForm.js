import React, { useState } from "react";
import "../componentStyles/Forms.css";
import Name from "./Name";
import Gender from "./Gender";
import Occupation from "./Occupation";
import Results from "./Results";

// Parent form component that will house all form steps
const MultiForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        gender: "",
        dob: "",
        yearsOld: 0,
        occupation: "chef",
        faveColor: "",
    });
    const [error, setError] = useState("");

    // When user clicks next button, check if both name fields are filled out
    // If not set the error message that will be displayed in the Name component
    const handleClick = () => {
        // Name input validation: If first or last name not filled out
        if (!formData.firstName || !formData.surname) {
            setError(
                "Make your Avatar feel special by giving them a full name!"
            );
        } else if (formData.firstName && formData.surname) {
            setError(null);
            setCurrentPage(currentPage + 1);
        }
    };

    // Displaying form steps depending on "currentPage" state changed by step button clicks
    const displayPage = () => {
        if (currentPage === 1) {
            return (
                <Name
                    formData={formData}
                    setFormData={setFormData}
                    error={error}
                    setError={setError}
                />
            );
        } else if (currentPage === 2) {
            return <Gender formData={formData} setFormData={setFormData} />;
        } else if (currentPage === 3) {
            return <Occupation formData={formData} setFormData={setFormData} />;
        } else {
            return <Results formData={formData} />;
        }
    };

    return (
        <form>
            <div className="bar">
                <div
                    className="bar__progress-bar"
                    style={{
                        width:
                            currentPage === 1
                                ? "25%"
                                : currentPage === 2
                                ? "50%"
                                : currentPage === 3
                                ? "75%"
                                : "100%",
                    }}
                ></div>
            </div>
            {/* Intro displayed on first step of form */}
            {currentPage === 1 && (
                <div className="header">
                    <h5 className="text-center">
                        Start by giving your avatar a name.
                    </h5>
                </div>
            )}
            {/* Where each form step gets rendered */}
            <div className="form-display d-flex flex-column justify-content-center align-items-center p-5">
                {displayPage()}
            </div>
            {/* Prev, Next & Submit buttons */}
            <div className="step-buttons d-flex justify-content-between p-4">
                <button
                    disabled={currentPage === 1}
                    type="button"
                    className="btn text-light"
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>
                <button
                    style={{ display: currentPage === 4 ? "none" : "block" }}
                    type="button"
                    className="btn text-light"
                    onClick={handleClick}
                >
                    {currentPage === 3 ? "View Avatar" : "Next"}
                </button>
            </div>
        </form>
    );
};

export default MultiForm;
