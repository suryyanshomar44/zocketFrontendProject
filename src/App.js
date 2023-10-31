import React from "react";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaign from "./component/Campaign";
import Step1 from "./component/Selections/Selection1";
import Step2 from "./component/Selections/Selection2";
import Step3 from "./component/Selections/Selection3";
import Step4 from "./component/Selections/Selection4";

const App = () => {
  return (
    <Router>
      <div className="root">
        <div className="row">
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-11 root_main">
            <Routes>
              <Route path="/" element={<Campaign />} />
              <Route path="/selection1" element={<Step1 />} />
              <Route path="/selection2" element={<Step2 />} />
              <Route path="/selection3" element={<Step3 />} />
              <Route path="/selection4" element={<Step4 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
