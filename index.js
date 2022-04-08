const btn = document.getElementById('btn');


const resultado = document.getElementById('resultado')



function imc() {
     const nome = document.getElementById('nome').value;
     const altura = document.getElementById('altura').value;
     const peso = document.getElementById('peso').value;

     

     if (nome !== "" && altura !== "" && peso !== "") {

          const calculo = (peso/(altura * altura)).toFixed(1)
          
          
          if (calculo < 18.5) {

               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está abaixo do peso`)
          }else if (calculo < 25){
               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está com o peso ideal`)
          }else if (calculo <30) {
               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está levemente acima do peso`)
          }else if(calculo < 35){
               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está obesidade leve`)
          }else if(calculo < 40) {

               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está obesidade moderada`)

          }else if(calculo >= 40) {

               resultado.textContent = (`${nome}, seu IMC equivale a ${calculo}, você está com obesidade morbida`)
          };
        

     } else {
          resultado.textContent = ('Por favor preencher todos os campos')

     }


}

btn.addEventListener('click', imc)
