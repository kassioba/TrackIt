import styled from "styled-components";

export default function Header({ dataUsuario }) {
  return (
    <HeaderContainer data-test="header">
      <span>TrackIt</span>
      <img src={dataUsuario.image} alt="" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
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
  font-family: "Playball", cursive;

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
