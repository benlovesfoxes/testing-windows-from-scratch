import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  background-color: #0078d7;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  padding: 16px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0078d7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ResetPasswordLink = styled.a`
  color: #0078d7;
  text-decoration: none;
  margin-top: 16px;
  cursor: pointer;
`;

const App = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleResetPassword = () => {
    // Handle reset password logic here
  };

  return (
    <Container>
      <Window>
        <TitleBar>
          <Title>Windows 11 Login</Title>
          <span>⊞</span>
        </TitleBar>
        <Content>
          <LoginForm onSubmit={handleLogin}>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
            <ResetPasswordLink onClick={handleResetPassword}>
              Reset Password
            </ResetPasswordLink>
          </LoginForm>
        </Content>
      </Window>
    </Container>
  );
};

export default App;
