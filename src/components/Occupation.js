import React from "react";

const Occupation = () => {
    return (
        <div>
            <div className="form-group">
                <label for="exampleFormControlSelect2">Occupation</label>
                <select
                    multiple
                    className="form-control"
                    id="exampleFormControlSelect2"
                >
                    <option>Chef</option>
                    <option>Yoga Instructor</option>
                    <option>Developer</option>
                    <option>Social Media Influencer</option>
                </select>
            </div>
            <div className="form-group">
                <input type="color" name="" value="" />
            </div>
        </div>
    );
};

export default Occupation;
