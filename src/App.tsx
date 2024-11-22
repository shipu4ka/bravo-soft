import { useEffect, useState } from "react";
import "./App.css";
import { ApplicationForm } from "./Components/ApplicationForm";
import { IApplication, IConstructor } from "./models";
import { api } from "./api";

const App = () => {
  const [constructors, setConstructors] = useState<IConstructor[]>([]);
  const [applications, setApplications] = useState<IApplication[]>([]);

  useEffect(() => {
    api.getConstructors().then((response) => setConstructors(response.data));
    api.getApplications().then((response) => setApplications(response.data));
  }, []);

  return (
    <ApplicationForm
      constructors={constructors}
      applications={applications}
      setApplications={setApplications}
    />
  );
};

export default App;
