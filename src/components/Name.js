import React from "react";
import "../componentStyles/Forms.css";

const Name = ({ formData, setFormData, error }) => {
    return (
        <div className="name-inputs d-flex flex-column justify-content-center align-items-center">
            {/* Name text inputs */}
            <div className="form-group d-flex flex-column justify-content-center align-items-center my-4">
                <input
                    value={formData.firstName}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            firstName: event.target.value,
                        });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                />
            </div>
            <div className="form-group d-flex flex-column justify-content-center align-items-center my-4">
                <input
                    value={formData.surname}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            surname: event.target.value,
                        });
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Surname"
                />
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Name;
