import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaHabitos from "./pages/PaginaHabitos";
import PaginaHoje from "./pages/PaginaHoje";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import PaginaHistorico from "./pages/PaginaHistorico";
import axios from "axios";

function App() {
  const [dataUsuario, setDataUsuario] = useState();
  const [token, setToken] = useState("");
  const [valorHab, setValorHab] = useState(0);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const atualizarContagem = () => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((resp) => {
      let porcentagem = 0;
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].done) {
          porcentagem++;
        }
      }
      setValorHab(porcentagem * (100 / resp.data.length));
    });
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <PaginaLogin setToken={setToken} setDataUsuario={setDataUsuario} />
          }
        />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route
          path="/habitos"
          element={
            <PaginaHabitos
              valorHab={valorHab}
              token={token}
              dataUsuario={dataUsuario}
              atualizarContagem={atualizarContagem}
            />
          }
        />
        <Route
          path="/hoje"
          element={
            <PaginaHoje
              valorHab={valorHab}
              setValorHab={setValorHab}
              dataUsuario={dataUsuario}
              token={token}
            />
          }
        />
        <Route
          path="/historico"
          element={
            <PaginaHistorico valorHab={valorHab} dataUsuario={dataUsuario} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background-color: #F2F2F2;
  font-family: 'Lexend Deca', sans-serif;
}
`;
