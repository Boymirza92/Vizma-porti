// "use client";
// import React from "react";
// import styled from "styled-components";
// import Image from "next/image";
// import Port1 from "./img/port1.jpg";
// import Port2 from "./img/port2.jpg";
// import Port3 from "./img/port3.jpg";
// import Port4 from "./img/port4.jpg";

// const AppWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start; 
//   gap: 10px; 
//   flex-wrap: wrap; 
//   width: 100%; 
//   height: 100vh;
//   max-width: 1450px; 
//   padding-left: 45px
// `;
// const AppTitle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%; 
//   padding-left: 20px;
//   max-width: 1400px;
//   margin-bottom: 20px;
// `;
// const News = styled.h1`
// font-size: 35px;
// margin-top: 35px;
// `;
// const NewParagrap = styled.h5`
// color: blue;
// cursor: pointer;
// &:hover{
// color: green;
// }
// `;



// const CardImg = styled.div`
//   flex: 1 1 calc(25% - 16px);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 20px;
//   border-radius: 8px;
//   width: 100%;

//   max-width: 300px;
//   min-height: 400px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }
// `;

// const Imge = styled(Image)`
//   width: 100%;
//   height: 200px;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// const Data = styled.h5`
//   font-size: 14px;
//   color: #888;
//   margin-top: 10px;
//   text-align: start;
//   letter-spacing: 0.7px
// `;

// const Title = styled.h4`
//   font-size: 18px;
//   color: #333;
//   margin-top: 0;
//   text-align: start;
// `;

// const Text = styled.p`
//   margin-top: 5px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

// const App = () => {
//   return (
//     <AppWrapper>
//       <AppTitle>
//         <News>Навости</News>
//         <NewParagrap>ВСЕ НАВОСТИ &nbsp;&nbsp; ➡</NewParagrap>
//       </AppTitle>
//       <CardImg>
//         <Imge src={Port1} alt="Port" />
//         <Data>20/05/22</Data>
//         <Title>Super eu pulninar eget integer</Title>
//         <Text>
//           Cum consequatur laudantium nulla voluptatum ea exercitationem iure
//           accusantium qui, recusandae nihil eius commodi quae minima, distinctio
//           porro necessitatibus. Optio nisi ad numquam facere fugit
//         </Text>
//       </CardImg>
//       <CardImg>
//         <Imge src={Port2} alt="Port" />
//         <Data>20/02/22</Data>
//         <Title>
//           Vitea Id nec nulla sit nunc cursus curabiter tempus vel enim.
//         </Title>
//         <Text>
//           Eos obcaecati nulla blanditiis inventore perspiciatis. Illo obcaecati
//           consequuntur ut suscipit, officia veniam eos eius beatae dicta velit
//           quam error distinctio aspernatur dolorum deserunt
//         </Text>
//       </CardImg>
//       <CardImg>
//         <Imge src={Port3} alt="Port" />
//         <Data>30/12/21</Data>
//         <Title>
//           Integer nisi sagittis in aliquet. Enim eget varius lacinia est a
//         </Title>
//         <Text>
//           Officiis eos blanditiis repellat porro nihil facere facilis quis
//           recusandae excepturi veniam magni id fugiat pariatur dolor natus
//           commodi beatae
//         </Text>
//       </CardImg>
//       <CardImg>
//         <Imge src={Port4} alt="Port" />
//         <Data>29/06/21</Data>
//         <Title>Facilisis vitea proin quis</Title>
//         <Text>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos
//           blanditiis repellat porro nihil facere facilis quis recusandae
//           excepturi veniam magni id fugiat pariatur dolor natus commodi beatae
//         </Text>
//       </CardImg>
//     </AppWrapper>
//   );
// };

// export default App;


"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Port1 from "./img/port1.jpg";
import Port2 from "./img/port2.jpg";
import Port3 from "./img/port3.jpg";
import Port4 from "./img/port4.jpg";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap; /* Kichik ekranlar uchun moslashuv */
  width: 100%;
  max-width: 1450px;
  padding-left: 45px;
  padding-bottom: 70px;
  margin: 0 auto; /* Kontentni markazlash uchun */
`;

const AppTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  max-width: 1400px;
  margin-bottom: 20px;
`;

const News = styled.h1`
  font-size: 35px;
  margin-top: 35px;
`;

const NewParagrap = styled.h5`
  color: blue;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

const CardImg = styled.div`
  flex: 1 1 calc(25% - 16px); /* To'rtta ustunda joylashish uchun */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px; /* Maksimal o'lcham */
  min-height: 400px;
  background: #f9f9f9; /* Fon qo'shildi, yaxshiroq ko'rinish uchun */

  @media (max-width: 1024px) {
    flex: 1 1 calc(33.33% - 16px); /* Uchta ustunda joylashish uchun */
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 16px); /* Ikki ustunda joylashish uchun */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* Bitta ustunda joylashish uchun */
  }
`;

const Imge = styled(Image)`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

const Data = styled.h5`
  font-size: 14px;
  color: #888;
  margin-top: 10px;
  text-align: start;
  letter-spacing: 0.7px;
`;

const Title = styled.h4`
  font-size: 18px;
  color: #333;
  margin-top: 0;
  text-align: start;
`;

const Text = styled.p`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppTitle>
        <News>Навости</News>
        <NewParagrap>ВСЕ НАВОСТИ &nbsp;&nbsp; ➡</NewParagrap>
      </AppTitle>
      <CardImg>
        <Imge src={Port1} alt="Port" />
        <Data>20/05/22</Data>
        <Title>Super eu pulninar eget integer</Title>
        <Text>
          Cum consequatur laudantium nulla voluptatum ea exercitationem iure
          accusantium qui, recusandae nihil eius commodi quae minima, distinctio
          porro necessitatibus. Optio nisi ad numquam facere fugit
        </Text>
      </CardImg>
      <CardImg>
        <Imge src={Port2} alt="Port" />
        <Data>20/02/22</Data>
        <Title>
          Vitea Id nec nulla sit nunc cursus curabiter tempus vel enim.
        </Title>
        <Text>
          Eos obcaecati nulla blanditiis inventore perspiciatis. Illo obcaecati
          consequuntur ut suscipit, officia veniam eos eius beatae dicta velit
          quam error distinctio aspernatur dolorum deserunt
        </Text>
      </CardImg>
      <CardImg>
        <Imge src={Port3} alt="Port" />
        <Data>30/12/21</Data>
        <Title>
          Integer nisi sagittis in aliquet. Enim eget varius lacinia est a
        </Title>
        <Text>
          Officiis eos blanditiis repellat porro nihil facere facilis quis
          recusandae excepturi veniam magni id fugiat pariatur dolor natus
          commodi beatae
        </Text>
      </CardImg>
      <CardImg>
        <Imge src={Port4} alt="Port" />
        <Data>29/06/21</Data>
        <Title>Facilisis vitea proin quis</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos
          blanditiis repellat porro nihil facere facilis quis recusandae
          excepturi veniam magni id fugiat pariatur dolor natus commodi beatae
        </Text>
      </CardImg>
    </AppWrapper>
  );
};

export default App;
