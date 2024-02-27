$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: false,
            },
            email: {
                required: true,
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira o seu email',
            mensagem: 'Por favor, insira sua mensagem' // Ajustada a mensagem de erro aqui
        },
        submitHandler: function(form) {
            console.log(form);
            location.reload();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
        }
    });
})