let listaPessoas = "Ana-15,João-28,Carlos-17,Maria-50"; // Atividade Processamento de string
let nomes = listaPessoas.split(",");
let pessoas = []; //Para primeira atividade de lista a partir da página
//https://github.com/zeus-informatica-professor/FIC-ProgWeb

function executarWhile() {

    let contador = 10;

    let area =
        document.getElementById("whileResultado");

    area.innerHTML = "";

    while (contador < 5) {

        area.innerHTML +=
            "<div class='caixa'>WHILE executou</div>";

        contador++;

    }

}

function executarDoWhile() {

    let contador = 10;

    let area =
        document.getElementById("doWhileResultado");

    area.innerHTML = "";

    do {

        area.innerHTML +=
            "<div class='caixa'>DO WHILE executou</div>";

        contador++;

    }

    while (contador < 5);

}


//Testes lógicos:
// TABELA DE COMPARAÇÃO
function testar(resultado, idElemento) {

    let elemento =
        document.getElementById(idElemento);

    elemento.innerText = resultado;

    if (resultado) {

        elemento.className =
            "resultado verdadeiro";

    } else {

        elemento.className =
            "resultado falso";

    }

}

document.getElementById("igual").innerText =
    5 == "5";

document.getElementById("estrito").innerText =
    5 === "5";

document.getElementById("diferente").innerText =
    5 != 3;

document.getElementById("maior").innerText =
    10 > 5;

document.getElementById("menor").innerText =
    3 < 8;

// IF / ELSE

function verificarIdade() {
    let idade = Number(document.getElementById("idadeTeste").value);
    
    if (idade >= 18) {
        document.getElementById("resultadoIf").innerText =
            "Maior de idade";
    } else {
        document.getElementById("resultadoIf").innerText =
            "Menor de idade";
    }
}

// SWITCH
function menuBanco() {

    let opcao =
        document.getElementById("opcao").value;

    switch (opcao) {

        case "1":

            document.getElementById("resultadoSwitch").innerText =
                "Mostrando saldo";

            break;

        case "2":

            document.getElementById("resultadoSwitch").innerText =
                "Realizando saque";

            break;

        case "3":

            document.getElementById("resultadoSwitch").innerText =
                "Realizando depósito";

            break;

        default:

            document.getElementById("resultadoSwitch").innerText =
                "Opção inválida";

    }

}


//Exemplos iniciais:

function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if (nome === "" || idade <= 0) {
        alert("Preencha corretamente!");
        return;
    }

    nomes.forEach(function (nome) {
        console.log("forEach1 : " + nome);
    });

    nomes.forEach((nome) => {
        console.log("forEach2 : " + nome);
    });

    for (let nome of nomes) {
        console.log("for let : " + nome);
    }

    pessoas.push({ nome: nome, idade: idade });

    let item = document.createElement("li");
    item.innerText = nome + " - " + idade + " anos";
    document.getElementById("lista").appendChild(item);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

function analisar() {
    if (pessoas.length === 0) {
        alert("Nenhuma pessoa cadastrada!");
        return;
    }

    // 🔥 ordenar por idade (crescente)
    pessoas.sort(function (a, b) {
        return a.idade - b.idade;
    });

    // 🔥 atualizar lista ordenada
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < pessoas.length; i++) {
        let item = document.createElement("li");
        item.innerText = pessoas[i].nome + " - " + pessoas[i].idade + " anos";
        lista.appendChild(item);
    }

    // 🔥 análise
    let total = pessoas.length;
    let soma = 0;
    let maiores = 0;

    for (let i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].idade;

        if (pessoas[i].idade >= 18) {
            maiores++;
        }
    }

    let media = soma / total;

    document.getElementById("resultado").innerText =
        "Total: " + total +
        " | Média: " + media.toFixed(1) +
        " | Maiores de 18 anos: " + maiores;
}


function analisar1() {
    let total = pessoas.length;
    let soma = 0;
    let maiores = 0;

    for (let i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].idade;

        if (pessoas[i].idade >= 18) {
            maiores++;
        }
    }

    let media = soma / total;

    document.getElementById("resultado").innerText =
        "Total: " + total +
        " | Média de idade: " + media.toFixed(1) +
        " | Maiores de idade: " + maiores;
}