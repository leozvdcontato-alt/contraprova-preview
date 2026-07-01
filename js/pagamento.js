const params = new URLSearchParams(window.location.search);

const posto = params.get("posto");
const endereco = params.get("endereco");
const telefone = params.get("telefone");
const preco = params.get("preco");

// Atualiza o resumo
document.getElementById("summary-posto").textContent = posto;
document.getElementById("summary-endereco").textContent = endereco;
document.getElementById("summary-telefone").textContent = telefone;
document.getElementById("summary-preco").textContent =
`R$ ${Number(preco).toFixed(2).replace(".", ",")}`;

// Botão continuar
const btn = document.getElementById("btn-pagar");

btn.href =
`confirmacao.html?posto=${encodeURIComponent(posto)}
&endereco=${encodeURIComponent(endereco)}
&telefone=${encodeURIComponent(telefone)}
&preco=${preco}`;