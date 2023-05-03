import React from "react";

const Gender = () => {
    return (
        <div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                />
                <label className="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                    Female
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                />
                <label className="form-check-label" for="exampleRadios3">
                    Other
                </label>
            </div>
            <div className="form-check">
                <input type="date" name="" value="" />
            </div>
        </div>
    );
};

export default Gender;
