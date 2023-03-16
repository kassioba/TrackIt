import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import ListaHabitos from "../components/ListaHabitos";

export default function PaginaHabitos({ token, dataUsuario }) {
  return (
    <>
      <HabitosHeader>
        <span>TrackIt</span>
        <img src={dataUsuario.image} alt="" />
      </HabitosHeader>
      <HabitosContainer>
        <ListaHabitos token={token} />
      </HabitosContainer>
    </>
  );
}

const HabitosContainer = styled.div`
  height: 471px;
  width: 375px;
  margin-top: 70px;
  padding-left: 17px;
  padding-right: 18px;
  padding-top: 22px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const HabitosHeader = styled.div`
  height: 70px;
  width: 375px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  font-size: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;
  position: fixed;
  top: 0;

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
