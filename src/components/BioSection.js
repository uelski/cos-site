import React, {
  Component
} from 'react';
import moodyTrain from '../assets/moody-train.jpg';

class BioSection extends Component {
  render() {
    return(
      <section className="bio-section">
        <div className="bio-section__container section-padding flex-section center mobile-column max-width-container">
          <div className="bio-section__container--content-section">
            <p>
              Grapple driver clap of thunder tack rope's end Plate Fleet strike colors avast loaded to the gunwalls scurvy. Run a rig tender salmagundi red ensign scourge of the seven seas sheet cutlass galleon hang the jib heave to. Carouser bilge rat lugsail starboard chantey pressgang crimp smartly long boat Nelsons folly. <br></br><br></br>
              Hempen halter six pounders American Main lugsail cog jib strike colors tender belaying pin maroon. Brethren of the Coast main sheet fore Cat o'nine tails Arr six pounders galleon case shot heave to holystone. Nipperkin squiffy Barbary Coast six pounders tack loot spyglass chase guns crack Jennys tea cup plunder.
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