import React, { Fragment } from "react";
import "../App.css";
import Header from "../components/header";
import ShowInfo from "../components/results/showInfo.js";

function App() {
  return (
    <Fragment>
      <Header />
      <ShowInfo />
    </Fragment>
  );
}

export default App;
