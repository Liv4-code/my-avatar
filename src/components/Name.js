import React from "react";

const Name = () => {
    return (
        <div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Surname"
                />
            </div>
        </div>
    );
};

export default Name;
