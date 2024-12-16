"use client";
import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  padding-top: 80px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around; /* Navbar elementlarini teng bo'lib joylashtirish */
  align-items: center; /* Yassi joylashtirish */
  width: 100%;
  height: 60px;
  background-color: pink;
  padding-right: 20rem;
`;

const NavbarUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavbarLi = styled.li`
  margin: 0 15px; /* Ro'yxat elementlari orasidagi bo'shliq */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: white; /* Hover holatida rangni o'zgartirish */
  }
`;

const ContactWrapper = () => {
  return (
    <AppWrapper>
      <Navbar>
        <NavbarUl>
          <NavbarLi>ГЛАВНАЯ</NavbarLi>
          <NavbarLi>КЛИЕНТАМ</NavbarLi>
          <NavbarLi>
            ЗАЯВКА И ПЕРЕЧЕНЬ ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ ДОГОВОРОМ
          </NavbarLi>
        </NavbarUl>
      </Navbar>
    </AppWrapper>
  );
};

export default ContactWrapper;
