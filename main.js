const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");
const cpfInput = document.querySelector("#cpf");
const cnpjInput = document.querySelector("#cnpj");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const neighborhoodInput = document.querySelector("#neighborhood");
const cityInput = document.querySelector("#city");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (nameInput.value === "") {
        alert("Nome não pode ser vazio");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Insira um email valido");
        return;
    }

    if (telephoneInput.value === "") {
        alert("Telefone não pode ser vazio");
        return;
    }

    if (cpfInput.value === "" && cnpjInput.value === "") {
        alert("CPF ou CNPJ não pode ser vazio");
        return;
    }

    if (cepInput.value === "") {
        alert("CEP não pode ser vazio");
        return;
    }

    if (addressInput.value === "") {
        alert("Endereço não pode ser vazio");
        return;
    }

    if (neighborhoodInput.value === "") {
        alert("Bairro não pode ser vazio");
        return;
    }

    if (cityInput.value === "") {
        alert("Cidade não pode ser vazio");
        return;
    }


    form.submit();
});

cpfInput.addEventListener('keypress', () => {
    if (cpfInput.value.length === 3 || cpfInput.value.length === 7) {
        cpfInput.value += ".";
    }

    if (cpfInput.value.length === 11) {
        cpfInput.value += "-";
    }
});

cnpjInput.addEventListener('keypress', () => {
    if (cnpjInput.value.length === 2 || cnpjInput.value.length === 6) {
        cnpjInput.value += ".";
    }

    if (cnpjInput.value.length === 10) {
        cnpjInput.value += "/";
    }

    if (cnpjInput.value.length === 15) {
        cnpjInput.value += "-";
    }
});

function isEmailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}