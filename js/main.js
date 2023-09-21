
$(document).ready(function () {


    // mascara
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD) 00000 - 0000'
    })

    // validate
    // $('form').validate({
    //     rules: {
    //         nome: {
    //             required: true
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         telefone: {
    //             required: true
    //         },
    //         mensagem: {
    //             required: true
    //         },
    //         veiculoDeInteresse: {
    //             required: true
    //         }
    //     },
    //     messages: {
    //         nome: 'por favor, insira o seu nome',
    //         telefone: 'Este campo é obrigatorio',
    //         email: 'Este campo é obrigatorio',
    //         veiculoDeInteresse: 'Este campo é obrigatorio',
    //         mensagem: 'Este campo é obrigatorio'

    //     },
    //     submitHandler: function (form) {
    //         console.log(form)
    //     },
    //     invalidHandler: function (evento, validador) {
    //         let camposIncorretos = validador.numberOfInvalids();
    //         if (camposIncorretos) {
    //             alert(`Existem ${camposIncorretos} campos incorretos`)
    //         }
    //     }
    // })


})