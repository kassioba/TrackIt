import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListaHabitos from "../components/ListaHabitos";

export default function PaginaHabitos({ token, dataUsuario }) {
  return (
    <>
      <Header data-test="header" dataUsuario={dataUsuario} />
      <HabitosContainer>
        <ListaHabitos token={token} />
      </HabitosContainer>
      <Footer data-test="menu" />
    </>
  );
}

const HabitosContainer = styled.div`
  height: 490px;
  width: 375px;
  margin-top: 70px;
  padding-left: 17px;
  padding-right: 18px;
  padding-top: 22px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`;
