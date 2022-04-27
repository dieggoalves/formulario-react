import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import { Button, TextField } from "@mui/material";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Armazenamos na constante "validacoes" o que é exportado do nosso Contexto
    const validacoes = useContext(ValidacoesCadastro);
    
    // Criamos um hook customizado que guarda e altera os estados dos erros
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }          
        }}>
            <TextField
                value={email}
                onChange={(event) =>{
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) =>{
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth            
            />
            <Button type="submit" variant="contained">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
