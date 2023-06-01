import Anthologies from "./PublishedWorksComponents/Anthologies";
import CollectionsPamphlets from "./PublishedWorksComponents/CollectionsPamphlets";
import Journals from "./PublishedWorksComponents/Journals";

const PublishedWorks = () => {
    return (  
        <>
         <h2>Published Works</h2>
      <p>
       <CollectionsPamphlets />
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AWgccb62epU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br />
      <br />
      <Anthologies />
      <Journals />
      </p>
      </>
    );
}
 
export default PublishedWorks;