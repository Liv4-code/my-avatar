import React from "react";

const Gender = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="form-check">
                <input
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            gender: event.target.value,
                        });
                    }}
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            gender: event.target.value,
                        });
                    }}
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                    Female
                </label>
            </div>
            <div className="form-check">
                <input
                    value={formData.dob}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            dob: event.target.value,
                        });
                    }}
                    type="date"
                />
            </div>
        </div>
    );
};

export default Gender;
