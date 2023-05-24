// Pegando campos 
const login = document.getElementById("login")
const senha = document.getElementById("senha")

const bnt = document.getElementById("btnSubmit")

const msLogin = document.getElementById("msLogin")
const msSenha = document.getElementById("msSenha")

//Botao desabilitado por padrão
bnt.disabled = true

//msg none
msLogin.style.display = "none"
msSenha.style.display = "none"

//Mudar para um estado invalido
function fieldLogin () {
    login.style.borderColor = "red"
    login.style.color = "red"
}

//Mudar para um estado invalido
function fieldPass(){
    senha.style.borderColor = "red"
    senha.style.color = "red"
}
//Mudar para um formato valido
function fieldLoginCheck(){
    login.style.borderColor = "green"
    login.style.color = "green"
}

//Mudar para um formato valido
function fieldPassCheck(){
    senha.style.borderColor = "red"
    senha.style.color = "red"
}

//Função das validações
function valicadao() {
    if(!login) { //casos errados
        fieldLogin()
        msLogin.innerHTML = "senha invalida ou blalblalbla"
    }

    if(!senha) { //casos certos
        fieldPassCheck()
        bnt.disabled = false
    }
}

//Eventos de gatilho para validacao
login.addEventListener("onchange", valicadao())
senha.addEventListener("onchange", valicadao())