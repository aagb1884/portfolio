import React from "react";
import BarryChips from "../Projects/BarryChips";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";

const FirstTab = () => {


  return (
    <div className="FirstTab">
      <h3>Projects</h3>
      <p><small>Hover over project title for more info.</small></p>
      <p><small>Scroll down or use Down key to move down the page.</small></p>
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

