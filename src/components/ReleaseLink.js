import React, {
  Component
} from 'react';

class ReleaseLink extends Component {
  render() {
    return(
      <a target="_blank" href={this.props.link} className="release-link">
        <img src={this.props.src} alt={this.props.alt} />
      </a>
    )
  }
}

export default ReleaseLink;