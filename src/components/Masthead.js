import React, {
  Component
} from 'react';
import mastheadVideo from '../assets/Codus_EP_Teaser_website-trim.mp4';
import mastheadMobileImage from '../assets/Codus_Art_Final.png';

class Masthead extends Component {
  render() {
    return(
      <section className="masthead-section homepage-masthead">
        <video className="masthead-section__video" src={mastheadVideo} loop autoPlay muted></video>
        <img className="masthead-section__mobile-image" src={mastheadMobileImage} alt="mason cos mobile masthead"/>
        <div className="masthead-section__text-content">
          <h1>Mason Cos</h1>
        </div>
      </section>
    )
  }
}

export default Masthead;