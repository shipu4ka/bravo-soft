import { Button, Form, Input, message } from "antd";
import { IConstructor } from "../models";
import { useContext } from "react";
import { GlobalContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {
  const { constructors, setCurrentUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async ({
    name,
  }: Pick<IConstructor, "name">): Promise<void | undefined> => {
    const existingConstructor = constructors.find(
      (constructor) => constructor.name === name
    );

    if (!existingConstructor) {
      message.error("Пользователь не найден. Зарегистрируйтесь.");
      return;
    }
    setCurrentUser(name);
    navigate("/main");
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
          Войти
        </Button>
      </Form.Item>

      <Form.Item>
        <Button onClick={() => navigate("/registration")}>Регистрация</Button>
      </Form.Item>
    </Form>
  );
};
