const form = document.getElementById('form');//pegando o id do formulario

form.addEventListener('submit', function(event) {//um ouvinte de evento foi adicionado quando dentro do form é acionado o button de enviar
    event.preventDefault();//evita o recarregamento da pagina ao clicar no botão
    var inputLogin = document.getElementById('login').value;//pegando as informaçoes do input
    var inputSenha = document.getElementById('senha').value;

    const usuariosString = localStorage.getItem('usuarios');//
    if (usuariosString) {
        const usuarios = JSON.parse(usuariosString);

    let usuarioEncontrado = false;
    for (const usuario of usuarios) {
        if (usuario.login === inputLogin && usuario.senha === inputSenha) {
            usuarioEncontrado = true
            document.getElementById('alert-login').innerText = 'Usuario logado! Bem-vindo(a)!'
            window.location.href = '../paginas/servico.html'
            break;
        }    
    }
    if (!usuarioEncontrado) {
        document.getElementById('alert-login').innerText = 'Login ou senha incorretos!'
        location.reload();
    }

}   
    else {
        document.getElementById('alert-login').innerText = 'Login inexistente'
    }

    
});













/*if (usuariosString) {
    var usuarios = JSON.parse(usuariosString);

}
else{
    console.log('undefied')
}
*/