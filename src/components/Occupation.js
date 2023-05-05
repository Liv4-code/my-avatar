import React from "react";

const Occupation = ({ formData, setFormData }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                    Select An Occupation
                </label>
                <select
                    value={formData.occupation}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            occupation: event.target.value,
                        });
                    }}
                    className="form-control"
                >
                    <option value="chef">Chef</option>
                    <option value="yoga instructor">Yoga Instructor</option>
                    <option value="developer">Developer</option>
                    <option value="social-media influencer">
                        Social Media Influencer
                    </option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                    Choose Your Favorite Color
                </label>
                <input
                    value={formData.faveColor}
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            faveColor: event.target.value,
                        });
                    }}
                    type="color"
                />
            </div>
        </div>
    );
};

export default Occupation;
