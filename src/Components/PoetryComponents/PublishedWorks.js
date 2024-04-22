import Anthologies from "./PublishedWorksComponents/Anthologies";
import CollectionsPamphlets from "./PublishedWorksComponents/CollectionsPamphlets";
import Journals from "./PublishedWorksComponents/Journals";
import React, { useState } from 'react';

const PublishedWorks = () => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return (  
        <section className='published-works'>
        <h2 onClick={toggleVisibility}>Published Works</h2>
        {isVisible && 
            <div className="published-works-list">
      <br />
       <CollectionsPamphlets />
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AWgccb62epU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br />
      <br />
      <Anthologies />
      <Journals />
      </div>
      }
      </section>
    );
}
 
export default PublishedWorks;