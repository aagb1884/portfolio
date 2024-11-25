import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'images/slideshow/lotr_fandom.png',
  'images/slideshow/inside_out_review.png',
  'images/slideshow/cultbox_fan_service.png',
  'images/slideshow/drwho_adams.png',
  'images/slideshow/why_does_the_empire_keep_building_deathstars.png',
  'images/slideshow/yonderland_interviews.png',
  'images/slideshow/james_mcavoy_interview.png',
  'images/slideshow/top_50_arseholes.png',
  'images/slideshow/yr_heroes_r_terrible.png',
];


const SecondTab = () => {
  return (
    <section className="SecondTab">
      <summary>
      <p>I began blogging about <i>Doctor Who</i> around 2008 to get into the habit of writing regularly, and then submitted work elsewhere.</p>
      <p>Since then I've covered film and TV festivals, filing reviews and interviews with actors, directors, writers and artists.</p>
      </summary>
      <br />
      <p>
      <h2>Published Works</h2>
      <br />
      <ul>
        <li>My articles at <a href="https://www.denofgeek.com/author/andrew-blair/">Den of Geek <img id='external-link' title='external link' src='/images/external-link.png' /></a> (2011 - Present Day)</li>
        <li>My articles at <a href="https://cultbox.co.uk/author/andrew-blair">Cultbox <img id='external-link' title='external link' src='/images/external-link.png' /></a> (2013 - 2019)</li>
        <li>Movie Geek: The Den of Geek Guide to the Movieverse, 2017 (Cassell) <a href="https://www.octopusbooks.co.uk/titles/den-of-geek/movie-geek/9781844039357/">[Buy Here <img id='external-link' title='external link' src='/images/external-link.png' />]</a></li>
      </ul>
      </p>
      <br />
  
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} src={each} alt={`Slide ${index + 1}`}/>)
          }
        </Zoom>
      </div>
    </section>
  );
};
export default SecondTab;
