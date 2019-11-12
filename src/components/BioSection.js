import React, {
  Component
} from 'react';
import moodyTrain from '../assets/moody-train.jpg';

class BioSection extends Component {
  render() {
    return(
      <section ref={this.props.refPass} className="bio-section">
        <div className="bio-section__container section-padding flex-section center mobile-column max-width-container">
          <div className="bio-section__container--content-section">
            <p>
              Mason Cos is an electronic duo based in Denver, Colorado. Originally formed as a Krautrock-leaning live band in Chicago around 2016, Mason Cos then discovered the joys of experimenting with analog synthesizers. Their current sound includes elements of both, as well as influences ranging from techno to ambient, culminating in an output that is experimental while maintaining a solid groove.
            </p>
          </div>
          <div className="bio-section__container--image-section">
            <img src={moodyTrain} alt="Mason Cos looking serious"/>
          </div>
        </div>
      </section>
    )
  }
}

export default BioSection;