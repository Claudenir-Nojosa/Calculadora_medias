const form =document.getElementById("form-atividade");
let linhas = "";
const atividades = [];
const notas = [];
const spanAprovado ='<span class="resultado aprovado">Aprovado</span>';
const spanReprovado ='<span class="resultado reprovado">Reprovado</span>';
const notaMinima =parseFloat(prompt("Digite a nota mínima"));
form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
})

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    atividades.push(inputNomeAtividade);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? "Aprovado" : "Reprovado"}</td>`;
    linha += "</tr>";
    linhas += linha;
    inputNomeAtividade.value="";
    inputNotaAtividade.value="";
    
}

function atualizarTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}
function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}
function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i=0;i<notas.length;i++){
        somaDasNotas += notas[i];
    }
    return (somaDasNotas/atividades.length);
}