const div = document.getElementById("divResult")
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");

const result_1 = document.getElementById("result_1");
const result_2 = document.getElementById("result_2");
const result_3 = document.getElementById("result_3");
const result_4 = document.getElementById("result_4");
const result_5 = document.getElementById("result_5");

var genero = 0;

function radio(number){
  if (number == 0) {
    genero = 0;
  }else {
    genero = 1;
  }
}

var result = 0;
function calculate() {
  
  if (genero == 0){
    result = 66 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value);
  }
  else {
    result = 665 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value);
  }


  // APLICANDO RESULTADOS:
  result_1.innerText = result;
  result_2.innerText = result;
  result_3.innerText = result + 400;
  result_4.innerText = result + 600;
  result_5.innerText = result + 800;

  div.classList.remove("opacity");
  div.classList.add("notOpacity");
}
