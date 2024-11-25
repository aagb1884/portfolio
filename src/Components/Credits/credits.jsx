import HomeFooter from '../HomeFooter';
import './credits.css'

const Credits = ({goToContactForm, goToTab, contact, tabs}) => {
    return ( 
        <section className="credits-container">
            <h3>Credits</h3>

            <ul className='credits-ul'>
                <h4>Icons</h4>
                <li>
                <a target="_blank" href="https://icons8.com/icon/xUOnLwv6j89J/beard">Beard <img id='external-link' title='external link' src='/images/external-link.png' /></a> icon by <a target="_blank" href="https://icons8.com">Icons8 <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="https://icons8.com/icon/pwQ5RLL0yJgu/email">Email <img id='external-link' title='external link' src='/images/external-link.png' /></a> icon by <a target="_blank" href="https://icons8.com">Icons8 <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="https://icons8.com/icon/63777/github">GitHub <img id='external-link' title='external link' src='/images/external-link.png' /></a> icon by <a target="_blank" href="https://icons8.com">Icons8 <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="https://icons8.com/icon/xuvGCOXi8Wyg/linkedin">LinkedIn <img id='external-link' title='external link' src='/images/external-link.png' /></a> icon by <a target="_blank" href="https://icons8.com">Icons8 <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="https://icons8.com/icon/18734/copy-to-clipboard">Copy to Clipboar <img id='external-link' title='external link' src='/images/external-link.png' /></a> icon by <a target="_blank" href="https://icons8.com">Icons8 <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a href="https://www.flaticon.com/free-icons/external-link" title="external link icons">External link icons created by Yudhi Restu - Flaticon <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
            </ul>
            <ul className='images-ul'>
            <h4>Images</h4>
                <li>
                <a target="_blank" href="https://www.publicdomainpictures.net/en/view-image.php?image=475095&picture=starry-stars-sky-night">Starry Stars Sky Night <img id='external-link' title='external link' src='/images/external-link.png' /></a> image by <a target="_blank" href="https://www.publicdomainpictures.net/en/browse-author.php?a=149229">Andrea Stöckel <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
            </ul>
            <ul className='css-ul'>
            <h4>CSS</h4>
                <li>
                <a target="_blank" href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">Bouncing Text Animation <img id='external-link' title='external link' src='/images/external-link.png' /></a> by <a target="_blank" href="https://lenadesign.org/">Lena Design <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="https://codepen.io/TajShireen/pen/LYyOzJL">Metallic Bordered Text <img id='external-link' title='external link' src='/images/external-link.png' /></a> by <a target="_blank" href="https://codepen.io/TajShireen">Shireen Taj <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
                <li>
                <a target="_blank" href="hhttps://codepen.io/alvarotrigo/pen/PoKMyNO">text-color-animation <img id='external-link' title='external link' src='/images/external-link.png' /></a> by <a target="_blank" href="https://codepen.io/alvarotrigo">Alvaro <img id='external-link' title='external link' src='/images/external-link.png' /></a>
                </li>
            </ul>
            <HomeFooter
            goToContactForm={goToContactForm}
            goToTab={goToTab}
            contact={contact}
            tabs={tabs}
            />
        </section>
     );
}
 
export default Credits;