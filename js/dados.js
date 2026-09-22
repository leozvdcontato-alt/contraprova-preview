const params=new URLSearchParams(window.location.search);
const posto=params.get("posto")||"";
const endereco=params.get("endereco")||"";
const telefone=params.get("telefone")||"";
const preco=params.get("preco")||"";
const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
set("summary-posto",posto);set("summary-endereco",endereco);set("summary-telefone",telefone);
set("summary-preco",preco? `R$ ${Number(preco).toFixed(2).replace(".",",")}`:"");
const botao=document.getElementById("btn-continuar");
if(botao) botao.addEventListener("click",(event)=>{
 const ids=["nome","cpf","email","telefone-cliente"];
 const invalid=ids.map(id=>document.getElementById(id)).filter(el=>!el||!el.checkValidity());
 if(invalid.length){event.preventDefault();invalid[0]?.reportValidity();invalid[0]?.focus();return}
 const next=new URLSearchParams({posto,endereco,telefone,preco});
 window.location.href=`pagamento.html?${next.toString()}`;
});