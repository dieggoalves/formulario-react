function validarCpf(cpf) {
    const cpfComOnzeDigitos = 11;
  
    if(cpf.length !== cpfComOnzeDigitos) {
      return{valido:false, texto:"O CPF deve ter 11 dígitos"}
    }else {
      return{valido:true, texto:""}
    }
}

function validarSenha(senha) {
    const tamanhoMinimoSenha = 4;
    const tamanhoMaximoSenha = 72;
  
    if(senha.length < tamanhoMinimoSenha || senha.length > tamanhoMaximoSenha) {
      return{valido:false, texto:"A senha deve ter entre 4 e 72 dígitos."};
    }else {
      return{valido:true, texto:""}
    }
}

export {validarCpf, validarSenha};
