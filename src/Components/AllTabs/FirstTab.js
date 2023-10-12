import React from "react";
import BarryChips from "../Projects/BarryChips";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";
import SlightlyBetterBooks from "../Projects/SlightlyBetterBooks";
import { NavLink } from "react-router-dom";

const FirstTab = () => {


  return (
    <section className="FirstTab">
      <summary>
      <p>I retrained as a software developer in 2023, applying for an intensive 16 week development course at CodeClan.</p>
      <p>I have produced full stack applications using Python, JavaScript and Java, and am working on more in my spare time.</p>
      <p>My preference is for front end React coding, CSS, accessibility and design (but I'm happy working anywhere across the stack).</p>
      <p> You can see a list of my projects - from the coursework and from my spare time - below.</p>
      {/* <p>You can see all the apps I've made outside of CodeClan <NavLink to="/apps">here</NavLink>.</p> */}
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
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

