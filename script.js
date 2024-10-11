const form = document.getElementById('form');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    form.reset(); // Limpa o formulário
});
