import { useState, useEffect } from "react";
import styled from "styled-components";
import CardCriacao from "./CardCriacao";
import axios from "axios";

export default function ListaHabitos({ token, atualizarContagem }) {
  const [habitos, setHabitos] = useState([]);
  const [aparecerCard, setAparecerCard] = useState("none");
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [diasEscolhidos, setDiasEscolhidos] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promise.then((resp) => setHabitos(resp.data));
    promise.catch((err) => console.log(err));
  }, [habitos]);

  function deletarCard(id) {
    if (window.confirm("Tem certeza que quer deletar esse hábito?") === true) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      );

      promise.then((resp) => atualizarContagem());
      promise.catch((err) => alert("Não foi possível deletar o hábito"));
    }
  }

  return (
    <>
      <HeaderLista>
        <span>Meus hábitos</span>
        <button
          onClick={() => setAparecerCard("inherit")}
          data-test="habit-create-btn"
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </HeaderLista>
      <CardCriacao
        diasEscolhidos={diasEscolhidos}
        setDiasEscolhidos={setDiasEscolhidos}
        dias={dias}
        token={token}
        aparecerCard={aparecerCard}
        setAparecerCard={setAparecerCard}
        atualizarContagem={atualizarContagem}
      />
      {habitos.length === 0 ? (
        <>
          <TextoContainer>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </TextoContainer>
        </>
      ) : (
        <ListaContainer>
          {habitos.map((card, i) => (
            <CardHabito data-test="habit-container">
              <span data-test="habit-name">{card.name}</span>
              <ion-icon
                data-test="habit-delete-btn"
                onClick={() => deletarCard(card.id)}
                name="trash-outline"
              ></ion-icon>
              <DiasSemana>
                {dias.map((dia, index) => (
                  <Dia data-test="habit-day" card={card} i={i} index={index}>
                    {dia}
                  </Dia>
                ))}
              </DiasSemana>
            </CardHabito>
          ))}
        </ListaContainer>
      )}
    </>
  );
}

const HeaderLista = styled.div`
  font-size: 23px;
  color: #126ba5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TextoContainer = styled.div`
  width: 336px;
  margin-top: 28px;
  color: #666666;
  font-size: 18px;
  line-height: 22px;
`;

const ListaContainer = styled.div`
  width: 340px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const CardHabito = styled.div`
  height: 91px;
  width: 340px;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 5px;
  padding-top: 13px;
  padding-left: 15px;
  box-sizing: border-box;
  position: relative;

  span {
    font-size: 20px;
    color: #666666;
  }

  ion-icon {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 11px;
  }
`;

const DiasSemana = styled.div`
  width: 234px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Dia = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.card.days.includes(props.index)
      ? "1px solid #CFCFCF"
      : "1px solid #d5d5d5"};
  border-radius: 5px;
  background-color: ${(props) =>
    props.card.days.includes(props.index) ? "#CFCFCF" : "#ffffff"};
  color: ${(props) =>
    props.card.days.includes(props.index) ? "#ffffff" : "#dbdbdb"};
  font-size: 20px;
`;
