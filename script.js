let pessoas = [];

function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if (nome === "" || idade <= 0) {
        alert("Preencha corretamente!");
        return;
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
    pessoas.sort(function(a, b) {
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