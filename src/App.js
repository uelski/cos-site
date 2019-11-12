import React, { Component } from 'react';
import Masthead from './components/Masthead';
import ReleaseSection from './components/ReleaseSection';
import BioSection from './components/BioSection';
import MusicSection from './components/MusicSection';
import FooterSection from './components/FooterSection';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)
    this.bioRef = React.createRef();
    this.releaseRef = React.createRef();
  }

  render() {
    return (
      <div className="App" >
        <Masthead bioRef={this.bioRef} releaseRef={this.releaseRef}/>
        <ReleaseSection refPass={this.releaseRef}/>
        <BioSection refPass={this.bioRef} />
        <MusicSection />
        <FooterSection />

      </div>
    );
  }
}
  
export default App;