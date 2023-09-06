//pegando os cards para depois adicionar um evento
const card1 = document.getElementById('doisfa-card');
const card2 = document.getElementById('nmrmascara-card');
const card3 = document.getElementById('gvc-card');
const card4 = document.getElementById('sms-card');
//peguei o ID da div que vai aparecer os conteúdos também
const main = document.getElementById('principal');
//pegando seções de texto para exibir ou esconder
const container1 = document.getElementById('doisfa');
const container2 = document.getElementById('nmrmascara');
const container3 = document.getElementById('gvc');
const container4 = document.getElementById('sms-prog');

let lastClickedCard = null; // váriavel  para amarzenar o ultimo card clicado

//função para esconder todos os containers
function hideAllContainers(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
}
function hideAllCards(){
    card1.style.border = ''
    card2.style.border = ''
    card3.style.border = ''
    card4.style.border = ''
}

//criando eventos 
card1.addEventListener('click', () => {
   hideAllContainers();//esconde todos os containers
   container1.style.display = 'block'//exibe o container 
   lastClickedCard = card1; //atualiza o ultimo card clicado
   window.location.href = '#principal'
   hideAllCards()
   card1.style.border = '1px solid'
});
card2.addEventListener('click', () => {
   hideAllContainers();
   container2.style.display = 'block';
   lastClickedCard = card2;
   window.location.href = '#principal'
   hideAllCards()
   card2.style.border = '1px solid' 
});
card3.addEventListener('click', () => {
    hideAllContainers();
    container3.style.display = 'block';
    lastClickedCard = card3;
    window.location.href = '#principal'
    hideAllCards()
    card3.style.border = '1px solid'
});
card4.addEventListener('click', () => {
    hideAllContainers();
    container4.style.display = 'block';
    lastClickedCard = card4
    window.location.href = '#principal'
    hideAllCards()
    card4.style.border = '1px solid'
})
