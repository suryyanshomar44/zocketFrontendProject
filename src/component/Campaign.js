import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Header from "./Header";

const Campaign = () => {
  const [campaigns, setCampigns] = useState([
    {
      _id: 1,
      name: "Chocolate Truffle Cake",
      budget: 434,
      location: "Kolkata",
      platform: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M11 21.9999C17.0751 21.9999 22 17.0751 22 11C22 4.92486 17.0751 0 11 0C4.92487 0 0 4.92486 0 11C0 17.0751 4.92487 21.9999 11 21.9999Z"
            fill="#1977F3"
          />
          <path
            d="M15.2818 14.1803L15.7691 10.9999H12.7186V8.93634C12.7186 8.06699 13.144 7.21774 14.5114 7.21774H15.899V4.51067C15.899 4.51067 14.6398 4.29565 13.4363 4.29565C10.9242 4.29565 9.28137 5.8178 9.28137 8.57592V10.9999H6.48767V14.1803H9.28137V21.8668C9.84135 21.955 10.4152 21.9999 11 21.9999C11.5847 21.9999 12.1586 21.9535 12.7186 21.8668V14.1803H15.2818Z"
            fill="white"
          />
        </svg>
      ),
      status: "Live Now",
      sdate: 1696739698298,
      edate: 1699739898298,
    },
    {
      _id: 2,
      name: "StrawBerry Cake",
      budget: 543,
      location: "Chennai",
      platform: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M11 21.9999C17.0751 21.9999 22 17.0751 22 11C22 4.92486 17.0751 0 11 0C4.92487 0 0 4.92486 0 11C0 17.0751 4.92487 21.9999 11 21.9999Z"
            fill="#1977F3"
          />
          <path
            d="M15.2818 14.1803L15.7691 10.9999H12.7186V8.93634C12.7186 8.06699 13.144 7.21774 14.5114 7.21774H15.899V4.51067C15.899 4.51067 14.6398 4.29565 13.4363 4.29565C10.9242 4.29565 9.28137 5.8178 9.28137 8.57592V10.9999H6.48767V14.1803H9.28137V21.8668C9.84135 21.955 10.4152 21.9999 11 21.9999C11.5847 21.9999 12.1586 21.9535 12.7186 21.8668V14.1803H15.2818Z"
            fill="white"
          />
        </svg>
      ),
      status: "Live Now",
      sdate: 1694739698298,
      edate: 1699739898298,
    },
  ]);
  const [platform, setPlatform] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  const deleteHandler = async (id) => {
    try {
      let campaign_new = campaigns.filter((camp) => camp._id !== id);
      setCampigns([...campaign_new]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (platform) {
      let result = campaigns.filter((camp) => camp.platform === platform);
      setResult(result);
    } else {
      setResult([]);
    }
  }, [platform, campaigns, search]);

  useEffect(() => {
    if (search) {
      let result = campaigns.filter(
        (camp) =>
          camp.name.toLowerCase().includes(search) ||
          camp.location.toLowerCase().includes(search) ||
          camp.platform.toLowerCase().includes(search) ||
          camp.sdate.includes(search)
      );
      setResult(result);
    }
  }, [search, campaigns]);

  return (
    <div className="campaign_root">
      <Header></Header>
      <div className="row">
        <div className="col-8">
          <h1>Your Campigns</h1>
          <h6>Check the list of campigns you created</h6>
        </div>
        <div
          className="col-3 d-flex justify-content-center align-items-center"
          style={{ marginLeft: "90px" }}
        >
          <Link to="/selection1">
            <button className="btn button-1 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.5 19.25c4.813 0 8.75-3.938 8.75-8.75 0-4.813-3.938-8.75-8.75-8.75-4.813 0-8.75 3.938-8.75 8.75 0 4.813 3.938 8.75 8.75 8.75zM7 10.5h7M10.5 14V7"
                ></path>
              </svg>
              &nbsp; Create new Campaign
            </button>
          </Link>
        </div>
      </div>
      <section className="campaign_table">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6">
            <div className="search_main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 20a9 9 0 100-18 9 9 0 000 18zM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97z"
                ></path>
              </svg>
              <input
                type="text"
                className="search_input"
                placeholder="Search for the campaign"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="table_filter_header">Platform: &nbsp;</span>
            <select
              className="table_filter_select"
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="">All Platform </option>
              <option value="Google">Google</option>
              <option value="FB">FB</option>
              <option value="Youtube">Youtube</option>
              <option value="Instagram">Instagram</option>
            </select>
            <span
              className="table_filter_header"
              style={{ marginLeft: "10px" }}
            >
              Status: &nbsp;
            </span>
            <select
              className="table_filter_select"
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="">All Status </option>
              <option value="Google">Live Now</option>
              <option value="FB">Paused</option>
              <option value="Youtube">Exhausted</option>
            </select>
            <select
              className="table_filter_select"
              onChange={(e) => setPlatform(e.target.value)}
              style={{ marginLeft: "10px" }}
            >
              <option value="">Last 30 days </option>
              <option value="Google">Yesterday</option>
            </select>
          </div>
        </div>

        <div className="row table_main">
          <table className="table">
            <thead>
              <tr
                style={{
                  width: "1193px",
                  height: "48px",
                  borderRadius: "10px",
                  border: "1.5px solid #EAEAEA",
                  background: "#F8F8F8",
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "Eudoxus Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                }}
              >
                <th scope="col">On/Off</th>
                <th scope="col">Campaign</th>
                <th scope="col">Date Range</th>
                <th scope="col">Budget</th>
                <th scope="col">Location</th>
                <th scope="col">Platform</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {result.length > 0
                ? result.map((camp, i) => (
                    <tr key={i}>
                      <td>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td>{camp.name}</td>
                      <td>
                        {moment(camp.sdate).format("DD/MM/YY")} -{" "}
                        {moment(camp.edate).format("DD/MM/YY")}
                      </td>

                      <td>Rs. {camp.budget}</td>
                      <td>{camp.location}</td>
                      <td>{camp.platform}</td>
                      <td>{camp.status}</td>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="none"
                          viewBox="0 0 21 21"
                          onClick={() => deleteHandler(camp._id)}
                          style={{ cursor: "pointer" }}
                        >
                          <path
                            stroke="#FC3F3F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M18.375 5.232a88.988 88.988 0 00-8.768-.437c-1.732 0-3.464.087-5.197.262l-1.785.175M7.438 4.349l.192-1.147c.14-.83.245-1.452 1.724-1.452h2.292c1.479 0 1.593.656 1.724 1.461l.193 1.138M16.494 7.998l-.569 8.81c-.096 1.375-.175 2.442-2.616 2.442H7.69c-2.441 0-2.52-1.067-2.616-2.441l-.569-8.811M9.039 14.438h2.913M8.313 10.938h4.374"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                  ))
                : campaigns.length > 0
                ? campaigns.map((camp, i) => (
                    <tr
                      key={i}
                      style={{
                        height: "92px",
                        verticalAlign: "middle",
                      }}
                    >
                      <td>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td>{camp.name}</td>
                      <td>
                        {moment(camp.sdate).format("DD/MM/YY")} -{" "}
                        {moment(camp.edate).format("DD/MM/YY")}
                      </td>

                      <td>Rs. {camp.budget}</td>
                      <td>{camp.location}</td>
                      <td>{camp.platform}</td>
                      <td>
                        <div
                          style={{
                            width: "104px",
                            height: "30px",
                            borderRadius: "24px",
                            background: "#E1FFE0",
                            color: "#317C2E",
                            fontFamily: "Eudoxus Sans",
                            fontSize: "14px",
                            fontStyle: "normal",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {camp.status}
                        </div>
                      </td>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="none"
                          viewBox="0 0 21 21"
                          onClick={() => deleteHandler(camp._id)}
                          style={{ cursor: "pointer" }}
                        >
                          <path
                            stroke="#FC3F3F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M18.375 5.232a88.988 88.988 0 00-8.768-.437c-1.732 0-3.464.087-5.197.262l-1.785.175M7.438 4.349l.192-1.147c.14-.83.245-1.452 1.724-1.452h2.292c1.479 0 1.593.656 1.724 1.461l.193 1.138M16.494 7.998l-.569 8.81c-.096 1.375-.175 2.442-2.616 2.442H7.69c-2.441 0-2.52-1.067-2.616-2.441l-.569-8.811M9.039 14.438h2.913M8.313 10.938h4.374"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
