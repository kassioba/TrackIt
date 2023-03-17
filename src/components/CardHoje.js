import styled from "styled-components";

export default function CardHoje({ token }) {
  return (
    <Card>
      <Texto>
        <TextoPrincipal>Ler 1 capítulo de livro</TextoPrincipal>
        <Margin>
          <TextoSecundario>Sequência atual: 4 dias </TextoSecundario>
          <TextoSecundario>Seu recorde: 5 dias</TextoSecundario>
        </Margin>
      </Texto>
      <ion-icon name="checkbox"></ion-icon>
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
    color: #e7e7e7;
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
`;

const Margin = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;
