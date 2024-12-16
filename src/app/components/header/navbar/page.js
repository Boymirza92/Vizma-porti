"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";



const HeaderWropper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  padding: 20px 3rem;
  width: 100%;
  height: 70px;
  background-color:#34495e ;
  box-shadow: 0 10px 10px rgba(24, 7, 7, 0.1);

  @media (max-width: 768px) {
    padding: 10px 1rem; /* Kichik ekranlarda padding kamaytiriladi */
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  color: red;

  @media (max-width: 768px) {
    flex-direction: column; /* Mobil ekranlarda menyu vertikal bo'ladi */
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: #fff;
    width: 200px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.$show ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #c39bd3;

  &:hover {
    color:rgb(92, 112, 135);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-left: 7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
    width: 90%; /* Kichik ekranlarda kenglikni moslashtirish */
  }
`;

const LanguageSelect = styled.select`
  padding: 0.5rem;
  margin-left: 4rem;
  font-size: 0.9rem; /* Font hajmini kichikroq qildik */
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: pink;
  box-shadow: 0 4px 8px rgba(28, 11, 11, 0.1);

  option {
    font-size: 0.9rem; /* Til opsiyalari ham kichikroq ko'rinadi */
  }
`;


const MenuToggle = styled.button`
  display: none; /* Katta ekranlarda tugma ko'rinmaydi */
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Kichik ekranlarda tugma ko'rinadi */
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderWropper>
      <img
        src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png"
        alt="Visma logo"
        style={{ height: "2rem", width: "auto", marginLeft: "10rem" }}
      />
      <MenuToggle onClick={() => setShowMenu(!showMenu)}>
        ☰
      </MenuToggle>
      <nav>
        <NavList $show={showMenu}>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="contact/navbar">Contract</Link>
          </NavItem>
          <NavItem>
            <Link href="About">About</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Info</Link>
          </NavItem>
          <NavItem>Новости</NavItem>
          <SearchInput type="text" placeholder="Search ..." />
          <LanguageSelect>
            <option value="uz">Uz</option>
            <option value="ru">Ру</option>
            <option value="en">En</option>
          </LanguageSelect>
        </NavList>
      </nav>
    </HeaderWropper>
  );
};

export default Header;
