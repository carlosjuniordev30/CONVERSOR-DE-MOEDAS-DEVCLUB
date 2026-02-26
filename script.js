// Seletores
const convertButton = document.querySelector(".Button-converter")
const selectMoedaDe = document.querySelector(".moeda-a-converter")
const selectMoedaPara = document.querySelector(".select-moeda-convertida")
const inputValor = document.querySelector(".input-valor")

const valorDeElemento = document.querySelector(".currency-value-to-convert")
const valorParaElemento = document.querySelector(".currency-value")

const nomeMoedaDe = document.getElementById("moeda-de-cima")
const nomeMoedaPara = document.getElementById("nome-moeda")

const logoMoedaDe = document.querySelector(".currency-box img")
const logoMoedaPara = document.querySelector(".moeda-logo")


// 🔥 Objeto profissional com todas as moedas
const moedas = {
    Real: {
        taxa: 1,
        locale: "pt-BR",
        codigo: "BRL",
        nome: "Real Brasileiro",
        logo: "./assets/brasil logo.png"
    },
    Dolar: {
        taxa: 5.15,
        locale: "en-US",
        codigo: "USD",
        nome: "Dólar Americano",
        logo: "./assets/eua logo.png"
    },
    Euro: {
        taxa: 6.08,
        locale: "de-DE",
        codigo: "EUR",
        nome: "Euro",
        logo: "./assets/euro logo.png"
    },
    Libra: {
        taxa: 6.97,
        locale: "en-GB",
        codigo: "GBP",
        nome: "Libra Esterlina",
        logo: "./assets/libra logo.png"
    }
}


// 🎯 Função principal de conversão
function convertValues() {

    const valorDigitado = Number(inputValor.value)

    if (!valorDigitado) {
        valorParaElemento.innerHTML = "—"
        return
    }

    const moedaDe = selectMoedaDe.value
    const moedaPara = selectMoedaPara.value

    // Converter para REAL primeiro
    const valorEmReal = valorDigitado * moedas[moedaDe].taxa

    // Converter para moeda destino
    const valorFinal = valorEmReal / moedas[moedaPara].taxa

    // Atualiza valor de origem formatado
    valorDeElemento.innerHTML =
        new Intl.NumberFormat(moedas[moedaDe].locale, {
            style: "currency",
            currency: moedas[moedaDe].codigo
        }).format(valorDigitado)

    // Atualiza valor convertido formatado
    valorParaElemento.innerHTML =
        new Intl.NumberFormat(moedas[moedaPara].locale, {
            style: "currency",
            currency: moedas[moedaPara].codigo
        }).format(valorFinal)
}


// 🎨 Função que troca nomes e logos
function atualizarInterface() {

    const moedaDe = selectMoedaDe.value
    const moedaPara = selectMoedaPara.value

    // Atualiza nomes
    nomeMoedaDe.innerHTML = moedas[moedaDe].nome
    nomeMoedaPara.innerHTML = moedas[moedaPara].nome

    // Atualiza logos
    logoMoedaDe.src = moedas[moedaDe].logo
    logoMoedaPara.src = moedas[moedaPara].logo

    // Recalcula automaticamente
    convertValues()
}


// 🎯 Eventos
convertButton.addEventListener("click", convertValues)
selectMoedaDe.addEventListener("change", atualizarInterface)
selectMoedaPara.addEventListener("change", atualizarInterface)
inputValor.addEventListener("input", convertValues)


// Inicializa interface ao carregar
atualizarInterface()