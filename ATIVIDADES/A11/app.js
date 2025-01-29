$(document).ready(function(){

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');


    $('#myForm').submit(function(event) {
        event.preventDefault();

        const nome = $('#nome').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val().replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        const cpf = $('#cpf').val().replace(/\D/g, '');
        const idade = $('#idade').val();


        function validarCPF(cpf) {
            cpf = cpf.replace(/\D/g, '');


            if (cpf.length !== 11) {
                return false;
            }

            if (/^(\d)\1{10}$/.test(cpf)) {
                return false;
            }
        
            let soma = 0;
            let resto;
            for (let i = 1; i <= 9; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpf.substring(9, 10))) {
                return false;
            }
        
            soma = 0;
            for (let i = 1; i <= 10; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpf.substring(10, 11))) {
                return false;
            }
        
            return true;
        }


        if (nome === '') {
            alert('O campo nome é obrigatório.');
            return false;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Digite um email válido.');
            return false;
        }


        if (!validarCPF(cpf)) {
            alert('CPF inválido.');
            return false;
        }


        if (idade < 16) {
            alert('Você deve ter mais de 16 anos.');
            return false;
        }


        alert('Formulário enviado com sucesso!');

    });
});