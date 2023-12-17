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

const App = () => {
  return (
    <Container>
      <Window>
        <TitleBar>
          <Title>My Windows 10 Remake</Title>
          <span>⊞</span>
        </TitleBar>
        <Content>
          <p>Welcome to my Windows 10 remake!</p>
        </Content>
      </Window>
    </Container>
  );
};

export default App;
