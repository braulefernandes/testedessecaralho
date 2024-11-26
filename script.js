const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const isobrenome = document.querySelector(".sobrenome");
const icpf = document.querySelector(".cpf");
const idataNascimento = document.querySelector(".dataNascimento");
const itelefone = document.querySelector(".telefone");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const igenero = document.querySelector(".genero");
const iplano = document.querySelector(".plano");

function cadastrar (){
    fetch ("http://localhost:8080/usuario/cadastrar",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: inome.value,
                cpf: icpf.value,
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
    fetchUsuarios();
    cadastrar();
    limpar();
});

async function fetchUsuarios() {
    try {
      const response = await fetch("http://localhost:8080/usuario/todos", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
  
      // Verifica se o status da resposta indica sucesso
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }
  
      // Converte a resposta para JSON
      const data = await response.json();
  
      // Exibe os dados no console
      console.log("Usuários:", data);
  
      return data; // Retorna os dados para uso posterior
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }