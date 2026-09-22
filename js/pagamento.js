const params=new URLSearchParams(window.location.search);
const posto=params.get("posto")||"";
const endereco=params.get("endereco")||"";
const telefone=params.get("telefone")||"";
const preco=params.get("preco")||"";
const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
set("summary-posto",posto);set("summary-endereco",endereco);set("summary-telefone",telefone);
set("summary-preco",preco? `R$ ${Number(preco).toFixed(2).replace(".",",")}`:"");
const btn=document.getElementById("btn-pagar");
if(btn){const next=new URLSearchParams({posto,endereco,telefone,preco});btn.href=`confirmacao.html?${next.toString()}`;}