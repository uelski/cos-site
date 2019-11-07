import React, {
  Component
} from 'react';
import mastheadMobileImage from '../assets/Codus_Art_Final.png';

class ReleaseSection extends Component {
  render() {
    return(
      <section className="release-section">
        <div className="release-section__container max-width-container section-padding">
          <img className="release-section__container-image hide-mobile" src={mastheadMobileImage} alt="Mason Cos new album art"/>

          <div className="release-section__container-content">
            <h2>New Album <span>Codus EP</span> out November 12.</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default ReleaseSection;