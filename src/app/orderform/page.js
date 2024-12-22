"use client";
import styled from "styled-components";
import Header from "../components/header/navbar/page";
import Footer from "../components/footer/page";

const InfoWrapper = styled.div`
  background-color: #f6f8f3;
`;
// Navbar qismi
const Navbar = styled.div`
  display: flex;
  justify-content: space-around; /* Navbar elementlarini teng bo'lib joylashtirish */
  align-items: center; /* Yassi joylashtirish */
  width: 100%;
  height: 3.8rem;
  background-color: rgb(200, 210, 221);
  padding-right: 10rem;
  margin-top: 4.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-right: 0;
    padding: 0;
    height: 10rem;
    width: 100%;
    margin-top: 2rem;
  }
`;

const NavbarUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-right: 20rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Ro'yxatni ustun formatga o'tkazish */
    padding: 3.5rem;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    margin: 10px 0; /* Mobil qurilmalar uchun bo'shliqni moslashtirish */
  }
`;

const Section = styled.div`
width: 100%;
height: 100%;
`;

const TextH1 = styled.h1`
font-size: 2rem;
text-align: center;
`;


const OrderForm = () => {
  return (
    <InfoWrapper>
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
      <Section>
        <TextH1>Запрос ставки и условий <br/>погркзочно-загрузочныч работ</TextH1>
        <OrderForm></OrderForm>
      </Section>
      <Footer />
    </InfoWrapper>
  );
};

export default OrderForm;
