// Variáveis globais;
let dados = []

// Trabalhando com botão btn1;
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () =>{
    let email1 = document.getElementById("email1").value;
    let  senha = document.getElementById("password1").value;

    // Trabalhando com as validações;
    if(email1 == "" || !isNaN(email1)){
        alert("Por favor, insira seu email corretamente!");
        return;
    }
    if(senha == ""){
        alert("Por favor, insira sua senha!");
    }

    dados.push({
        email1: email1,
        senha: senha
    });
    

    let dadosAdquiridos = "";
    for(let x = 0; x < dados.length; x++){
        dadosAdquiridos += `Email: ${dados[x].email1}; Senha: ${dados[x].senha} \n`;
    }
    console.log(dadosAdquiridos);

})