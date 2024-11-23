import { Button, Form, Input, message } from "antd";
import { api } from "../api";
import { FC, useContext } from "react";
import { IConstructor } from "../models";
import { GlobalContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";

export const RegistrationForm: FC = () => {
  const { constructors, setConstructors, setCurrentUser } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmit = async ({
    name,
  }: Pick<IConstructor, "name">): Promise<void | undefined> => {
    if (constructors.map((constructor) => constructor.name).includes(name)) {
      message.error(
        "Вы уже зарегистрированы в системе! Воспользуйтесь кнопкой 'Войти'"
      );
      return;
    }

    const newConstructor: IConstructor = {
      id: constructors.length + 1,
      name,
    };

    try {
      const { data } = await api.createConstructor(newConstructor);
      setConstructors([...constructors, data]);
      setCurrentUser(name);
      await message.success("Вы успешно зарегистрированы");
      navigate("/main");
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
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="ФИО"
        name="name"
        rules={[{ required: true, message: "*Обязательное поле!" }]}
      >
        <Input placeholder="Введите Фамилию И.О." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>

      <Form.Item>
        <Button onClick={() => navigate("/")}>Выполнить вход</Button>
      </Form.Item>
    </Form>
  );
};
