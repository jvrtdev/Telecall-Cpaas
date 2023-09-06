const mode = document.getElementById('mode-icon');//pegando o id do botao

mode.addEventListener('click', () => {
    const isDarkMode = mode.classList.contains('fa-moon');//verifica se o modo dark esta ativado

    if (isDarkMode) {
        //desativa o dark mode 
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        //remove a classe dark dos elementos 
        removeDarkClasses();
        //salva a preferencia do usuario no localstorage
        localStorage.setItem('darkMode', 'false');
    }
    else{
        //ativa o modo dark
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        //adiciona as classes 'dark' nos elementos
        addDarkClasses();
        //salva a preferencia do usuario no localstorage
        localStorage.setItem('darkMode', 'true');   
    }
})
    //função para adicionar as classes 'dark' nos elementos
    function addDarkClasses(){
        const elements = getDarkElements();
        elements.forEach((element) => {
            element.classList.add('dark');
        });
    }
    //função para remover as classes dark dos elementos
    function removeDarkClasses(){
        const elements = getDarkElements();
        elements.forEach((element) => {
            element.classList.remove('dark');
        });
    }
    // função para obter os elementos que devem receber as classes 'dark'
    function getDarkElements(){
        const elements = [
            document.getElementById('cabecalho'),
            document.getElementById('corpo'),
            document.getElementById('formulario'),
            document.getElementById('nav-list'),
            document.getElementById('form-img'),
            document.getElementById('principal'),
            document.getElementById('container'),
            document.getElementById('left-content')
        ];
        return elements.filter((element) => element !== null); /*essa linha faz uma filtragem dos elementos HTML
        se houver algum elemento que não for encontrado, ele não adiciona ao array
        é feita uma filtragem que envia apenas os elementos válidos para o array de elementos*/
    }

    //verifica a preferencia do usuario ao recarregar a pagina 
    window.addEventListener('load', () => {
        const darkModePreference = localStorage.getItem('darkMode');
        
        if (darkModePreference === 'true'){
            mode.classList.add('fa-moon');
            mode.classList.remove('fa-sun');
            addDarkClasses();
        }
        else{
            mode.classList.remove('fa-moon');
            mode.classList.add('fa-sun');
            removeDarkClasses();
        }
    });
