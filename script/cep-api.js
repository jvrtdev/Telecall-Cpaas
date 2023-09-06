function mascaraCEP(){
  var cep = document.getElementById('cep');

  cep.addEventListener('keypress', () => {
      let cepLength = cep.value.length;
      
      if (cepLength === 5){
          cep.value += '-';
      }
  })
}
//função para procurar o CEP
function ProcuraCEP() {
  var cep = document.getElementById("cep").value.replace("-","");
  
  if(cep !== ''){
      let url = 'https://brasilapi.com.br/api/cep/v1/' + cep;
      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.send();

      req.onload = function() {
          if(req.status === 200) {
              let endereco = JSON.parse(req.response)
              document.getElementById('logradouro').value = endereco.street
              document.getElementById('cidade').value = endereco.city
              document.getElementById('bairro').value = endereco.neighborhood
          }
          else if(req.status === 404){
              toast("CEP INVÁLIDO");
              document.getElementById("cep").value = "";
          }
      }   
  }
}

window.onload = function() {
  let textcep = document.getElementById('cep');
  textcep.addEventListener("blur", ProcuraCEP);//assim que o input sai do foco ele procura o cep
}