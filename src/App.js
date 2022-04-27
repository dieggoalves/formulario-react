import React from "react";
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { validarCpf, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCpf, senha: validarSenha, nome: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>     
    </Container>
  );
}

// Primeiro, chamamos a função que queremos na propriedade que criamos para nosso componente quando CHAMAMOS NOSSO COMPONENTE PARA SER RENDERIZADO
// Na construção da nossa Function Component, passamos o "props" como parâmetro da nossa função. E quando criamos de fato nossa árvore que será renderizada, aí sim chamamos nossa
// função através da propriedade que criamos. Chamamos assim: props.nomeDaPropriedade({parâmetros, da, função})
// Ou podemos desconstruir a props, ou seja, passar o próprio nome da propriedade como parâmetro lá na declaração de nossa function component.
// Assim, para chamarmos nossa propriedade em nosso componente, chamamos simplesmente o nome da nossa propriedade, assim: nomeDaPropriedade({parâmetros, da, função})
function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
