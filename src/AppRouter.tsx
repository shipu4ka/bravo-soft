import { Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./Components/RegistrationForm";
import { MainPage } from "./Components/MainPage";
import { StartPage } from "./Components/StartPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};
