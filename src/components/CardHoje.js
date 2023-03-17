import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CardHoje({
  buscarHabitosHoje,
  token,
  id,
  seqAtual,
  maxSeq,
  nome,
  feito,
}) {
  const vazio = undefined;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function habitoFeito(i) {
    if (feito === false) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/check`,
        vazio,
        config
      );

      promise.then((resp) => {
        buscarHabitosHoje();
      });
      promise.catch((err) => alert(err));
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/uncheck`,
        vazio,
        config
      );

      promise.then((resp) => {
        buscarHabitosHoje();
      });
      promise.catch((err) => alert(err));
    }
  }

  return (
    <Card feito={feito} data-test="today-habit-container">
      <Texto>
        <TextoPrincipal data-test="today-habit-name">{nome}</TextoPrincipal>
        <Margin>
          <TextoSecundario
            data-test="today-habit-sequence"
            feito={feito}
            seqAtual={seqAtual}
          >
            Sequência atual: <span>{seqAtual} dias</span>
          </TextoSecundario>
          <TextoTerciario
            data-test="today-habit-record"
            seqAtual={seqAtual}
            maxSeq={maxSeq}
            feito={feito}
          >
            Seu recorde: <span>{maxSeq} dias</span>
          </TextoTerciario>
        </Margin>
      </Texto>
      <ion-icon
        data-test="today-habit-check-btn"
        onClick={() => habitoFeito(id)}
        name="checkbox"
      ></ion-icon>
    </Card>
  );
}

const Card = styled.div`
  width: 340px;
  height: 94px;
  margin-top: 10px;
  background-color: #ffffff;

  display: flex;
  padding-left: 15px;
  padding-top: 13px;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;

  ion-icon {
    font-size: 85px;
    color: ${(props) => (props.feito ? "#8FC549" : "#e7e7e7")};
    margin-left: 35px;
    position: absolute;
    right: 5px;
    bottom: 4px;
  }
`;

const Texto = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextoPrincipal = styled.div`
  color: #666666;
  font-size: 20px;
`;

const TextoSecundario = styled.div`
  font-size: 16px;
  color: #666666;

  span {
    font-size: 16px;
    color: ${(props) =>
      props.feito && props.seqAtual !== 0 ? "#8FC549" : "#666666"};
  }
`;

const Margin = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const TextoTerciario = styled.div`
  font-size: 16px;
  color: #666666;

  span {
    font-size: 16px;
    color: ${(props) =>
      props.seqAtual <= props.maxSeq && props.feito ? "#8FC549" : "#666666"};
  }
`;
