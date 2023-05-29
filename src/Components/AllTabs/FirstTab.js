import React from "react";
import BarryChips from "../Projects/BarryChips";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";

const FirstTab = () => {

  // const barryImage = "<img src="images/barry_chips_homepage.png">

  return (
    <div className="FirstTab">
      <h3>Projects</h3>
      <br />
      <BarryChips />
      <br />
      <ExoWeather />
      <br />
      <EurovisionBingo />

    </div>
  );
};
export default FirstTab;

