import { Fragment, h } from "preact";
import Container from "./container";
import Header from "./header";
import { BusinessCard } from "./svg/BusinessCard";
import { Csv } from "./svg/Csv";
import { Linkedin } from "./svg/Linkedin";
import { Portfolio } from "./svg/Portfolio";
import { ShareTileButton } from "./svg/ShareTileButton";

const App = () => (
  <Fragment>
    <Header />
    <Container />
    <h1>@scottmilliorn</h1>

    <a
      className="tile"
      href="https://milliorn.github.io/digital-resume/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <Csv />
      </div>
      <p>Resume | CSV</p>
      <div
        className="tile-share-button"
        id="https://milliorn.github.io/digital-resume/"
      >
        <ShareTileButton />
      </div>
    </a>

    <a
      className="tile"
      href="https://milliorn.github.io/Portfolio/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <Portfolio />
      </div>
      <p>Portfolio</p>
      <div
        className="tile-share-button"
        id="https://milliorn.github.io/Portfolio/"
      >
        <ShareTileButton />
      </div>
    </a>

    <a
      className="tile"
      href="https://milliorn.github.io/Digital-Business-Card/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <BusinessCard />
      </div>
      <p>Business Card</p>
      <div
        className="tile-share-button"
        id="https://milliorn.github.io/Digital-Business-Card/"
      >
        <ShareTileButton />
      </div>
    </a>

    <a
      className="tile"
      href="https://www.linkedin.com/in/scott-milliorn/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <Linkedin />
      </div>
      <p>Linkedin</p>
      <div
        className="tile-share-button"
        id="https://www.linkedin.com/in/scott-milliorn/"
      >
        <ShareTileButton />
      </div>
    </a>

    <a
      className="tile"
      href="https://github.com/milliorn"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path
            d="M84,240a23.9,23.9,0,0,0,24-24V168"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M172,240a23.9,23.9,0,0,1-24-24V168"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
        </svg>
      </div>
      <p>Github</p>
      <div className="tile-share-button" id="https://github.com/milliorn">
        <ShareTileButton />
      </div>
    </a>

    <a
      className="tile"
      href="https://twitter.com/scottmilliorn"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path
            d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
        </svg>
      </div>
      <p>Twitter</p>
      <div className="tile-share-button" id="https://twitter.com/scottmilliorn">
        <ShareTileButton />
      </div>
    </a>
  </Fragment>
);

export default App;
