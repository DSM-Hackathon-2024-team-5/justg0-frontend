import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Trip from "./pages/trip";
import TripDetail from "./pages/tripDetails";
import Term from "./pages/term";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/tripDetail" element={<TripDetail />} />
        <Route path="/term" element={<Term />} />
      </Routes>
    </BrowserRouter>
  );
};
