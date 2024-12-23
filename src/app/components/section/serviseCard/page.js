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
  flex-wrap: wrap; /* Elementlarni o'rnatishda qoplash uchun flex-wrap qo'shildi */

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 8rem;
    height: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: auto; /* 100vh o'rniga avto belgilandi */
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    width: 80%;

  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: auto; /* 100vh o'rniga avto belgilandi */
  width: 50%;

  @media (max-width: 768px) {
    width: 95%;
    height: 100%;
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Row ichidagi elementlarni o'ralashga imkon beradi */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
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
  margin-bottom: 15px;
  overflow: hidden; /* Matn tashqariga chiqmasligi uchun */
  text-overflow: ellipsis; /* Matnni qisqartirish */
  white-space: nowrap; /* Matnni bitta qatorda ushlab turish */
`;

const StyledH5 = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #ffffff;
  text-align: start; /* Matnni markazlash */
  overflow: hidden; /* Matn hajmini cheklash */
  text-overflow: ellipsis; /* Uzun matnlarni qisqartirish */
  white-space: nowrap; /* Bitta qatorda saqlash */

  & span {
    font-weight: bold;
    line-height: 1;
  }
`;
const CardTop = styled.div`
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const CardBottom = styled.div`
  align-self: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  color: rgba(255, 255, 255, 1);
  margin-top: -40px;
  letter-spacing: 1px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 50px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LinkText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 120px;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 16px;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <LeftSection>
        <Text>
          <Title>
            Тавимиский морской <br /> порт VIZMA
          </Title>
          <Paragraph>
            Vel posuere nibh odio placerat massa vel tellus <br />
            tortor. Varius eget nunc scelerisque etiam felis <br /> facilisi
            ante viverra sem. Nunc eros elementum.
          </Paragraph>
          <LinkText>О КОМПАНИИ ➡</LinkText>
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
                <span>Погрузочно-разгрузочная<br /> деятельность </span>
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
