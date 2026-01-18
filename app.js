// Variáveis globais;
let dados = []

// Trabalhando com botão btn1;
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () =>{
    let email1 = document.getElementById("email1").value;
    let  senha = document.getElementById("password1").value;

    // Trabalhando com as validações;
    switch(true){
        case email == "" || !isNaN(email):
            alert("Please, insert your email");
            break;

        case password == "":
            alert("Please, insert your password!");
            break;

        case !password.match(/[0-9]/g):
            alert("One number at least");
            break;

        case !password.match(/[a-z]/g):
            alert("At least one lowercase");
            break;  

        case !password.match(/[A-Z]/g):
            alert("At least onde one uppercase");
            break;

        default:
            alert("Password sent");
            break;
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
