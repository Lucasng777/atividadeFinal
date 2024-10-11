document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const listaUsuarios = document.getElementById('listaUsuarios');
    const novoItem = document.createElement('li');
    
    novoItem.textContent = `${nome} - ${email}`;
    
    listaUsuarios.appendChild(novoItem);

    // Limpa o formulário após o envio
    document.getElementById('cadastroForm').reset();
});
