$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00', {reverse: true});

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome:'Por favor, preencha o campo NOME!',
            email:'Por favor, preencha o campo EMAIL!',
            telefone:'Por favor, preencha o campo TELEFONE!',
            cpf:'Por favor, preencha o campo CPF!',
            address:'Por favor, preencha o campo ENDEREÇO!',
            cep:'Por favor, preencha o campo CEP!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo (s) incorretos!`)
            }
        }
    })
})