"use client";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/page";
import Header from "../../components/header/navbar/page";

// App wrapper qismi
const AppWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

// Navbar qismi
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
  padding-right: 20rem;
`;

const NavbarLi = styled.li`
  margin: 0 15px; /* Ro'yxat elementlari orasidagi bo'shliq */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.1s ease;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 11px;

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
  margin-left: 17rem;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
`;

// text H1
const TextH1 = styled.h1`
  text-align: center;
  line-height: 3rem;
  font-style: normal;
  font-weight: 400;
  font-family: sans-serif;
  letter-spacing: 0.4px;
`;

// Title Ul
const TitleUl = styled.ul`
  letter-spacing: 0.4px;
  padding-bottom: 4rem;
  font-size: 20px;
`;

// Text Ol
const TextOl = styled.div`
padding: 0;
line-height: 2rem;

`;

// Title Li
const TitleLi = styled.li`
margin-left: 15px;
margin-top: 15px;

`;


const ContactWrapper = () => {
  return (
    <AppWrapper>
      <Header />
      <Navbar>
        <NavbarUl>
          <NavbarLi>ГЛАВНАЯ ➡</NavbarLi>
          <NavbarLi>КЛИЕНТАМ ➡</NavbarLi>
          <NavbarLi style={{ width: "30rem" }}>
            ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ ДОГОВОРОМ ➡
          </NavbarLi>
        </NavbarUl>
      </Navbar>
      <SectionInfo>
        <TextH1>
          ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ <br /> ДОГОВОРОМ
        </TextH1>
        <TitleUl>
          <TextOl style={{lineHeight: "2rem"}}>
            Для рассмотрения возможности заключени договора контрогент
            долженпредоставить следующие документы:
          </TextOl>
          <TitleLi>
            Заявку (оферту) на имя генерраьного директора VIZMA Technology,
            котороя подоется на фирменном бланке <br /> организация и должая
            содержать сведения о виде робот и услуг, на которие
            предлагаетзаключит договор, <br /> номенклатуре груза и обшеме на
            год разбивкойпо месяцам
          </TitleLi>
          <TextOl>
            Для резидентов РФ (документы должны быт заверины подписю
            руководителя и печатю организатции):
          </TextOl>
          <TitleLi>копии учредительных документов (устава, положения)</TitleLi>
          <TitleLi>
            копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты
            заключения договора)
          </TitleLi>
          <TitleLi>
            копию протокола или выписки из протокола о назначении
            исполнительного органа
          </TitleLi>
          <TitleLi>копию свидетельства о государственной регистрации</TitleLi>
          <TitleLi>
            копию приказа о назначении лица, действующего на основании положения
          </TitleLi>
          <TitleLi>копию доверенности представителя</TitleLi>
          <TitleLi>
            копию свидетельства о постановке на учет в качестве
            налогоплательщика
          </TitleLi>
          <TitleLi>
            заполненную карточку контрагента, заверенную подписью и печатью
            руководителя организации и главн и содержащую следующую информацию:
          </TitleLi>
          <TextOl>1. Юридический адрес контрагента</TextOl>
          <TextOl>2. Фактический адрес контрагента</TextOl>
          <TextOl>3. Банковские реквизиты контрагента</TextOl>
          <TextOl>
            4. Контактная информация номер факса, Адрес электронной почты и
            контактные пний с указанием номером телефонов
          </TextOl>
          <TextOl>
            Для резидентов РФ (документы должны быт заверины подписю
            руководителя и печатю организатции):
          </TextOl>
          <TitleLi>копии учредительных документов (устава, положения)</TitleLi>
          <TitleLi>
            копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты
            заключения договора)
          </TitleLi>
          <TitleLi>
            копию протокола или выписки из протокола о назначении
            исполнительного органа
          </TitleLi>
          <TitleLi>копию свидетельства о государственной регистрации</TitleLi>
          <TitleLi>
            копию приказа о назначении лица, действующего на основании положения
          </TitleLi>
          <TitleLi>копию доверенности представителя</TitleLi>
          <TitleLi>
            копию свидетельства о постановке на учет в качестве
            налогоплательщика
          </TitleLi>
          <TitleLi>
            заполненную карточку контрагента, заверенную подписью и печатью
            руководителя организации и главн и содержащую следующую информацию:
          </TitleLi>
          <TextOl>1. Юридический адрес контрагента</TextOl>
          <TextOl>2. Фактический адрес контрагента</TextOl>
          <TextOl>3. Банковские реквизиты контрагента</TextOl>
          <TextOl>
            4. Контактная информация номер факса, Адрес электронной почты и
            контактные пний с указанием номером телефонов
          </TextOl>
         
        </TitleUl>
      </SectionInfo>
      <Footer />
    </AppWrapper>
  );
};

export default ContactWrapper;

// • копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты заключения договора);

// • копии учредительных документов (устава, положения);

// • копию протокола или выписки из протокола о назначении исполнительного органа;

// • копию свидетельства о государственной регистрации;

// • копию приказа о назначении лица, действующего на основании положения;

// • копию доверенности представителя;

// • копию свидетельства о постановке на учет в качестве налогоплательщика;

// • заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и главн и содержащую следующую информацию:

// 1. Юридический адрес контрагента;

// 2. Фактический адрес контрагента;

// 3. Банковские реквизиты контрагента
// 1. Юридический адрес контрагента

// 2. Фактический адрес контрагента,

// 3. Банковские реквизиты контрагента
// 4. Контактная информация номер факса, Адрес электронной почты и контактные пний с указанием номером телефонов
