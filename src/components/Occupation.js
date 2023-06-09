import React from "react";
import { HexColorPicker } from "react-colorful";
// Used to make the color picker input visually appealing
// providing for a better user experience

const Occupation = ({ formData, setFormData }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {/* Occupation select input */}
            <div className="form-group d-flex flex-column justify-content-center align-items-center my-4">
                <label>Select An Occupation</label>
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
            {/* Color picker made with react-colorful package */}
            <div className="form-group d-flex flex-column justify-content-center align-items-center my-4">
                <label>Choose Your Favorite Color</label>
                <HexColorPicker
                    color={formData.faveColor}
                    onChange={(color) => {
                        setFormData({
                            ...formData,
                            faveColor: color,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default Occupation;
