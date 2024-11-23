import { Button, Form, Input, message, Select } from "antd";
import { FC, useContext } from "react";
import { IApplication } from "../../models";
import { api } from "../../api";
import { GlobalContext } from "../../ContextProvider";
import "./MainPage.css";

export const ApplicationForm: FC = () => {
  const { constructors, applications, setApplications } =
    useContext(GlobalContext);

  const handleSubmit = async ({
    constructorId,
    documentName,
  }: IApplication): Promise<void | undefined> => {
    const existingApplication = applications.find(
      (application) =>
        application.constructorId === constructorId &&
        application.documentName === documentName
    );

    if (existingApplication) {
      message.error(
        "Вы уже отправляли заявку на этот документ, она уже была учтена"
      );
      return;
    }

    const newApplication: IApplication = {
      constructorId,
      documentName,
      id: applications.length + 1,
    };

    try {
      const { data } = await api.createApplication(newApplication);
      message.success("Заявка успешно отправлена");
      setApplications([...applications, data]);
    } catch (error) {
      let errorMessage = "";
      if (typeof error === "string") {
        errorMessage = error;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      message.error(`Что-то пошло не так. ${errorMessage}`);
    }
  };

  return (
    <Form
      className="application-form"
      onFinish={handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        name="constructorId"
        label="ФИО конструктора"
        rules={[{ required: true, message: "*Обязательное поле!" }]}
      >
        <Select placeholder="Выберите ФИО конструктора" allowClear>
          {constructors.map((constructor) => (
            <Select.Option key={constructor.id} value={constructor.id}>
              {constructor.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="documentName"
        label="Наименование документа"
        rules={[{ required: true, message: "*Обязательное поле!" }]}
      >
        <Input placeholder="Введите наименование документа" />
      </Form.Item>

      <div className="btn-wrapper">
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </div>
    </Form>
  );
};
