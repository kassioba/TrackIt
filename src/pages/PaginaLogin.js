import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PaginaLogin({ setDataUsuario, setToken }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function logar(e) {
    e.preventDefault();

    const loginData = {
      email: email,
      password: senha,
    };

    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginData
    );

    promisse.then((resp) => {
      navigate("/habitos");
      setDataUsuario(resp.data);
      setToken(resp.data.token);
    });
    promisse.catch((err) => alert(err));
  }

  return (
    <LoginContainer onSubmit={logar}>
      <img src="./assets/logo.png" alt="logo" />
      <FormLogin>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          required
          type="password"
          placeholder="senha"
        />
        <button type="submit">Entrar</button>
      </FormLogin>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 178px;
    margin-top: 68px;
  }

  p {
    color: #52b6ff;
    margin-top: 25px;
    text-decoration-line: underline;
  }
`;

const FormLogin = styled.form`
  height: 147px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  justify-content: space-between;

  input {
    height: 45px;
    width: 303px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    outline: none;
    padding-left: 11px;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  button {
    height: 45px;
    width: 100%;
    font-size: 21px;
    color: #ffffff;
    background-color: #52b6ff;
    border-radius: 5px;
    border: none;
  }
`;
