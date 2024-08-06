const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");
const cpfInput = document.querySelector("#cpf");
const cnpjInput = document.querySelector("#cnpj");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");

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

    

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}