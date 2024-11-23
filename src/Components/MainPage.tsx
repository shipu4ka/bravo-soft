import { Tabs } from "antd";
import { ApplicationForm } from "./ApplicationForm";
import { ApplicationTable } from "./ApplicationTable";
import { Header } from "./Header/Header";

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
      <main>
        <Tabs defaultActiveKey="1" items={items} />
      </main>
    </>
  );
};
