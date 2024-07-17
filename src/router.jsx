import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Trip from "./pages/trip";
import Start from "./pages/start";
import DestinationDetail1 from "./pages/destination/destinationDetail1";
import DestinationDetail2 from "./pages/destination/destinationDetail2";
import DestinationDetail3 from "./pages/destination/destinationDetail3";
import TripDetail from "./pages/tripDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/start" element={<Start />} />
        <Route path="/destination/1" element={<DestinationDetail1 />} />
        <Route path="/destination/2" element={<DestinationDetail2 />} />
        <Route path="/destination/3" element={<DestinationDetail3 />} />
        <Route path="/tripDetail" element={<TripDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
