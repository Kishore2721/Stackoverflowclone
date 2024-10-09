import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionDetails from "./QuestionDetails";

import "../../App.css";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />

      <div className="home-container-2">
        <div className="home-container-3">
          <QuestionDetails />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;