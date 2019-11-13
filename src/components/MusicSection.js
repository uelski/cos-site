import React, {
  Component
} from 'react';

class MusicSection extends Component {
  render() {
    const frameStyle = {
      border: '0',
      width: '300px',
      height: '470px'
    }
    return(
      <section className="music-section max-width-container section-padding">
        <h2>Past Releases</h2>
        <div className="music-section__embed-container">
          <iframe style={frameStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3389629478/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://masoncos.bandcamp.com/album/throttle-redux">Throttle Redux by Mason Cos</a></iframe>
        </div>
      </section>
    )
  }
}

export default MusicSection;