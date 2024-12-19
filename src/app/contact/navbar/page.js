"use client";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/page";
import Header from "../../components/header/navbar/page";
const AppWrapper = styled.div`
  margin: 0;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around; /* Navbar elementlarini teng bo'lib joylashtirish */
  align-items: center; /* Yassi joylashtirish */
  width: 100%;
  height: 60px;
  background-color: rgb(200, 210, 221);
  margin-top: 100px;
  padding-right: 10rem;
  margin-top: 5rem;
`;

const NavbarUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-right: 15rem;
`;

const NavbarLi = styled.li`
  margin: 0 15px; /* Ro'yxat elementlari orasidagi bo'shliq */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 1px;

  &:hover {
    display: inline-block;
    color: #9b59b6;
    transition: color 0.3s, border-color 1s, text-shadow 0.3s;
  }
`;
// Section Info
const SectionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-left: 17rem
`;

// text H1
const TextH1 = styled.h1`
  text-align: center;
  line-height: 3rem;
  font-style: normal;
  font-weight: 400;
  font-family: sans-serif;
  letter-spacing: 0.1px;
`;

// Title Ul
const TitleUl = styled.ul``;

// Text Ol
const TextOl = styled.div``;

// Title Li
const TitleLi = styled.li``;

const ContactWrapper = () => {
  return (
    <AppWrapper>
      <Header />
      <Navbar>
        <NavbarUl>
          <NavbarLi>ГЛАВНАЯ ➡</NavbarLi>
          <NavbarLi>КЛИЕНТАМ ➡</NavbarLi>
          <NavbarLi style={{ width: "40rem" }}>
            ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ ДОГОВОРОМ ➡
          </NavbarLi>
        </NavbarUl>
      </Navbar>
      <SectionInfo>
        <TextH1>
          ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ <br /> ДОГОВОРОМ
        </TextH1>
        <TitleUl>
          <TextOl>
            Для рассмотрения возможности заключени договора контрогент
            долженпредоставить следующие документы:
          </TextOl>
          <TitleLi>
            заявку (оферту) на имя генерраьного директора VIZMA Technology,
            котороя подоется на фирменном бланке <br /> организация и должая
            содержать сведения о виде робот и услуг, на которие
            предлагаетзаключит договор, <br /> номенклатуре груза и обшеме на
            год разбивкойпо месяцамю
          </TitleLi>
        </TitleUl>
      </SectionInfo>
      <Footer />
    </AppWrapper>
  );
};

export default ContactWrapper;
