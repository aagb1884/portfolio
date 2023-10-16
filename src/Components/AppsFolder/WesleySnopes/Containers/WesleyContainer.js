import { useState, useEffect } from 'react';

const WesleyContainer = () => {

    const imgsrcs = [
        '/images/wesleySnopes/sorry_what.png',
        '/images/wesleySnopes/train_to_factville.png',
        '/images/wesleySnopes/blade.png',
        '/images/wesleySnopes/balderdash.png',
        '/images/wesleySnopes/bull.png',
        '/images/wesleySnopes/factionary.png',
        '/images/wesleySnopes/legit.png',
        '/images/wesleySnopes/nuh_uh.png',
        '/images/wesleySnopes/physical_realm.png',
        '/images/wesleySnopes/pish.png',
        '/images/wesleySnopes/thirst_for_truth.png',
        '/images/wesleySnopes/truth_beauty.png',
        '/images/wesleySnopes/back_bullshit.png',
        '/images/wesleySnopes/fuck_off.png',
        '/images/wesleySnopes/no.png',
        '/images/wesleySnopes/way_u_think.png',
        '/images/wesleySnopes/squint.png',
        '/images/wesleySnopes/question_makes_me_sad.png',
        '/images/wesleySnopes/nonsense.png',
        '/images/wesleySnopes/shame.png',
        '/images/wesleySnopes/true.png',
        '/images/wesleySnopes/small_no.png',
        '/images/wesleySnopes/gosh.png',
        '/images/wesleySnopes/cow_bumhole.png'
    ];

    const [image, setImage] = useState("")
    const [userQuery, setUserQuery] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    function get_random_response() {
        const randomIndex = Math.floor(Math.random()* imgsrcs.length);
        const selectedImage = imgsrcs[randomIndex]
        setImage(selectedImage)
        setButtonClicked(true);
    }

    function handleInputChange(event) {
        setUserQuery(event.target.value);
    }

      function handleClear() {
        setUserQuery('');
        setImage('');
        setButtonClicked(false);
      }

      useEffect(()=>{
        if (buttonClicked) {
            get_random_response()
        }
    }, [get_random_response])

    return ( 
        <main className='main-wesley'>
            <form>
                <label htmlFor="user-query"><h2 className='i-heard'>Hey Wesley, I heard...</h2></label>
                <div className='interface-layout'>
                <textarea type="text" data-testid="text-input" className='user-query' id="user-query" name="user-query" maxLength="1000" onChange={handleInputChange}></textarea>
                <button onClick={handleClear} className="clear-button" data-testid="clear-text-button" title="Clears All Text and Images">Clear</button>
                </div>
            </form>
            <br  />
                <button onClick={get_random_response} data-testid="get-truth" className="truth" title="Click here to find out THE TRUTH">IS THAT TRUE?</button>
                <br />
                <br />
                <section className='wesley-image-section'>
                {image && <img className="wesley-image" src={image} alt="Wesley's Response" />}
                </section>
                
            
        </main>
     );
}
 
export default WesleyContainer;