import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
