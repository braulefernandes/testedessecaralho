const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
isobrenome = document.querySelector(".sobrenome");
idataNascimento = document.querySelector(".dataNascimento");
const itelefone = document.querySelector("telefone");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const igenero = document.querySelector(".genero");
const iplano = document.querySelector(".plano");

inome = `${inome.value} ${isobrenome.value}`;

function cadastrar (){
    fetch ("http://localhost:8080/usuarios",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: inome.value,
                dataNascimento: idataNascimento.value,
                telefone: itelefone.value,
                email: iemail.value,
                senha: isenha.value,
                genero: igenero.value,
                plano: iplano.value
            })
        })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)})
}

function limpar(){
    inome.value = ""
    idataNascimento.value = ""
    itelefone.value = ""
    iemail.value = ""
    isenha.value = ""
    igenero.value = ""
    iplano.value = ""
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});