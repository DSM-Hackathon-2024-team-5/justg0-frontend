import { Router } from "./router";
import "./styles/reset.css";
import { StyledProvider } from "./styles/styledProvider";
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
