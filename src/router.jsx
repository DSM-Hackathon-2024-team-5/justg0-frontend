import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Trip from "./pages/trip";
import Start from "./pages/start";
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
        <Route path="/tripDetail" element={<TripDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
