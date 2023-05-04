import React from "react";
import "../componentStyles/Results.css";
import mHead from "../images/m-head.png";
import fHead from "../images/f-head.png";
import oldMHead from "../images/old-m-head.png";
import oldFHead from "../images/old-f-head.png";
import chef from "../images/chef.png";
import developer from "../images/developer.png";
import yoga from "../images/yoga.png";
import smInfluencer from "../images/social-media.png";
import pants from "../images/pants.svg";

const Occupation = ({ formData }) => {
    const compileAvatarTop = () => {
        // Compiling the top of the avatar
        if (formData.gender === "Male") {
            return mHead;
        } else if (formData.gender === "Female") {
            return fHead;
        } else if (formData.gender === "Male" && formData.dob) {
            return oldMHead;
        } else {
            return oldFHead;
        }
    };

    const compileAvatarMiddle = () => {
        // Compiling the middle of the avatar
        if (formData.occupation === "chef") {
            return chef;
        } else if (formData.occupation === "developer") {
            return developer;
        } else if (formData.occupation === "yoga") {
            return yoga;
        } else {
            return smInfluencer;
        }
    };

    const compileAvatarBottom = () => {
        // Compiling the bottom of the avatar
    };

    return (
        <div className="avatar">
            <div className="avatar__body">
                <div>
                    <div className="head">
                        <img
                            src={compileAvatarTop()}
                            alt="Avatar Head"
                            className="head__img"
                        />
                    </div>
                    <div className="torso">
                        {" "}
                        <img
                            src={compileAvatarMiddle()}
                            alt="Avatar Torso"
                            className="torso__img"
                        />
                    </div>
                    <div className="pants"></div>
                </div>
                <p>
                    Meet your Avatar {formData.firstName} {formData.surname}. A{" "}
                    {formData.occupation} with a passion for ...
                </p>
            </div>
        </div>
    );
};

export default Occupation;
