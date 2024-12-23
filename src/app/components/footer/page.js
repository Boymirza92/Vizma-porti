"use client";
import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = styled.div`
  background-color: #253342;
  color: #fff;
  width: 100%;
  
`;

const TopSectionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly; /* Elementlarni teng taqsimlash */
  flex-wrap: wrap; /* Elementlar o'rab chiqadi */
  gap: 20px; /* Bo'limlar orasida bo'shliq */
  background-color: rgb(65, 32, 92);
  padding: 20px 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Kichik ekranlarda ustma-ust joylashadi */
    align-items: center;
    gap: 10px; /* Bo'shliqni kichraytirish */
    text-align: center; /* Matnlarni o'rtalash */
  }
`;

const StyledImage = styled.img`
width: 10rem;
display: none;
`;
const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap; /* Elementlar joylashishini o'zgartirish */
  gap: 20px;
  padding: 3rem 0 3rem;
  background-color: #34495e;

  @media (max-width: 768px) {
    flex-direction: column; /* Kichik ekranlar uchun vertikal joylashuv */
    align-items: center;
    gap: 15px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%; /* Har bir bo‘lim to‘liq kenglikda */
    text-align: center;
  }
`;

const FooterTitle = styled.h6`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterItem = styled.p`
  font-size: 13px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterTextWrapper = styled.div`
height: 100%;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1.3px;
  padding-bottom: 0.5rem;
  background-color: #34495e;
  color: aqua;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 10px 5px;
  }
`;

const App = () => {
  return (
    <Footer>
      <TopSectionFooter>
        <FontAwesomeIcon icon={faLocationDot} />
        <h4>123456, Тавима, ул. Морская, д.21</h4>
        <StyledImage
          src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png"
        ></StyledImage>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <h4>+7 (123) 456-67-89</h4>
        <FontAwesomeIcon icon={faEnvelope} />
        <h4>Order@vizma.ru</h4>
      </TopSectionFooter>
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
          <FooterTitle>О КОМПАНИЯ</FooterTitle>
          <FooterItem>Пост сегодня</FooterItem>
          <FooterItem>Характеристики поста</FooterItem>
          <FooterItem>История</FooterItem>
          <FooterItem>Дипломы и награды</FooterItem>
          <FooterItem>Экология</FooterItem>
          <FooterItem>Правовая информация</FooterItem>
        </FooterSection>
      </TopFooterWrapper>
      <FooterTextWrapper>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VIZMA</FooterTextWrapper>
    </Footer>
  );
};

export default App;
