import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function PaginaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [img, setImg] = useState("");
  const [desativado, setDesativado] = useState(false);
  const navigate = useNavigate();

  function finalizarCadastro(e) {
    e.preventDefault();

    setDesativado(true);

    const cadastroData = {
      email: email,
      name: nome,
      image: img,
      password: senha,
    };

    console.log(cadastroData);
    const promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      cadastroData
    );

    promisse.then(() => {
      alert("Login efetuado com sucesso");
      setDesativado(false);
      navigate("/");
    });

    promisse.catch((err) => {
      alert(err);
      setDesativado(false);
    });
  }

  return (
    <CadastroContainer>
      <img src="./assets/logo.png" alt="logo" />
      <FormCadastro onSubmit={finalizarCadastro}>
        <input
          disabled={desativado}
          data-test="email-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          disabled={desativado}
          data-test="password-input"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="senha"
        />
        <input
          disabled={desativado}
          data-test="user-name-input"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="nome"
        />
        <input
          disabled={desativado}
          data-test="user-image-input"
          required
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="foto"
        />
        <button disabled={desativado} data-test="signup-btn" type="submit">
          {desativado ? (
            <ThreeDots
              height="13"
              width="51"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}
        </button>
      </FormCadastro>
      <Link to="/" data-test="login-link">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </CadastroContainer>
  );
}

const CadastroContainer = styled.div`
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

const FormCadastro = styled.form`
  height: 249px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
