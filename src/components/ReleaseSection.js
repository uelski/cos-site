import React, {
  Component
} from 'react';
import ReleaseLink from './ReleaseLink';
import mastheadMobileImage from '../assets/Codus_Art_Final.png';
import bandcampLogo from '../assets/bandcamp-logotype-dark-128.png';
import spotifyLogo from '../assets/Spotify_Logo_RGB_Black.png';
import appleLogo from '../assets/US-UK_Apple_Music_lockup_all-blk.svg';

class ReleaseSection extends Component {
  render() {
    const locations = [
      {
        src: bandcampLogo,
        link: 'https://masoncos.bandcamp.com/',
        alt: 'Bandcamp Logo'
      },
      {
        src: spotifyLogo,
        link: 'https://open.spotify.com/artist/3wwoB28lE8cNmZwvu3FmDQ',
        alt: 'Spotify Logo'
      },
      {
        src: appleLogo,
        link: 'https://geo.music.apple.com/us/artist/mason-cos/1439087400?mt=1&app=music',
        alt: 'Apple Music Logo'
      }
    ]
    const links = locations.map((location) => {
      return (
        <li key={location.src}>
          <ReleaseLink link={location.link} src={location.src} alt={location.alt} />
        </li>
      )
    })
    return(
      <section ref={this.props.refPass} className="release-section">
        <div className="release-section__container max-width-container section-padding">
          <img className="release-section__container-image hide-mobile" src={mastheadMobileImage} alt="Mason Cos new album art"/>

          <div className="release-section__container-content">
            <h2>New Album <span>Codus EP</span> Out Now:</h2>
            <div className="release-section__streaming">
              <ul>
                {links}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ReleaseSection;