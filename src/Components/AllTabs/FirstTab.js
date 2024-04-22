import React from "react";
import ExoWeather from "../Projects/exoWeather";
import EurovisionBingo from "../Projects/EurovisionBingo";
import SlightlyBetterBooks from "../Projects/SlightlyBetterBooks";
import { Link } from "react-router-dom";
import AllApps from "../Projects/AllApps";

const FirstTab = () => {


  return (
    <section className="FirstTab">
      <summary>
      <p>I retrained as a software developer in 2023, applying for an intensive 16 week development course at CodeClan.</p>
      <p>I have produced full stack applications using Python, JavaScript and Java, and am working on more in my spare time.</p>
      <p>My preference is for front end React coding, CSS, accessibility and design (but I'm happy working anywhere across the stack).</p>
      <p> You can see a list of my projects - from the coursework and from my spare time - below.</p>
      <p>You can see all the apps I've made outside of CodeClan <Link to="/apps">here</Link>.</p>
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <ExoWeather />
      <br />
      <SlightlyBetterBooks />
      <br />
      <EurovisionBingo />
      <br />
      <AllApps />
    </section>
  );
};
export default FirstTab;

