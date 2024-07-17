import { Router } from "./router";
import "./styles/reset.css";
import { StyledProvider } from "./styles/styledProvider";

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;