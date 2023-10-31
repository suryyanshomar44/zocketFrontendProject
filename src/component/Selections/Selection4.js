import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";

const Step4 = () => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [sdate, setStartDate] = useState("");
  const [edate, setEndDate] = useState("");
  const [platform, setPlatform] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let req_product = localStorage.getItem("product_z")
      ? localStorage.getItem("product_z")
      : "";
    let req_budget = localStorage.getItem("budget_z")
      ? localStorage.getItem("budget_z")
      : "";
    let req_endDate = localStorage.getItem("end_z")
      ? localStorage.getItem("end_z")
      : "";
    let req_location = localStorage.getItem("location")
      ? localStorage.getItem("location")
      : "";
    let req_platform = localStorage.getItem("platform_z")
      ? localStorage.getItem("platform_z")
      : "";
    let req_startDate = localStorage.getItem("start_z")
      ? localStorage.getItem("start_z")
      : "";

    setName(req_product);
    setBudget(req_budget);
    setEndDate(req_endDate);
    setLocation(req_location);
    setPlatform(req_platform);
    setStartDate(req_startDate);
  }, []);

  const submitHandler = () => {
    localStorage.removeItem("product_z");
    localStorage.removeItem("budget_z");
    localStorage.removeItem("end_z");
    localStorage.removeItem("start_z");
    localStorage.removeItem("platform_z");
    localStorage.removeItem("location_z");
    localStorage.removeItem("step_1_active");
    localStorage.removeItem("step_2_active");

    navigate("/");
  };

  return (
    <div className="step1_root">
      <Header></Header>
      <div className="row">
        <div className="col-10">
          <h1>Your Ad Campaign</h1>
          <h6>Launch your ad in 4 easy steps</h6>
        </div>
      </div>
      <div className="row stepper_block">
        <div className="col-12">
          <Stepper />
        </div>
      </div>

      <div className="step_1_main">
        <div className="row">
          <div className="col-12 d-flex">
            <h2>What do you want to do? </h2>
            <h5>(Step 4 of 4)</h5>
          </div>
          <hr />
        </div>

        <div className="row conslusion">
          <div
            className={`col-3 ${active === 1 && "conslusion_active"}`}
            onClick={() => setActive(1)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Mukund cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_3.png" alt="" />
            </div>
          </div>
          <div
            className={`col-3 ${active === 2 && "conslusion_active"}`}
            onClick={() => setActive(2)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Mukund cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_4.png" alt="" />
            </div>
          </div>{" "}
          <div
            className={`col-3 ${active === 3 && "conslusion_active"}`}
            onClick={() => setActive(3)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Mukund cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_5.png" alt="" />
            </div>
          </div>{" "}
          <div
            className={`col-3 ${active === 4 && "conslusion_active"}`}
            onClick={() => setActive(4)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Mukund cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_6.png" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-10"></div>
          <div className="col-12 col-md-2 d-flex justify-content-md-end mt-3 mt-md-0">
            <button
              onClick={submitHandler}
              disabled={!active}
              className="btn btn-primary"
              style={{
                color: "#FFF",
                fontFamily: "Eudoxus Sans",
                fontSize: "16px",
                fontStyle: "normal",
                border: "none",
                borderRadius: "10px",
                width: "237px",
                marginTop: "20px",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
