"use client";
import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  gap: 50px;
  // padding-top: 2rem;
`;

const CardSection = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  position: absolute;
  right: 200px;
  height: 100vh;
  width: 45%;
  margin-bottom: 20px;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  left: -100px;
  bottom: 10px;
  height: 100vh;
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

const Card = styled.div`
  width: 19rem;
  height: 150px;
  background-color: blue;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &:hover {
    background-color: #0080f9;
    cursor: pointer;
    transform: scale(1.1)
  }
`;

const StyledH5 = styled.h5`
  display: inline-block;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #ffffff;
  line-height: 1;
  align-items: start;

  & span {
    display: inline-block;
    font-weight: bold;
    line-height: 1;
    margin-top: 5px;
    padding: 0;
  }
`;

const CardTop = styled.div`
  align-self: flex-start;
`;

const CardBottom = styled.div`
  align-self: flex-start;
  text-align: left;
`;

const TextSection = styled.div`
  display: grid;
  margin-top: 80rem;
  width: 50%;
  padding: 20px;
  color: black;
  gap: 20px;
  // position: relative;
`;
const Text = styled.p`
  text-decoration: underline dotted;
  text-underline-offset: 4px;
  line-height: 1.5;
  color: #800080;
`;

const TextOne = styled.h3`
  font-weight: bold;
  gap: 5px;
  line-height: 5;
  color: #800080;
`;

const ContentImg = styled.img`
  width: 100px;
`;

const TextTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Section>
        <TextSection>
          <TextOne style={{ fontSize: "25px", fontWeight: "bold" }}>
            УСЛУГИ
          </TextOne>
          <TextTwo>
            <Text>
              Тарифы на услуги по обеспечению <br /> контроля даступа на
              территорию <br /> VIZMA на 2022 год
            </Text>
            <ContentImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZDS7ALl99-0Iu4JEIQGNZVZcL3njIKgdUQ&s" />
          </TextTwo>
          <TextTwo>
            <Text>
              Условия опроделения цены <br /> договора и тарифы на работы
            </Text>
            <ContentImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZDS7ALl99-0Iu4JEIQGNZVZcL3njIKgdUQ&s" />
          </TextTwo>
          <TextTwo>
            <Text>
              Договор перевалки <br /> (типовая форма)
            </Text>
            <ContentImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZDS7ALl99-0Iu4JEIQGNZVZcL3njIKgdUQ&s" />
          </TextTwo>
        </TextSection>
      </Section>

      <CardSection>
        <Row>
          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>
                <span>Хранение грузов </span>
              </StyledH5>
            </CardBottom>
          </Card>

          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>
                <span> Швартовые операции</span> <br />
              </StyledH5>
            </CardBottom>
          </Card>
        </Row>

        <Row>
          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>Складиские операции</StyledH5>
            </CardBottom>
          </Card>

          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>Агентское обслуживания судов</StyledH5>
            </CardBottom>
          </Card>
        </Row>
        <Row>
          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>Буксировка /сопровождениесудов</StyledH5>
            </CardBottom>
          </Card>

          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>Погрузочно-загрузочная деятельность</StyledH5>
            </CardBottom>
          </Card>
        </Row>
      </CardSection>
    </AppWrapper>
  );
};

export default App;
