// Seleciona a ul onde os clientes vão aparecer
const lista = document.getElementById("listaClientes");
const API = "https://crudcrud.com/api/53f5653cf3a74cefbd4d3ee2895eef8e/clientes";

// Cria o item na tela (nome + email + botão de excluir)
function criarItem(cliente) {
    const item = document.createElement("li");
    item.innerHTML = `<span>${cliente.nome}<br>${cliente.email}</span> <button>X</button>`;

    // Excluir: remove o cliente inteiro (nome e email juntos)
    item.querySelector("button").addEventListener("click", () => {
        fetch(`${API}/${cliente._id}`, { method: "DELETE" })
        .then(() => item.remove());
    });

    lista.appendChild(item);
}

// GET: carrega todos os clientes salvos
fetch(API)
.then(resposta => resposta.json())
.then(clientes => clientes.forEach(cliente => criarItem(cliente)));

// POST: botão "Salvar"
document.getElementById("salvar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validação: avisa qual campo falta
    if (!nome && !email) {
        alert("Preencha o nome e o e-mail.");
        return;
    }
    if (!nome) {
        alert("Preencha o nome.");
        return;
    }
    if (!email) {
        alert("Preencha o e-mail.");
        return;
    }

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome, email: email })
    })
    .then(resposta => resposta.json())
    .then(cliente => {
        criarItem(cliente);
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    });
});