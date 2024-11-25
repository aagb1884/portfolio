import {useState} from 'react';

const SlightlyBetterBooks = () => {


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


    return ( 
        <section className="slightly-better-books">
<h2 onClick={toggleVisibility}>Slightly Better Reads</h2>
      {isVisible &&     
        <div className='slighty-better-books-description'>
          <br />
          <h3>Capstone Project, Solo, 2 weeks:</h3>
            <p>For my final CodeClan project my aim was to build an extendable prototype of a bookshelf app aimed at parents and carers of children.</p>
            <p>I began designing this full stack app from the backend using Java and Spring; designing the classes, repositories and controllers then using test-driven-development to build them.</p> 
            <p>I hardcoded the data myself as the book APIs I found were unsuitable for my needs.</p>
            <p>I built the front end using React JS and React Routers.</p> 
            <p>The aim was to build an app where a user could search a list of books and add a book to their shelf with a view to expanding the functionality at a later date. This would consolidate everything I had learned during my CodeClan course.</p>
       <br />
        <h4>The Tech Stack</h4>
        
        <ul>
            <li>Java</li>
            <li>Spring</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/capstone_project">Github Repo <img id='external-link' title='external link' src='/images/external-link.png' /></a>
        <br />
        <br />
        <img src="images/home_page copy.png" alt='slightly better books homepage' width="600" height="500"></img>
        </div>
}
</section>
        
     );
}
 
export default SlightlyBetterBooks;