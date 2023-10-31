import React, { useEffect, useState } from "react";
import Stepper from "../Stepper/Stepper";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import "../../index.css";
const Step1 = () => {
  const [active, setActive] = useState(0);
  const [platform, setPlatform] = useState("");
  let navigate = useNavigate();

  const submitHandler = () => {
    JSON.stringify(localStorage.setItem("platform_z", platform));
    JSON.stringify(localStorage.setItem("step_1_active", active));
  };

  useEffect(() => {
    let req_platform = localStorage.getItem("platform_z")
      ? localStorage.getItem("platform_z")
      : "";
    let req_active = localStorage.getItem("step_1_active")
      ? localStorage.getItem("step_1_active")
      : "";
    setActive(Number(req_active));
    setPlatform(req_platform);
  }, []);

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

      <div className="step_1_main">
        <div className="row">
          <div className="col-12 d-flex">
            <h2>What do you want to do? </h2>
            <h5>(Step 1 of 4)</h5>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className={`col-3 step_1_card ${
              active === 1 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(1);
              setPlatform("Google");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads</h4>
              </div>
            </div>
          </div>
          <div
            className={`col-3 step_1_card ${
              active === 2 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(2);
              setPlatform("FB");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as Facebook Message</h3>
                <h4>Get more FB messages from Leads</h4>
              </div>
            </div>
          </div>
          <div
            className={`col-3 step_1_card ${
              active === 3 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(3);
              setPlatform("FB");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Increase page followers</h3>
                <h4>Encourage customers to follow your page</h4>
              </div>
            </div>
          </div>
          <div
            className={`col-3 step_1_card ${
              active === 4 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(4);
              setPlatform("FB");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Customer Leads</h3>
                <h4>Encourage customers to take action</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className={`col-3 step_1_card ${
              active === 5 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(5);
              setPlatform("Youtube");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get more youtube views</h3>
                <h4>Increase organic views by obtaining users </h4>
              </div>
            </div>
          </div>{" "}
          <div
            className={`col-3 step_1_card ${
              active === 6 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(6);
              setPlatform("Instagram");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get more website traffic</h3>
                <h4>Get the right people to visit your website</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className={`col-3 step_1_card ${
              active === 7 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(7);
              setPlatform("Google");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Increase Live store traffic</h3>
                <h4>Drive visits to local stores & Dealerships</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className={`col-3 step_1_card ${
              active === 8 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(8);
              setPlatform("Youtube");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Increase your App installs</h3>
                <h4>Get more installs, interactions for your app</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className={`col-3 step_1_card ${
              active === 9 && "conslusion_active"
            }`}
            onClick={() => {
              setActive(9);
              setPlatform("Google");
            }}
          >
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Increase the catalogue sales</h3>
                <h4>Drive the sales of your catalogue </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10"></div>
          <div className="col-12 col-md-2 d-flex justify-content-md-end mt-3 mt-md-0">
            <Link to="/selection2">
              <button
                className="btn btn-primary"
                disabled={platform === ""}
                onClick={() => submitHandler()}
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
