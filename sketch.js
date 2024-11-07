let campoIdade;
let campoLuta;
let campoAcão;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoLuta = createCheckbox("Gosta de Luta?");
  campoAcão = createCheckbox("Gosta de Ação?");
}

function draw() {
  background("rgb(255,255,255)");
  let idade = campoIdade.value();
  let gostaDeLuta = campoLuta.checked();
  let gostaDeAcão = campoAcão.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeLuta, gostaDeAcão);

  fill(color(0, 0, 100));
  textAlign(CENTER, CENTER);
  textSize(200);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAcão) {
  if (idade >= 10) {
    if (idade >= 15) {
      return "Free Fire";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Street Fighter";          
        } else{
         return "Among us";
        }
      } else {
        if (gostaDeFantasia) {
          return "Mortal Kombat";
        } else {
          return "PES";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "UFC";
    } else {
      return "FIFA";
    }
  }
}
