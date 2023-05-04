import React from "react";
import "../componentStyles/Forms.css";

const Name = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="form-group">
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
            <div className="form-group">
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
        </div>
    );
};

export default Name;
