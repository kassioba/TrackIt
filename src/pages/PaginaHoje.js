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
  const [valorHab, setValorHab] = useState(0);
  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const buscarHabitosHoje = () => {
    setHoje(diasSemana[dayjs().day()]);
    setData(dayjs().format("DD/MM"));

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((resp) => {
      console.log(resp.data);
      setHabitosHoje(resp.data);
      let porcentagem = 0;
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].done) {
          porcentagem++;
        }
      }
      setValorHab(porcentagem * (100 / resp.data.length));
    });
  };

  useEffect(() => buscarHabitosHoje(), []);

  return (
    <>
      <Header dataUsuario={dataUsuario} />
      <ContainerHoje valor={Math.ceil(valorHab)}>
        <Dia data-test="today">{`${hoje}, ${data}`}</Dia>
        <PorcentagemHab data-test="today-counter">
          {Math.ceil(valorHab) === 0
            ? "Nenhum hábito concluído ainda"
            : `${Math.ceil(valorHab)}% dos hábitos concluídos`}
        </PorcentagemHab>
        <ListaContainer>
          {habitosHoje.map((data) => (
            <CardHoje
              habitosHoje={habitosHoje}
              buscarHabitosHoje={buscarHabitosHoje}
              token={token}
              id={data.id}
              seqAtual={data.currentSequence}
              maxSeq={data.highestSequence}
              nome={data.name}
              feito={data.done}
              valorHab={valorHab}
              setValorHab={setValorHab}
            />
          ))}
        </ListaContainer>
      </ContainerHoje>
      <Footer />
    </>
  );
}

const ContainerHoje = styled.div`
  height: 490px;
  margin-top: 70px;
  padding-left: 18px;
  padding-top: 28px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Dia = styled.div`
  font-size: 23px;
  color: #126ba5;
  line-height: 28.72px;
`;

const ListaContainer = styled.div`
  width: 340px;
  margin-top: 18px;
`;

const PorcentagemHab = styled.div`
  font-size: 18px;
  color: ${(props) => (props.valor === 0 ? "#bababa" : "#8FC549")};
`;