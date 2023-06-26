import React from "react";
import Podcasting from "../PoetryComponents/Podcasting";
import PublishedWorks from "../PoetryComponents/PublishedWorks";
import LiveEvents from "../PoetryComponents/LiveEvents";

const ThirdTab = () => {
  return (
    <section className="ThirdTab">
      <summary>
      <p>I started writing and performing poetry around 2012, influenced mostly by the people I saw at open mic nights. 
      As I started reading more I expanded the range of my mimicry, finding my own voice by focussing on taking really stupid ideas incredibly seriously.</p>
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <Podcasting />
      <br />
     <PublishedWorks />
     <br />
     <LiveEvents />
    </section>
  );
};
export default ThirdTab;
