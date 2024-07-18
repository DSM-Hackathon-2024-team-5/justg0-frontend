import { Router } from "./router";
import "./styles/reset.css";
import { StyledProvider } from "./styles/styledProvider";
import "rsuite/Slider/styles/index.css";
import "rsuite/RangeSlider/styles/index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledProvider>
        <Router />
      </StyledProvider>
    </QueryClientProvider>
  );
}

export default App;
