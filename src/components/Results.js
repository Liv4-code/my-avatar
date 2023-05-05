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

const Occupation = ({ formData }) => {
    const occupationBlurbs = [
        "whipping up tasty treats!",
        "running into errors.",
        "turning upward dogs downwards.",
        "vlogging and veganism.",
    ];

    const compileAvatarTop = () => {
        console.log(formData.yearsOld);
        // Compiling the top of the avatar
        if (formData.gender === "Female" && formData.yearsOld > 50) {
            return oldFHead;
        } else if (formData.gender === "Male" && formData.yearsOld > 50) {
            return oldMHead;
        } else if (formData.gender === "Female" && formData.yearsOld < 50) {
            return fHead;
        } else {
            return mHead;
        }
    };

    const compileAvatarMiddle = () => {
        // Compiling the middle of the avatar
        if (formData.occupation === "chef") {
            return chef;
        } else if (formData.occupation === "developer") {
            return developer;
        } else if (formData.occupation === "yoga instructor") {
            return yoga;
        } else {
            return smInfluencer;
        }
    };

    const setOccupationBlurb = () => {
        // Displaying different phrases based on occupation selected
        if (formData.occupation === "chef") {
            return occupationBlurbs[0];
        } else if (formData.occupation === "developer") {
            return occupationBlurbs[1];
        } else if (formData.occupation === "yoga instructor") {
            return occupationBlurbs[2];
        } else {
            return occupationBlurbs[3];
        }
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
                    <div className="pants">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 191.33 432.07"
                            className="pants__img"
                        >
                            <defs></defs>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                        className="cls-1"
                                        style={{ fill: formData.faveColor }}
                                        d="M147.5,10c8.86,49.64,14.83,99.68,20.29,149.78q9.54,87.59,16.1,175.43c.38,5.09,3.12,9.44,4.39,14.25,1.94,7.33,1.74,7.71-5.88,8.76a8,8,0,0,0-1.76.66c-4.3,3-9.37,1.64-14,2.1-8,.79-16.21,2-23.92-1.85-13.09-.24-13.66-.85-12-13.85a19.1,19.1,0,0,0-.63-7.37Q101,226,81,112.16c-1-5.57-1.62-11.2-2.5-16.79-.22-1.37.12-3-1.77-4.23-1,15.67-2,31.07-2.9,46.48q-5.41,91.5-10.78,183-.52,9-1.08,17.95a10.09,10.09,0,0,0,.8,4.83,22.12,22.12,0,0,1,1.8,6.18c.85,7.52-.4,8.9-7.87,9.36-7.43,2.67-15.22,2.27-22.91,2.46-4,.09-8.3,1.15-12-1.46a81.22,81.22,0,0,0-9.45-.57c-7.07.36-9.32-7.09-6-11.65C9.18,343.62,9,339.47,8.84,335,6.15,273.48,3.69,211.94.76,150.42c-2.25-47.36.81-94.49,5.12-141.59A2.7,2.7,0,0,1,7.72,7c4.12-.85,8.31-.12,12.45-.57,23.12.22,46.19-1.23,69.25-2.25,17.08-.75,34.2-1.58,51.18-3.95a11.51,11.51,0,0,1,4-.12,3.44,3.44,0,0,1,1.55.85C148.47,3.67,147.26,6.92,147.5,10Z"
                                    />
                                    <path
                                        className="cls-2"
                                        style={{ fill: "#fde0e5" }}
                                        d="M18.73,426.89c-7.26-1.29-8.08-3.12-4-9,6.65-9.58,7.64-20.08,4.71-31-.72-2.7,1.21-2.89,2.31-4a24.08,24.08,0,0,1,4.59-1.14c5.82-.41,11.66,0,17.48-.29,4.23.41,8.68-1.17,12.65,1.44a1.65,1.65,0,0,1,1.58,2.64c-2.2,3.32-1,6.94-1.36,10.42,0,1.11-.14,2.27,1,3,1.51,8.19,7.77,13.23,12.7,19.15,1.64,2,4.6,3.55,3.69,6.49-.87,2.79-3.75,3.2-6.53,3.61-11.48,1.67-22.91,2.53-34.52,1-4-.55-8.19-.9-12.3-1.24A2.18,2.18,0,0,0,18.73,426.89Z"
                                    />
                                    <path
                                        className="cls-2"
                                        style={{ fill: "#fde0e5" }}
                                        d="M146.7,395.88c-.7-2,1.58-5-2-6a1.71,1.71,0,0,1,1.61-2.41c1.83.11,1-1.65,1.86-2.08a6.24,6.24,0,0,1,3.34-.9c9,0,17.9-.25,26.82-1.1a11.69,11.69,0,0,1,4.43.5c.46.85,1.48,1.87,1.29,2.54-3.64,12.48-1.45,24,5.69,34.65,3.16,4.74,1.49,8-4.44,8.71-12.09,1.5-24.21,2.87-36.41,2a122.82,122.82,0,0,1-16.08-2.2c-2.46-.5-4-2.29-2.18-5.23a40.46,40.46,0,0,1,8.36-9.18,23.27,23.27,0,0,0,7.7-13.31A4.59,4.59,0,0,0,146.7,395.88Z"
                                    />
                                    <path
                                        className="cls-3"
                                        style={{ fill: "#c16e5e" }}
                                        d="M182.78,383.88c-5.15,2.22-10.68,1.11-16,1.76-6.38.77-12.9-.32-19.26,1.14a.68.68,0,0,1-1.19-.16c-.38-2,.32-4-.5-5.93-.31-5.92-.66-11.83-.89-17.74-.06-1.78-.32-3.25-2.23-3.87,12.67,2.1,25.3-.28,37.95-.25C182.3,367.1,181.64,375.57,182.78,383.88Z"
                                    />
                                    <path
                                        className="cls-3"
                                        style={{ fill: "#c16e5e" }}
                                        d="M24.91,383c-1.11.88-2.12.3-3.13-.21q0-11.44-.05-22.89c11.68.53,23.3-1,35-1q-.09,12-.19,23.9H43.7C37.43,382.22,31.16,381.83,24.91,383Z"
                                    />
                                    <path
                                        className="cls-4"
                                        style={{ fill: "#fee8ec" }}
                                        d="M146.7,395.88c3.51-.87,1.85,2,1.85,3s1.66,3.88-1.84,3C146.71,399.89,146.7,397.89,146.7,395.88Z"
                                    />
                                    <path
                                        className="cls-5"
                                        style={{ fill: "#feeff3" }}
                                        d="M147,386.72l.46.06c.18.39,2.18.15.61.94-1.23.63-2.76.59-3.39,2.15-1.72-1.64-1.15-2.55.95-3A.82.82,0,0,1,147,386.72Z"
                                    />
                                    <path
                                        className="cls-6"
                                        style={{ fill: "#feedf1" }}
                                        d="M57.71,398.9c-.59,0-1.6.22-1.71,0a2.22,2.22,0,0,1,.72-3C57.9,396.62,57.69,397.8,57.71,398.9Z"
                                    />
                                    <path
                                        className="cls-2"
                                        style={{ fill: "#fde0e5" }}
                                        d="M147,386.72l-1.37.17c0-2.07.09-4.13.14-6.2Z"
                                    />
                                    <path
                                        className="cls-7"
                                        style={{ fill: "#feebef" }}
                                        d="M18.73,426.89c.48-.81,1.23-1.23,2.05-.76s.08,1.14,0,1.73A2,2,0,0,1,18.73,426.89Z"
                                    />
                                    <path
                                        className="cls-8"
                                        style={{ fill: "#bd6655" }}
                                        d="M24.91,383l-.13-.85c6.32-.08,12.67-1.3,18.92.66Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <p>
                    Meet your Avatar {formData.firstName} {formData.surname}. A{" "}
                    {formData.occupation} with a passion for{" "}
                    {setOccupationBlurb()}
                </p>
            </div>
        </div>
    );
};

export default Occupation;
