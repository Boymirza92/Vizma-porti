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
  background-color:rgb(200, 210, 221);
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

  &:hover {
    display: inline-block;
    color:#9b59b6  ; 
    transition: color 0.3s, border-color 1s, text-shadow 0.3s;
  }
`;

const ContactWrapper = () => {
  return (
    <AppWrapper>
      <Header />
      <Navbar>
        <NavbarUl>
          <NavbarLi>ГЛАВНАЯ ▶</NavbarLi>
          <NavbarLi>КЛИЕНТАМ ▶</NavbarLi>
          <NavbarLi>
            ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ ДОГОВОРОМ ▶
          </NavbarLi>
        </NavbarUl>
      </Navbar>
      <Footer />
    </AppWrapper>
  );
};

export default ContactWrapper;
