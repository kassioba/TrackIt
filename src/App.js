import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaHabitos from "./pages/PaginaHabitos";
import PaginaHoje from "./pages/PaginaHoje";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import PaginaHistorico from "./pages/PaginaHistorico";

function App() {
  const [dataUsuario, setDataUsuario] = useState();
  const [token, setToken] = useState("");

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
          element={<PaginaHabitos token={token} dataUsuario={dataUsuario} />}
        />
        <Route
          path="/hoje"
          element={<PaginaHoje dataUsuario={dataUsuario} token={token} />}
        />
        <Route
          path="/historico"
          element={<PaginaHistorico dataUsuario={dataUsuario} />}
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
