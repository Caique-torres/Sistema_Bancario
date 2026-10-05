let saldo = 0;
let extrato = [];

function atualizarSaldo() {
    document.getElementById("saldo").textContent =
        `R$ ${saldo.toFixed(2).replace(".", ",")}`;
}

function depositar() {
    let valor = prompt("Digite o valor do depósito:");

    valor = parseFloat(valor);

    if (isNaN(valor) || valor <= 0) {
        alert("Valor inválido.");
        return;
    }

    saldo += valor;

    extrato.push(`Depósito: +R$ ${valor.toFixed(2).replace(".", ",")}`);

    atualizarSaldo();
    atualizarExtrato();

    alert("Depósito realizado!");
}

function sacar() {
    let valor = prompt("Digite o valor do saque:");

    valor = parseFloat(valor);

    if (isNaN(valor) || valor <= 0) {
        alert("Valor inválido.");
        return;
    }

    if (valor > saldo) {
        alert("Saldo insuficiente.");
        return;
    }

    saldo -= valor;

    extrato.push(`Saque: -R$ ${valor.toFixed(2).replace(".", ",")}`);

    atualizarSaldo();
    atualizarExtrato();

    alert("Saque realizado!");
}

function atualizarExtrato() {
    const lista = document.getElementById("listaExtrato");

    if (extrato.length === 0) {
        lista.innerHTML = "<p>Nenhuma movimentação.</p>";
        return;
    }

    lista.innerHTML = "";

    extrato.forEach(movimentacao => {
        const item = document.createElement("p");

        item.classList.add("movimentacao");
        item.textContent = movimentacao;

        lista.appendChild(item);
    });
}

function mostrarExtrato() {
    atualizarExtrato();

    document.querySelector(".extrato").scrollIntoView({
        behavior: "smooth"
    });
}

atualizarSaldo();
