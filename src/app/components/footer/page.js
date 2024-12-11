"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = styled.div`
  background-color: #fff;
`;

const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-wrap: wrap;
  letter-spacing: 1px;
  line-height: 2;
  padding: 0;
  width: 100%;
  height: 200px;
  background-color: #253342;
  color: #fff;
`;
const TopSection = styled.div`
  margin: 0;
`;

const TopSectionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  height: 100px;
  color: azure;
  background-color: rgb(65, 32, 92);
`;

const Image = styled.img`
width: 120px;
`;
const FooterSection = styled.div`
  flex: 1;
  line-height: 4;
  max-width: 300px;
`;
const FooterTitle = styled.h6`
font-size:13px;
font-weight: bold
margin-bottom: 10px;
color: #fff;
`;
const FooterItem = styled.p`
  font-size: 13px;
  line-height: 1.5;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #253342;
  color: aqua;
  font-size: 12px;
  letter-spacing: 1.3px;
  line-height: 1;
  padding-bottom: 15px;
`;

const App = () => {
  return (
    <Footer>
      <TopSection>
        <TopSectionFooter>
          <FontAwesomeIcon icon={faLocationDot} style={{marginRight: "-60px"}} />
          <h4>123456, Тавима, ул. Морская, д.21</h4>
          <Image src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png" />
          {/* <img
            style={{ width: "200px", padding: "100px" }}
            src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png"
          /> */}
          <FontAwesomeIcon icon={faPhoneVolume} style={{marginRight: "-60px"}} />
          <h4>+7 (123) 456-67-89</h4>
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "-60px"}} />
          <h4 style={{marginRight: "10px"}}>
            Order@vizma.ru
          </h4>
        </TopSectionFooter>
      </TopSection>
      <TopFooterWrapper>
        <FooterSection>
          <FooterTitle>ИНФОРМАЦИЯ Щ ЮРЮЛИЦЕ</FooterTitle>
          <FooterItem> ОГРН 111111111111111</FooterItem>
          <FooterItem> ИНН 222222222222222</FooterItem>
          <FooterItem> КПП 333333333333333</FooterItem>
          <FooterItem> ОКПО 4444444444 ОКВЭД 52.24</FooterItem>
          <FooterItem> ОКТМО 555555555555555</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ЗАКУПКИ</FooterTitle>
          <FooterItem>Нормативные документы</FooterItem>
          <FooterItem>Закупки на VISMA Order</FooterItem>
          <FooterItem>Закупки на VISMA Tender</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ОКЦИЯНЕРОМ</FooterTitle>
          <FooterItem>Устав EVISMA</FooterItem>
          <FooterItem>Список аффилированных лиц</FooterItem>
          <FooterItem>Информация</FooterItem>
          <FooterItem>Атветы</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>О КОМПАНИЯ</FooterTitle>
          <FooterItem>Пост сегодня</FooterItem>
          <FooterItem>Характеристики поста</FooterItem>
          <FooterItem>История</FooterItem>
          <FooterItem>Дипломы и награды</FooterItem>
          <FooterItem>Экалогия</FooterItem>
          <FooterItem>Правовая информация</FooterItem>
        </FooterSection>
      </TopFooterWrapper>
      <FooterTextWrapper>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VIZMA</FooterTextWrapper>
    </Footer>
  );
};

export default App;
