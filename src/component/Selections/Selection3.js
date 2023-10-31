import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";

const Step3 = () => {
  const [radius, setRadius] = useState("");
  const [budget, setBudget] = useState(50000);
  const [activeType, setActiveType] = useState("location");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  let navigate = useNavigate();

  const submitHandler = () => {
    JSON.stringify(localStorage.setItem("budget_z", budget));
    JSON.stringify(localStorage.setItem("start_z", startDate));
    JSON.stringify(localStorage.setItem("end_z", endDate));
    if (activeType === "location") {
      JSON.stringify(localStorage.setItem("location", location));
    } else {
      JSON.stringify(localStorage.setItem("location", radius + " kms"));
    }
  };

  return (
    <div className="step1_root">
      <Header></Header>
      <div className="row">
        <div className="col-10">
          <h1>Your Ad Campaign</h1>
          <h6>Launch your ad in 4 easy steps</h6>
        </div>
        <button className="col-1 btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="row stepper_block">
        <div className="col-12">
          <Stepper />
        </div>
      </div>

      <div className="row">
        <div className="col-9 step_1_main">
          <div className="col-12 d-flex">
            <h2>What do you want to do? </h2>
            <h5>(Step 1 of 4)</h5>
          </div>
          <hr />
          <h3> 1- Budget & Dates Info</h3>
          <div className="row">
            <div className="col-6">
              <p>Start Date</p>
              <input
                type="date"
                className="date_input"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              <p>End Date</p>
              <input
                type="date"
                className="date_input"
                disabled={startDate === ""}
                min={startDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
            <div className="col-12 " style={{ paddingLeft: "3rem" }}>
              <p className="row mt-4">Set Your Target Budget</p>
              <input
                type="range"
                min="100"
                max="100000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="row slider_input"
              />
              {budget && `Rs. ${budget}`}
            </div>
          </div>

          <div className="location_info">
            <h3> 2- Location Info</h3>
            <p>Location Type</p>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => setActiveType("location")}
                  className={`btn btn-block button-1 ${
                    activeType === "radius" && "button-2"
                  }`}
                >
                  Location
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => setActiveType("radius")}
                  className={`btn btn-block button-1 ${
                    activeType === "location" && "button-2"
                  }`}
                >
                  Radius
                </button>
              </div>
            </div>
            <div className="set_location">
              {activeType === "location" && (
                <>
                  <p className="row">Set your location</p>
                  <input
                    type="text"
                    className="row location_input"
                    placeholder="Select a place name, address or coordinates"
                    onChange={(e) => {
                      setRadius("");
                      setLocation(e.target.value);
                    }}
                  />
                </>
              )}
              {activeType === "radius" && (
                <>
                  <p className="row mt-4">Set Your Target Radius</p>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={radius}
                    onChange={(e) => {
                      setLocation("");
                      setRadius(e.target.value);
                    }}
                    className="row slider_input"
                  />
                  {radius && `${radius} kms`}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-end">
          <Link to="/selection4">
            <button
              className="btn btn-primary"
              disabled={
                startDate === "" ||
                endDate === "" ||
                (location === "" && radius === "")
              }
              onClick={submitHandler}
              style={{
                color: "#FFF",
                fontFamily: "Eudoxus Sans",
                fontSize: "16px",
                fontStyle: "normal",
                border: "none",
                borderRadius: "10px",
                width: "237px",
                marginTop: "30px",
                backgroundColor: "#0F6EFF",
              }}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step3;
