import React, { Fragment } from "react";
import "../App.css";
import Header from "../components/header";
import ShowInfo from "../components/results/showInfo.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container" style={{ paddingTop: "10px" }}>
        <ShowInfo />
      </div>
    </Fragment>
  );
}

export default App;
