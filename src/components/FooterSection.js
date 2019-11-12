import React, {
  Component
} from 'react';
import FooterLink from './FooterLink';
import stickerImage from '../assets/MC_sticker2r_V2.png';
import emailLogo from '../assets/email-icon.png';
import bandcampLogo from '../assets/bandcamp-logo.png';
import soundcloudLogo from '../assets/soundcloud-logo.png';
import appleLogo from '../assets/Apple_Music_Icon_wht.svg';
import spotifyLogo from '../assets/spotify-icon.png';
import facebookLogo from '../assets/facebook-icon.png';
import instaLogo from '../assets/insta-logo.png';


class FooterSection extends Component {

  render() {
    const rawLinks = [
      {
        src: facebookLogo,
        link: 'https://www.facebook.com/MasonCosMusic/',
        alt: 'facebook logo',
        text: "Facebook"
      },
      {
        src: instaLogo,
        link: 'https://www.instagram.com/mason_cos_band/',
        alt: 'instagram logo',
        text: "Instagram"
      },
      {
        src: spotifyLogo,
        link: 'https://open.spotify.com/artist/3wwoB28lE8cNmZwvu3FmDQ',
        alt: 'spotify logo',
        text: "Spotify"
      },
      {
        src: appleLogo,
        link: 'https://geo.music.apple.com/us/artist/mason-cos/1439087400?mt=1&app=music',
        alt: 'apple music logo',
        text: "Apple Music"
      },
      {
        src: bandcampLogo,
        link: 'https://masoncos.bandcamp.com/',
        alt: 'bandcamp logo',
        text: "Bandcamp"
      },
      {
        src: soundcloudLogo,
        link: 'https://soundcloud.com/mason-cos',
        alt: 'soundcloud logo',
        text: "Soundcloud"
      },
      {
        src: emailLogo,
        link: "mailto:masoncosband@gmail.com",
        alt: 'email logo',
        text: "masoncosband@gmail.com"
      },
    ]

    const useLinks = rawLinks.map((link) => {
      return(
        <li key={link.link}>
          <FooterLink src={link.src} link={link.link} alt={link.alt} text={link.text} />
        </li>
      )
    })

    return(
      <section className="footer-section">
        <div className="footer-section__container max-width-container section-padding">
          <div className="footer-section__column image-column">
            <img src={stickerImage} alt="Mason Cos sticker image"/>
          </div>
          <div className="footer-section__column link-column">
            <ul>
              {useLinks}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default FooterSection;