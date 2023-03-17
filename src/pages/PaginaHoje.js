import Footer from "../components/Footer";
import Header from "../components/Header";
import dayjs from "dayjs";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import CardHoje from "../components/CardHoje";
import axios from "axios";

export default function PaginaHoje({ dataUsuario, token }) {
  const [hoje, setHoje] = useState("");
  const [data, setData] = useState("");
  const [habitosHoje, setHabitosHoje] = useState([]);
  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    setHoje(diasSemana[dayjs().day()]);
    setData(dayjs().format("DD/MM"));

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((resp) => console.log(resp.data));
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <>
      <Header dataUsuario={dataUsuario} />
      <ContainerHoje>
        <Dia>{`${hoje}, ${data}`}</Dia>
        <span>Nenhum hábito concluído ainda</span>
        <ListaContainer>
          <CardHoje token={token} />
        </ListaContainer>
      </ContainerHoje>
      <Footer />
    </>
  );
}

const ContainerHoje = styled.div`
  background-color: red;
  margin-top: 70px;
  padding-left: 18px;
  padding-top: 28px;
  box-sizing: border-box;

  span {
    font-size: 18px;
    color: #bababa;
  }
`;

const Dia = styled.div`
  font-size: 23px;
  color: #126ba5;
  line-height: 28.72px;
`;

const ListaContainer = styled.div`
  width: 340px;
  background-color: beige;
  margin-top: 18px;
`;
