import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//   padding: '10px',
//   background: '#efefef',
//   color: '#000000'
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'contain',
//   height: '600px',
//   width: '800px'
// }
const images = [
  'images/slideshow/lotr_fandom.png',
  'images/slideshow/inside_out_review.png',
  'images/slideshow/cultbox_fan_service.png',
  'images/slideshow/drwho_adams.png',
  'images/slideshow/why_does_the_empire_keep_building_deathstars.png',
  'images/slideshow/yonderland_interviews.png'
];


const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>I began blogging about <i>Doctor Who</i> around 2008 to get into the habit of writing regularly, and then submitted work elsewhere.</p>
      <p>Since then I've covered film and TV festivals, filing reviews and interviews with actors, directors, writers and artists.</p>
      <p>
      <h2>Published Works</h2>
      <ul>
        <li>My articles at <a href="https://www.denofgeek.com/author/andrew-blair/">Den of Geek</a> (2011 - Present Day)</li>
        <li>My articles at <a href="https://cultbox.co.uk/author/andrew-blair">Cultbox</a> (2013 - 2019)</li>
        <li>Movie Geek: The Den of Geek Guide to the Movieverse, 2017 (Cassell) <a href="https://www.octopusbooks.co.uk/titles/den-of-geek/movie-geek/9781844039357/">[Buy Here]</a></li>
      </ul>
      </p>
      <br />
  
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "800px"}} src={each} />)
          }
        </Zoom>
      </div>
    </div>
  );
};
export default SecondTab;
