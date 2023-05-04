import React from "react";

const Occupation = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Occupation</label>
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
                    <option value="yoga">Yoga Instructor</option>
                    <option value="developer">Developer</option>
                    <option value="smInfluence">Social Media Influencer</option>
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
