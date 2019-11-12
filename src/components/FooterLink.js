import React, { Component } from 'react';

class FooterLink extends Component {
    render() {

      if (this.props.text != "") {
        return (
            <a className="footer-link" target="_blank" href={this.props.link}>
                <img src={this.props.src} alt={this.props.alt}/>
                {this.props.text}
            </a>
        )
      } else {
        return (
            <a className="footer-link" target="_blank" href={this.props.link}>
                <img src={this.props.src} alt={this.props.alt}/>
            </a>
        )
      } 
    }
}

export default FooterLink;