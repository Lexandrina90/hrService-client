import React, { useState } from "react";
import { Form, Input, Button, Header, Image, Message, Segment } from "semantic-ui-react";
import keyImage from "../../img/Login/key.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState)
  }


  const submitHandler = async (event) => {
    event.preventDefault();

    const requestBody = {
      email: email,
      password: password,
    }
    if (!isLogin) {
      requestBody.name = name;
    }
    let url;
    if (isLogin) {
      url = "http://localhost:3000/api/auth/login";
    } else {
      url = "http://localhost:3000/api/auth/signup";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ui centered grid" style={{ marginTop: "100px" }}>
      <div className="eight wide column" style={{ maxWidth: "450px" }}>
        <Form onSubmit={submitHandler} className="ui form">
          <Header as="h2" color="teal">
            <Image src={keyImage} />
            {isLogin ? "Авторизация" : "Регистрация"}
          </Header>
          <Form size='large'>
        <Segment stacked>
          <Form.Input
            fluid icon='mail'
            iconPosition='left'
            placeholder='E-mail address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            fluid icon='lock'
            iconPosition='left'
            placeholder='Пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                type="text"
                placeholder="ФИО"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          )}
          <Button type="submit" color="teal" fluid size='large'>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
        </Segment>
      </Form>
      <Message>
      {isLogin ? (
              <>
                Впервые здесь?{" "}
                <a href="#" onClick={switchHandler}>
                  Зарегистрироваться
                </a>
              </>
            ) : (
              <>
                Уже зарегистрированы?{" "}
                <a href="#" onClick={switchHandler}>
                  Войти
                </a>
              </>
            )}
      </Message>
        </Form>
      </div>
    </div>
  );
};

export default Login;







