import { StepLabel, Step, Stepper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar }) {
    // Constante que define a etapa (estado) atual do formulário
    const [etapaAtual, setEtapaAtual] = useState(0);

    // Constante que armazena os dados de cada etapa do formulário
    const [dadosColetados, setDados] = useState({});

    // O useEffect completa o ciclo de vida no nosso componente de Formulário
    // Precisamos usar ele ao invés do useState, POIS O useState É ASSÍNCRONO
    // Aqui, condicionamos a chamada do useEffect para ser chamando somente quando as etapas de cadastro acabarem
    // Ou seja, quando o TAMANHO DO ARRAY DE ETAPAS (etapaAtual - que começa em 0) TIVER O MESMO TAMANHO DA QUANTIDADE DE ETAPAS DE CADASTRO QUE O FORMULÁRIO TEM
    useEffect(() => {
        if(etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });

    // Array que armazena os componentes que serão renderizados
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    // Função que passa para a próxima etapa do cadastro
    // A cada etapa do formulário que fo submetida pelo botão "cadastrar", o estado do componente muda, renderizando o próximo componente do formulário
    function proximo() {
        setEtapaAtual(etapaAtual + 1); // O setState muda o estado atual do componente somando o estado atual + 1
    }

    // Aqui é a renderização do formulário em si
    return(
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            { formularios[etapaAtual] } 
        </>
    );
}

export default FormularioCadastro;
