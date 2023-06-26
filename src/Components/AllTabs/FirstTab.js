import React from "react";
import BarryChips from "../Projects/BarryChips";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";
import SlightlyBetterBooks from "../Projects/SlightlyBetterBooks";

const FirstTab = () => {


  return (
    <section className="FirstTab">
      <h3>Projects</h3>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <BarryChips />
      <br />
      <ExoWeather />
      <br />
      <SlightlyBetterBooks />
      <br />
      <EurovisionBingo />
    </section>
  );
};
export default FirstTab;

