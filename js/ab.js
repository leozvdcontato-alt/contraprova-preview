const dados = {

    centro: {

        total: 8,

        local: "Centro • Niterói/RJ",

        mapa: "https://www.google.com/maps?q=Centro,Niterói,RJ&output=embed",

        unidades: [
            {
                nome: "SEMTRAB",
                endereco: "Av. Ernani do Amaral Peixoto, 455",
                telefone: "(21) 2613-0291",
                preco: 109.00
            },
            {
                nome: "Dr. Kanaan Medicina Laboratorial",
                endereco: "Rua da Conceição, 188",
                telefone: "(21) 99858-2036 (WhatsApp)",
                preco: 109.00
            },
            {
                nome: "Blessing - Plaza Shopping Niterói",
                endereco: "Rua Quinze de Novembro, 08",
                telefone: "(21) 2730-6464",
                preco: 115.00
            },
            {
                nome: "Eliel Figueiredo",
                endereco: "Rua São Pedro, 151",
                telefone: "(21) 2450-8200",
                preco: 119.00
            },
            {
                nome: "Dual Saúde",
                endereco: "Rua Almirante Tefé, 669",
                telefone: "(21) 3610-2013",
                preco: 119.90
            },
            {
                nome: "Clínica Enfermed",
                endereco: "Rua Doutor Borman, 23",
                telefone: "(21) 3608-6904",
                preco: 120.00
            },
            {
                nome: "C & F Imagem",
                endereco: "Av. Ernani do Amaral Peixoto, 60",
                telefone: "(21) 2618-3515",
                preco: 120.00
            },
            {
                nome: "Laboratório Niterói",
                endereco: "Av. Visconde do Rio Branco, 305",
                telefone: "(21) 3674-3030",
                preco: 125.00
            }
        ]

    },

    icarai: {

        total: 4,

        local: "Icaraí • Niterói/RJ",

        mapa: "https://www.google.com/maps?q=Icaraí,Niterói,RJ&output=embed",

        unidades: [
            {
                nome: "Angralab",
                endereco: "Rua Tavares de Macedo, 95",
                telefone: "(21) 2714-2090",
                preco: 125
            },
            {
                nome: "Villela Pedras",
                endereco: "Rua Lopes Trovão, 390",
                telefone: "(21) 3511-8181",
                preco: 140
            },
            {
                nome: "Policlínica Centro da Dor",
                endereco: "Rua Gavião Peixoto, 340",
                telefone: "(21) 2610-3338",
                preco: 170
            },
            {
                nome: "Pascual Saúde",
                endereco: "Rua Cel. Moreira César, 26",
                telefone: "(21) 2722-2276",
                preco: 199
            }
        ]

    }

};

const lista = document.getElementById("lista-unidades");
const mapa = document.getElementById("mapa");
const total = document.getElementById("total-unidades");
const local = document.getElementById("localizacao-atual");
const bairroSelect = document.getElementById("bairro");
const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");
const ordenacaoSelect = document.querySelector(".units-sort");

function renderizar(bairro) {

    const info = dados[bairro];

    let unidades = [...info.unidades];

    if (ordenacaoSelect.value === "Menor preço") {

        unidades.sort((a, b) => a.preco - b.preco);

    }

    if (ordenacaoSelect.value === "Maior preço") {

        unidades.sort((a, b) => b.preco - a.preco);

    }

    if (ordenacaoSelect.value === "Mais próximo") {

        // Futuramente:
        // ordenar pela distância retornada pela API
        // ou pela geolocalização do usuário.

    }

    total.textContent = `${info.total} unidades encontradas`;
    local.textContent = info.local;
    mapa.src = info.mapa;

    lista.innerHTML = "";

    unidades.forEach(unidade => {

        lista.innerHTML += `

        <div class="unit-card">

            <div>

                <h3>${unidade.nome}</h3>

                <p>${info.local}</p>

                <div class="unit-address">
    <i class="ti ti-map-pin"></i>
    ${unidade.endereco}
</div>

<div class="unit-phone">
    <i class="ti ti-phone"></i>
    ${unidade.telefone}
</div>

            </div>

            <div class="unit-price">

                <strong>R$ ${unidade.preco.toFixed(2).replace(".", ",")}</strong>

                <small>5x sem juros</small>

                <a href="dados.html?posto=${encodeURIComponent(unidade.nome)}&endereco=${encodeURIComponent(unidade.endereco)}&telefone=${encodeURIComponent(unidade.telefone)}&preco=${unidade.preco}" class="cp-btn-primary">
    Comprar
</a>

            </div>

        </div>

        `;

    });

}

bairroSelect.addEventListener("change", () => {

    renderizar(bairroSelect.value);

});

ordenacaoSelect.addEventListener("change", () => {

    renderizar(bairroSelect.value);

});

renderizar("centro");