//função que verifica as senhas
const senhaInput = document.getElementById('senha');
const confirmSenhaInput = document.getElementById('confirmsenha');

senhaInput.addEventListener,confirmSenhaInput.addEventListener('input', verificarSenha);

function verificarSenha() {
    const senha = senhaInput.value;
    const confirmarSenha = confirmSenhaInput.value;
    
    if(senha === confirmarSenha){
        document.getElementById('alert-senha').innerText = 'Senha válida!'
    }
    else{
        document.getElementById('alert-senha').innerText = 'As senhas não coincidem. Tente novamente.'
    }
}
//validação campo login

const loginInput = document.getElementById('login');
const spanLogin = document.getElementById('alert-login');
    loginInput.addEventListener('focus', () => {
    spanLogin.style.display = 'block';
})

loginInput.addEventListener('input', verificarLogin())

function verificarLogin() {
    loginInput.addEventListener('keypress', () => {
    let valor = loginInput.value.length;
    document.getElementById('nCaractere').innerText = (valor + 1)

    if (valor === 5){
        document.getElementById('validacao').innerText = 'Validação correta!'
        console.log(valor)
    }
    else if(valor < 5){
        document.getElementById('validacao').innerText = 'Validação incorreta!'
    }
    });
};
//função de verificar o CPF
function VerificarCPF(){
    let cpf = document.getElementById("cpf").value.replace(".","").replace(".","").replace("-","").toString();
    let auxiliar = 0;
    let verificar = false;

    for(i = 0; i < 11; i++){
        auxiliar += parseInt(cpf.charAt(i));
    }
    
    if((auxiliar == 33 || auxiliar == 44 || auxiliar == 55 || auxiliar == 66) && (cpf != 33333333333 && cpf != 44444444444 && cpf != 55555555555 && cpf != 66666666666)){
        verificar = true;
        document.getElementById('toast').innerText = "";


    }

    if(verificar == false || document.getElementById("cpf").value.length != 14){
        document.getElementById('toast').innerText = "CPF Inválido";
        document.getElementById("cpf").value = "";
    }
}
//funções de validação 
function validateNome() {
    let nome = document.getElementById('nome').value;

    let regex = /[a-zA-Z\u00C0-\u00FF ]+/i;

    if (!regex.test(nome)) {
        document.getElementById('nome').value = '';
        document.getElementById('alert-nome').innerText = 'Por favor, insira apenas caracteres alfabéticos.'
    }
    else{
        document.getElementById('alert-nome').innerText = ''
    }
}
function validateNomeM() {
    let nome = document.getElementById('nomem').value;

    let regex = /[a-zA-Z\u00C0-\u00FF ]+/i;

    if (!regex.test(nome)) {
        document.getElementById('nomem').value = '';
        document.getElementById('alert-nomeM').innerText = 'Por favor, insira apenas caracteres alfabéticos.'
    }
    else{
        document.getElementById('alert-nomeM').innerText = ''
    }
}
function validateCpf(){
    let cpf = document.getElementById('cpf').value;
    let regex = /^[0-9-. -]+$/;

    if (!regex.test(cpf)) {
        document.getElementById('cpf').value = '';
        document.getElementById('toast').innerText = 'Por favor, insira apenas caracteres numéricos.'
    }
}
function validateCep() {
    let cep = document.getElementById('cep').value;
    let regex = /^[0-9-. - (-)-]+$/;

    if (!regex.test(cep)) {
        document.getElementById('cep'). value = '';
        document.getElementById('alert-cep').innerText = 'Por favor, insira apenas caracteres numéricos.'
    }
}
function validateNumero() {
    let numero = document.getElementById('numero').value;
    let regex = /^[0-9]+$/;

    if(!regex.test(numero)){
        document.getElementById('numero').value = '';
        document.getElementById('alert-numero').innerText = 'Por favor, insira apenas caracteres numéricos.';
    }
    else{
        document.getElementById('alert-numero').innerText = ''
    }
}
function validateCidade() {
    let cidade = document.getElementById('cidade').value;
    let regex = /[a-zA-Z\u00C0-\u00FF ]+/i;

    if(!regex.test(cidade)){
        document.getElementById('cidade').value = '';
        document.getElementById('alert-cidade').innerText = 'Por favor, insira apenas caracteres alfabéticos.'
    }
    else{
        document.getElementById('alert-cidade').innerText = ''
    }
}
function validateLogin(){
    let login = document.getElementById('login').value;
    let regex = /^[a-zA-Z]+$/;

    if(!regex.test(login)){
        document.getElementById('login').value = '';
    }
    
}
function validateSenha(){
    let senha = document.getElementById('senha').value;
    let regex = /^[a-zA-Z]+$/;
    
    document.getElementById('senha-span').innerText = 'O campo Senha deve ter 8 caracteres alfabéticos.'
    if(!regex.test(senha)){
        document.getElementById('senha').value = '';
    }
}
function validateSenhaConfirm(){
    let senha = document.getElementById('confirmsenha').value;
    let regex = /^[a-zA-Z]+$/;
    
    document.getElementById('alert-senha').innerText = 'O campo Senha deve ter 8 caracteres alfabéticos.'
    if(!regex.test(senha)){
        document.getElementById('senha').value = '';
    }
    else{
        document.getElementById('alert-senha').innerText = ''
    }
}