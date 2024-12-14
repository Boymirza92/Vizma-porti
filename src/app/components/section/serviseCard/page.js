"use client";
import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/87/Porto_Port_JPG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  right: 200px;
  height: 100vh;
  width: 50%;
  margin-bottom: 20px;
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  left: -100px;
  top: 50px;
  height: 100vh;
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  width: 230px;
  height: 170px;
  background-color: #5db7de;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: #0080f9;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledH5 = styled.h5`
  display-inline-block; 
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
const Text = styled.p`
  display: flex;
  flex-direction: column; /* Ustma-ust joylashish */
  gap: 5px; /* Har bir h1 orasidagi masofa */
  align-items: start;
  color: rgba(255, 255, 255, 1);
  margin-top: -40px;

  letter-spacing: 1px;
`;

const App = () => {
  return (
    <AppWrapper>
      <LeftSection>
        <Text>
          <p style={{ fontWeight: "bold", fontSize: "50px" }}>
            Тавимиский морской <br /> порт VIZMA
          </p>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
            Vel posuere nibh odio placerat massa vel tellus <br />
            tortor. Varius eget nunc scelerisque etiam felis <br /> facilisi
            ante viverra sem. Nunc eros elementum.
          </p>
          <br />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "120px",
            }}
          >
            О КОМПАНИИ ➡{" "}
          </p>
        </Text>
      </LeftSection>

      <RightSection>
        <Row>
          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>
                <span>Погрузочно-разгрузочная деятельность </span>
              </StyledH5>
            </CardBottom>
          </Card>

          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>
                <span>Хранение грузов</span> <br />
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
              <StyledH5>
                Складиские <br /> операции
              </StyledH5>
            </CardBottom>
          </Card>

          <Card>
            <CardTop>
              <StyledH5>Услуги</StyledH5>
            </CardTop>
            <CardBottom>
              <StyledH5>
                Швартовые <br /> операции
              </StyledH5>
            </CardBottom>
          </Card>
        </Row>
      </RightSection>
    </AppWrapper>
  );
};

export default App;
