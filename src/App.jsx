import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./App.css";
import Landing from "./Pages/Landing";

function App() {
  return (
    <ReactLenis root>
      <Landing />
    </ReactLenis>
  );
}

export default App;
