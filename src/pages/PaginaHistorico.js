import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PaginaHistorico({ valorHab, dataUsuario }) {
  return (
    <>
      <Header dataUsuario={dataUsuario} />
      <HistContainer>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistContainer>
      <Footer valorHab={valorHab} />
    </>
  );
}

const HistContainer = styled.div`
  margin-top: 70px;
  padding-left: 15px;
  padding-top: 28px;
  box-sizing: border-box;

  h1 {
    font-size: 23px;
    color: #126ba5;
  }

  p {
    font-size: 18px;
    color: #666666;
  }
`;
