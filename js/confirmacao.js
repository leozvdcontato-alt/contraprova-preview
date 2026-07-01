const params = new URLSearchParams(window.location.search);

const posto = params.get("posto");
const endereco = params.get("endereco");
const telefone = params.get("telefone");
const preco = params.get("preco");

document.getElementById("summary-posto").textContent = posto;
document.getElementById("summary-endereco").textContent = endereco;
document.getElementById("summary-telefone").textContent = telefone;
document.getElementById("summary-preco").textContent =
`R$ ${Number(preco).toFixed(2).replace(".", ",")}`;