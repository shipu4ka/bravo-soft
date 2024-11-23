import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../ContextProvider";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const handleBtnExit = () => {
    setCurrentUser("");
    navigate("/");
  };

  return (
    <header className="header">
      <p>Пользователь: {currentUser}</p>
      <Button onClick={() => handleBtnExit()}>Выйти</Button>
    </header>
  );
};
