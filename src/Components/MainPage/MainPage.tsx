import { Tabs } from "antd";
import { Header } from "../Header/Header";
import { ApplicationForm } from "./ApplicationForm";
import { ApplicationTable } from "./ApplicationTable";
import "./MainPage.css";

export const MainPage = () => {
  const items = [
    {
      key: "1",
      label: "Форма для заявки",
      children: <ApplicationForm />,
    },
    {
      key: "2",
      label: "Сводная таблица",
      children: <ApplicationTable />,
    },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <Tabs defaultActiveKey="1" items={items} />
      </main>
    </>
  );
};
