"use client";
import React from "react";
import styled from "styled-components";
import VideoFile from "./video/port.mp4"; // Video faylni to‘g‘ri import qilish
import Info from "./Info/page";
import Footer from "../components/footer/page";
import Navbar from "../components/header/navbar/page";

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 65rem ;
  background-color: #e0ffff;

  @medi (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 20px;
  }
`;

const SectionRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  color: black;
  padding-top: 100px;
  padding-left: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-left: 1rem;
  }
`;

const SectionText = styled.h1`
  color: black;
  font-size: 40px;
  margin-left: 70px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0;
    text-align: center;
  }
`;

const SectionInfo = styled.div`
  font-size: 18px;
  color: black;
  line-height: 1.5;
  margin-left: 80px;
  padding-top: 50px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 10px 0;
    padding-top: 20px;
    margin-left: 1px;
  }
`;

const SectionUl = styled.ul`
  font-size: 18px;
  color: black;
  line-height: 1.5;
  padding-left: 100px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 10px;
    margin: 10px 0;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 35rem;
  height: auto;
  border-radius: 20px;
  margin-top: 3rem;
  background-color: #87cefa;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    padding: 1rem 2rem 2rem 1rem;
  }
`;

const Title = styled.h5`
  color: #e0ffff;
  margin: 25px;
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px;
    // padding: 20px 20px 10px 10px;
    ;
  }
`;

const TitleWrapper = styled.h4`
  font-family: sans-serif;
  font-size: 18px;
  margin: 25px;
  letter-spacing: 1px;
  color: #e0ffff;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 10px;
    text-align: start;
  }
`;

const SectionLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 60rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;

const VideoWrapper = styled.video`
  width: 35rem;
  height: 20rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <SectionRight>
        <SectionText>О компании</SectionText>
        <SectionInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsum
          esse. Necessitatibus sunt consequuntur ut, praesentium unde magni
          cumque magnam eaque quisquam. Quas blanditiis quisquam hic ad enim
          laudantium, neque voluptates consectetur, officia vero error!
          Accusantium nemo quibusdam repudiandae tempore laboriosam vero omnis
          placeat sit odio dignissimos. Porro, possimus exercitationem.
        </SectionInfo>
        <SectionInfo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          omnis.
        </SectionInfo>

        <SectionUl>
          <ol style={{ listStyleType: "disc" }}>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              Consectetur, quo! Lorem ipsum dolor, sit amet consectetur
              <br />
              adipisicing elit. In quae cum ullam quos fuga harum.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ol>

          <ol style={{ listStyleType: "disc" }}>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Laborum, at. Lorem ipsum dolor, sit amet <br /> consectetur
              adipisicing elit. In quae cum ullam quos fuga harum.
            </li>
            <li style={{ marginTop: "15px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ol>
        </SectionUl>
      </SectionRight>
      <SectionLeft>
        <VideoWrapper controls>
          <source src={VideoFile} type="Video/mp4" />
          Sizning brauzeringiz ushbu videoni qollab-quvvatlamaydi.
        </VideoWrapper>
        <Card>
          <Title>ЗАПРОС СТАВКИ И УСЛОВИЙ ПОГРУЗОЧНО-ЗАГРОЗОЧНЫХ РАБОТ</Title>
          <TitleWrapper>
            Зассчитайте моментально стоимось полных <br /> портавых услуг в
            порту VIZMA
          </TitleWrapper>
        </Card>
      </SectionLeft>
      <Info />
      <Footer />
    </AppWrapper>
  );
};

export default App;
