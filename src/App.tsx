import { useEffect, useState } from "react";
import "./App.css";
import { IApplication, IConstructor } from "./models";
import { api } from "./api";
import { GlobalContext } from "./ContextProvider";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [constructors, setConstructors] = useState<IConstructor[]>([]);
  const [applications, setApplications] = useState<IApplication[]>([]);

  useEffect(() => {
    api.getConstructors().then((response) => setConstructors(response.data));
    api.getApplications().then((response) => setApplications(response.data));
  }, []);

  return (
    <GlobalContext.Provider
      value={{ constructors, setConstructors, applications, setApplications }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default App;
