"use client";
import React from "react";
import styled from "styled-components";
import VideoFile from "./video/port.mp4"; // Video faylni to‘g‘ri import qilish
import Info from "./Info/page";

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 5rem;
  width: 100%;
  height: 65rem;
  background-color: #e0ffff;
`;

const SectionRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  color: black;
  padding-top: 50px;
  padding-left: 50px;
`;
const SectionText = styled.h1`
  color: black;
  font-size: 40px;
  margin-left: 70px;
`;

const SectionInfo = styled.div`
  font-size: 18px;
  color: black;
  line-height: 1.5;
  margin-left: 80px;
  padding-top: 50px;
`;

const SectionUl = styled.ul`
  font-size: 18px;
  color: black;
  line-height: 1.5;
  padding-left: 100px;
  // paddi-left: 50px;
  line-height: 1.2;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 35rem;
  height: 13rem;
  border-radius: 20px;
  margin-top: 3rem;
  background-color: #87cefa;
`;

const Title = styled.h5`
  color: #e0ffff;
  margin: 25px;
  letter-spacing: 1px;
  font-family: sans-serif;
`;
const TitleWrapper = styled.h4`
  font-family: sans-serif;
  font-size: 18px;
  margin: 25px;
  letter-spacing: 1px;
  color: #e0ffff;
`;

const SectionLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 60rem;
`;

const VideoWrapper = styled.video`
  width: 35rem;
  height: 20rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const App = () => {
  return (
    <AppWrapper>
      {/* O'ng qism */}
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
    </AppWrapper>
  );
};

export default App;
