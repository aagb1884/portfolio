import React from "react";
import BarryChips from "../Projects/BarryChips";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";

const FirstTab = () => {


  return (
    <div className="FirstTab">
      <h3>Projects</h3>
      <p><small>Click on project heading to see/hide further info.</small></p>
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

