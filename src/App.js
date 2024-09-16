import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import mermaidGif from './assets/images/mermaidanime.gif'; // Add your GIF here
import RSVPForm from './RSVPForm';

function App() {
  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
        
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="floor"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="l4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="l7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="l8"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="l9"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="l6"></div>
        </ParallaxLayer>

        {/* Mermaid GIF Layer */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5}}
          className="mermaid-layer"
        >
          <img src={mermaidGif} alt="Mermaid" className="mermaid-gif" />
        </ParallaxLayer>
        {/* "Splish and Splash" text at offset 0 */}
        <ParallaxLayer offset={0} speed={0.25} className="text-layer">
          <div className="splish-splash-container">
            <h3 className="splish-splash-text">
              Splish and splash, let’s celebrate Nithila's fun one and Nila’s lively five!
            </h3>
          </div>
        </ParallaxLayer>

        {/* Invitation Text and Event Details Layer */}
        <ParallaxLayer offset={1} speed={0.25} className="text-layer">
          <div className="invitation-container">
            <h2 className="invitation-text">Welcome to Nithila and Nila's birthday!</h2>
            <p>Dive into the magic of the deep blue and join us for an enchanting Underworld Mermaid Party</p>

            <h2>When the mermaids will surface:</h2>
            <p>October 13, 2024</p>
            <h2>The tides start rolling at:</h2>
            <p>Starts from: 1 PM</p>
            <h2>Where the underwater adventure begins:</h2>
            <p>Poonkani Party Hall</p>
            <p>No 70, 70/1 Balavinyagar Kovil Street, Thoothukudi</p>
          </div>
        </ParallaxLayer>

        {/* RSVP Component */}
        <ParallaxLayer offset={2} speed={0.25} className="rsvp-page">
          <RSVPForm /> {/* Rendering the RSVPForm inside the parallax */}
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
