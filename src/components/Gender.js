import React from "react";

const Gender = ({ formData, setFormData }) => {
    const convertToYearsAgo = (date) => {
        console.log(date);
        const now = new Date().getFullYear();
        const selectedDate = new Date(date).getFullYear();
        const yearsAgo = now - selectedDate;
        console.log(yearsAgo);
        setFormData({
            ...formData,
            yearsOld: yearsAgo,
        });
    };

    return (
        <div>
            <div className="form-check d-flex align-items-center py-3">
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
                <label className="mx-4">Male</label>
            </div>
            <div className="form-check d-flex align-items-center py-3 mb-5">
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
                <label className="mx-4">Female</label>
            </div>
            <div className="form-check d-flex flex-column justify-content-center align-items-center p-0 mt-5">
                <label className="py-2">Provide A Date Of Birth</label>
                <input
                    type="date"
                    value={formData.dob}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            dob: event.target.value,
                        });
                        convertToYearsAgo(event.target.value);
                    }}
                />
            </div>
            <div className="text-center age-output mt-4">
                {formData.yearsOld + ` Years Old`}
            </div>
        </div>
    );
};

export default Gender;
