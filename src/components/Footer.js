import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  return (
    <FooterContainer data-test="menu">
      <Link to="/habitos" data-test="habit-link">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje" data-test="today-link">
        <button>
          <CircularProgressbar
            text="Hoje"
            styles={buildStyles({ textColor: "#ffffff" })}
          />
        </button>
      </Link>
      <Link to="/historico" data-test="history-link">
        <span>Histórico</span>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 375px;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  padding-left: 36px;
  padding-right: 31px;
  box-sizing: border-box;
  position: relative;
  position: absolute;
  bottom: 0;

  span {
    color: #52b6ff;
    font-size: 20px;
  }

  button {
    width: 91px;
    height: 91px;
    position: absolute;
    left: 142px;
    border-radius: 100%;
    bottom: 10px;
    background-color: #52b6ff;
    border: none;
    font-size: 18px;
    color: #ffffff;
  }

  a {
    text-decoration: none;
  }
`;
