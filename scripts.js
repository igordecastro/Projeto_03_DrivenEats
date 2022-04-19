let prato;
let sobremesa;
let bebida;

let precoPrato, precoBebida, precoSobremesa;

function selecionarPrato(elemento) {
    let preco = elemento.querySelector(".preco").innerHTML;
    precoPrato = trataNumeros(preco);
    prato = elemento.querySelector("strong").innerHTML;
    const opcaoSelecionada = document.querySelector(".pratos .selecionado");
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    VerificaSelecao();
}

function selecionarBebida(elemento) {
    let preco = elemento.querySelector(".preco").innerHTML;
    precoBebida = trataNumeros(preco);
    bebida = elemento.querySelector("strong").innerHTML;
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    VerificaSelecao();
}

function selecionarSobremesa(elemento) {
    let preco = elemento.querySelector(".preco").innerHTML;
    precoSobremesa = trataNumeros(preco);
    sobremesa = elemento.querySelector("strong").innerHTML;
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    VerificaSelecao();
}

function VerificaSelecao() {
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        const botao = document.querySelector(".botao");
        botao.classList.add("oculto");
        botao.innerHTML = "Fechar pedido";
    }
}

function trataNumeros(valor) {
    valor = valor.replace("R$ ", "").replace(",", ".");
    valor = Number(valor);

    return valor;
}
function somaPreco() {
    let total = precoBebida + precoPrato + precoSobremesa;
    return total;
}
function mandarWhatsapp() {
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${somaPreco().toFixed(2)}`;
    console.log(mensagem);
    const urlWpp = `https://wa.me/5567934343434?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWpp);
}