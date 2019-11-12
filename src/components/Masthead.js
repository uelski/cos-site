import React, {
  Component
} from 'react';
import mastheadVideo from '../assets/Codus_EP_Teaser_website-trim.mp4';
import mastheadMobileImage from '../assets/Codus_Art_Final.png';

class Masthead extends Component {
  scroll(e, r) {
    e.preventDefault();
    r.current.scrollIntoView({behavior: 'smooth'});
  }
  render() {
    return(
      <section className="masthead-section homepage-masthead">
        <video className="masthead-section__video" src={mastheadVideo} loop autoPlay muted></video>
        <img className="masthead-section__mobile-image" src={mastheadMobileImage} alt="mason cos mobile masthead"/>
        <div className="masthead-section__text-content">
          <div>
            <h1>Mason Cos</h1>
            <h2>Codus EP - New Music</h2>
            <a href="#" onClick={(e) => {this.scroll(e, this.props.releaseRef)}}>Check it <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Masthead;