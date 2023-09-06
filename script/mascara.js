
//mascara cpf
const inputcpf = document.querySelector('#cpf');

inputcpf.addEventListener('keypress', () => {
    let inputCpfLength = inputcpf.value.length;

    if (inputCpfLength === 3 || inputCpfLength === 7 ) {
        inputcpf.value += '.'
    }
    else if (inputCpfLength === 11){
        inputcpf.value += '-'

    }
})  
//mascara celular
const celular = document.querySelector('#cel');

celular.addEventListener('focus', function() {
    celular.value = "(+55) ";//valor desejado
});

celular.addEventListener('keypress', () => {
    let celularLength = celular.value.length;
    console.log(celularLength)

    if (celularLength === 8){
        celular.value += '-'
    }
})
//mascara telefone
const telefone = document.querySelector('#tel');

telefone.addEventListener('focus', function() {
    telefone.value = "(+55) ";//valor desejado
});

telefone.addEventListener('keypress', () => {
    let telefoneLength = telefone.value.length;
    console.log(telefoneLength)

    if (telefoneLength === 8){
        telefone.value += '-'
    }
})



//mascara cep 
const inputCep = document.querySelector('#inputCep');

inputCep.addEventListener('keypress', () => {
    let cepLength = inputCep.value.length;
    
    if (cepLength === 5){
        inputCep.value += '-';
    }
})