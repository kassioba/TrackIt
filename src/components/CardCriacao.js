import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function CardCriacao({
  diasEscolhidos,
  setDiasEscolhidos,
  dias,
  token,
  aparecerCard,
  setAparecerCard,
}) {
  const [nomeHabito, setNomeHabito] = useState("");

  function escolherDias(i) {
    let diasEscolhidosCopia = [...diasEscolhidos];

    if (diasEscolhidosCopia.includes(i)) {
      diasEscolhidosCopia.splice(diasEscolhidosCopia.indexOf(i), 1);
    } else {
      diasEscolhidosCopia = [...diasEscolhidosCopia, i];
    }
    setDiasEscolhidos(diasEscolhidosCopia);
  }

  function criarHabito() {
    const criacaoData = {
      name: nomeHabito,
      days: diasEscolhidos,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      criacaoData,
      config
    );

    promisse.then((resp) => {
      setAparecerCard("none");
      setDiasEscolhidos([]);
      setNomeHabito("");
    });
    promisse.catch((err) => alert(err));
  }

  return (
    <CriacaoContainer
      data-test="habit-create-container"
      aparecerCard={aparecerCard}
    >
      <NomeHab
        data-test="habit-name-input"
        value={nomeHabito}
        onChange={(e) => setNomeHabito(e.target.value)}
        placeholder="nome do hábito"
      />
      <DiasSemana>
        {dias.map((dia, index) => (
          <Dia
            data-test="habit-day"
            key={index}
            onClick={() => escolherDias(index)}
            index={index}
            diasEscolhidos={diasEscolhidos}
          >
            {dia}
          </Dia>
        ))}
      </DiasSemana>
      <Cancelar
        onClick={() => setAparecerCard("none")}
        data-test="habit-create-cancel-btn"
      >
        Cancelar
      </Cancelar>
      <Salvar onClick={criarHabito} data-test="habit-create-save-btn">
        Salvar
      </Salvar>
    </CriacaoContainer>
  );
}

const CriacaoContainer = styled.div`
  height: 180px;
  width: 340px;
  background-color: #ffffff;
  margin-top: 20px;
  border-radius: 5px;
  padding-left: 19px;
  padding-top: 18px;
  box-sizing: border-box;
  display: ${(props) => props.aparecerCard};

  input::placeholder {
    color: #dbdbdb;
  }
`;

const NomeHab = styled.input`
  width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 11px;
  box-sizing: border-box;
  outline: none;
`;

const DiasSemana = styled.div`
  width: 234px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Cancelar = styled.button`
  width: 84px;
  height: 35px;
  color: #52b6ff;
  background-color: #ffffff;
  border: none;
  font-size: large;
  margin-left: 125px;
  margin-top: 30px;
  cursor: pointer;
`;

const Salvar = styled.button`
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  margin-left: 15px;
  cursor: pointer;
`;

const Dia = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.diasEscolhidos.includes(props.index) ? "#CFCFCF" : "#ffffff"};
  border: ${(props) =>
    props.diasEscolhidos.includes(props.index)
      ? "1px solid #CFCFCF"
      : "1px solid #d5d5d5"};
  border-radius: 5px;
  color: ${(props) =>
    props.diasEscolhidos.includes(props.index) ? "#ffffff" : "#dbdbdb"};
  font-size: 20px;
`;
