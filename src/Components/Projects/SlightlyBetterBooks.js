import {useState} from 'react';

const SlightlyBetterBooks = () => {


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


    return ( 
        <div className="slightly-better-books">
<h4 onClick={toggleVisibility}><i>Slightly</i> Better Books</h4>
      {isVisible &&     
        <p><h5>Capstone Project, Solo, 2 weeks:</h5>
            <p>For my final CodeClan project my aim was to build an extendable prototype of a bookshelf app aimed at parents and carers of children.</p>
            <p>I began designing this full stack app from the backend using Java and Spring; designing the classes, repositories and controllers then using test-driven-development to build them.</p> 
            <p>I hardcoded the data myself as the book APIs I found were unsuitable for my needs.</p>
            <p>I built the front end using React JS and React Routers.</p> 
            <p>The aim was to build an app where a user could search a list of books and add a book to their shelf with a view to expanding the functionality at a later date. This would consolidate everything I had learned during my CodeClan course.</p>
       <br />
        <h5>The Tech Stack</h5>
        <p>
        <ul>
            <li>Java</li>
            <li>Spring</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>CSS</li>
        </ul>
        <p><a href="https://github.com/aagb1884/capstone_project">Github Repo</a></p>
        <br />
        <img src="images/home_page copy.png" width="600" height="500"></img>
        </p>
        </p>
}

        </div>
     );
}
 
export default SlightlyBetterBooks;