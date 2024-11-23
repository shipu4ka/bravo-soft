import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./Components/AuthPages/RegistrationPage";
import { MainPage } from "./Components/MainPage/MainPage";
import { StartPage } from "./Components/AuthPages/StartPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};
