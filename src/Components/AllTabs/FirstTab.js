import React from "react";
import EurovisionBingo from "../Projects/EurovisionBingo";
import AllApps from "../Projects/AllApps";
import ScottishFootballSims from "../Projects/ScottishFootballSims";
import PoetRemixer from "../Projects/PoetRemixer";

const FirstTab = () => {


  return (
    <section className="FirstTab">
      <summary >
      <p>I retrained as a software developer in 2023, applying for an intensive 16 week development course at CodeClan.</p>
      <p>I have produced full stack applications using Python, JavaScript and Java, and am working on more in my spare time.</p>
      <p>My preference is for front end React coding, CSS, accessibility and design (but I'm happy working anywhere across the stack).</p>
      <p> You can see a selection of my projects below.</p>
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <EurovisionBingo />
      <br />
      <AllApps />
      <br />
      <ScottishFootballSims />
      <br />
      <PoetRemixer />
    </section>
  );
};
export default FirstTab;

