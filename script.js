// Manipulando Eventos: intercepta o envio de formulário para evitar que a página recarregue.
// Selecionando o formulário pelo ID único defindo pelo HTML

const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura dos valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se os campos estão vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes do envio.");
        return; // Interrompe a execução
    }

    // Verifica formato usuario@dominio.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, informe um e-mail válido (exemplo: usuario@dominio.com).");
        return;
    }

    // Simula envio de mensagem de confirmação
    // Após a validação, exibe o sucesso e limpa o formulário
    alert("Mensagem enviada com sucesso!");
    
    // Limpa os campos após o sucesso
    formulario.reset();
});
