const params = new URLSearchParams(window.location.search);

const posto = params.get("posto");
const endereco = params.get("endereco");
const telefone = params.get("telefone");
const preco = params.get("preco");

if (posto) {
    document.getElementById("summary-posto").textContent = posto;
}

if (endereco) {
    document.getElementById("summary-endereco").textContent = endereco;
}

if (telefone) {
    document.getElementById("summary-telefone").textContent = telefone;
}

if (preco) {
    document.getElementById("summary-preco").textContent =
        `R$ ${Number(preco).toFixed(2).replace(".", ",")}`;
}

const botao = document.getElementById("btn-continuar");

botao.href =
`pagamento.html?posto=${encodeURIComponent(posto)}
&endereco=${encodeURIComponent(endereco)}
&telefone=${encodeURIComponent(telefone)}
&preco=${preco}`;