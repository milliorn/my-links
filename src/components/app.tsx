import { Fragment, h } from "preact";
import Container from "./container";
import { Csv } from "./svg/Csv";
import Header from "./header";
import { ShareTileButton } from "./svg/ShareTileButton";
import { Portfolio } from "./svg/Portfolio";

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <line
            x1="152"
            y1="112"
            x2="192"
            y2="112"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <line
            x1="152"
            y1="144"
            x2="192"
            y2="144"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <circle
            cx="92.1"
            cy="120"
            r="24"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <path
            d="M61.1,168a32,32,0,0,1,62,0"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
          />
        </svg>
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
      href="https://www.idedin.com/in/scott-milliorn/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <svg
          style="color: white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            fill="white"
          />
        </svg>
      </div>
      <p>idedin</p>
      <div
        className="tile-share-button"
        id="https://www.idedin.com/in/scott-milliorn/"
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
