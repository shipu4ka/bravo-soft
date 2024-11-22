import { useEffect, useState } from "react";
import "./App.css";
import { ApplicationForm } from "./Components/ApplicationForm";
import { ApplicationTable } from "./Components/ApplicationTable";
import { IApplication, IConstructor } from "./models";
import { api } from "./api";
import { Tabs } from "antd";

const App = () => {
  const [constructors, setConstructors] = useState<IConstructor[]>([]);
  const [applications, setApplications] = useState<IApplication[]>([]);

  useEffect(() => {
    api.getConstructors().then((response) => setConstructors(response.data));
    api.getApplications().then((response) => setApplications(response.data));
  }, []);

  const items = [
    {
      key: "1",
      label: "Форма для заявки",
      children: (
        <ApplicationForm
          constructors={constructors}
          applications={applications}
          setApplications={setApplications}
        />
      ),
    },
    {
      key: "2",
      label: "Сводная таблица",
      children: (
        <ApplicationTable
          documents={applications.map((app) => app.documentName)}
        />
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default App;
