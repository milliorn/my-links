import { h } from "preact";
import Container from "./container";

import Header from "./header";

const App = () => (
  <div id="app">
    <Header />
    <Container />
    <h1>@scottmilliorn</h1>
  </div>
);

export default App;
