const flat = [
  "Todos os insetos possuem 6 pernas.",
  "Você gasta mais calorias dormindo do que assistindo TV.",
  "Estima-se que 11% das pessoas sejam canhota.",
  "A luz é nada mais que radiação eletromagnética.",
  "Agosto é o mês com a maior porcentagem de nascimentos.",
  "95% do corpo humano é formado por oxigênio, carbono, hidrogênio e nitrogênio.",
  "A batata frita (\"French Fries\" em Inglês) foi inventada na Bélgica.",
  "É estimado que o Universo possua mais de 10 bilhões de galáxias.",
  "A média de tempo para alguém dormir é 7 minutos.",
  "Você só consegue sentir gosto de comida misturada com saliva.",
  "Os idiomas mais utilizados no mundo são Chinês, Espanhol e Inglês.",
  "Dinheiro é principal motivo de discussão entre casais.",
  "Aranhas são aracnídeos, não insetos.",
  "Sempre que você vê uma lua cheia, você vê o mesmo lado.",
  "Um beijo de 1 minuto queima 26 calorias.",
  "Os elefantes são os únicos mamíferos que não podem pular.",
  "Esponjas absorvem mais água fria do que quente.",
  "Coalas dormem mais ou menos 18 horas por dia.",
  "O dedo mais sensível é o indicador.",
  "Todo dia é um feriado em algum lugar do mundo.",
  "Estima-se que 2/3 das pessoas nunca viram neve na vida.",
  "Há 31.557.600 de segundos em um ano. ",
  "A Torre Eiffel possuí 1792 degrais.",
  "Eisten dormia 10 horas por dia.",
  "Estima-se que cada pessoa perca 4kg de pele morta todo ano.",
  "Todos os domínios .com com 3 letras possíveis já foram registrados.",
  "Você respira mais de 23 mil vezes por dia.",
  "Apenas mosquitos femininos picam. ",
  "O vento só faz barulho ao colodir com algo material.",
  "A Iguana pode ficar embaixo da água por 28 minutos.",
  "O homem possui cerca de 10% a mais de glóbulos comparado a mulheres.",
  "É estimado que 30% do sangue bombeado vá para o cérebro.",
  "O Brasil é o país com mais água doce no mundo, seguido pela Russia em segundo.",
  "O queijo é o alimento mais roubado no mundo.",
  "Meses que começam no domingo sempre terão uma Sexta-feira treze.",
  "O cachorro mais pequeno do mundo é o Chihuahua..",
  "O morcego é o único mamífero que voa.",
  "O corpo humano possui gordura suficiente para fazer sete sabonetes.",
  "O ácido estomacal é forte bastante para dissolver metal.",
  "O vaso sanitário é mais limpo do que o seu celular.",
  "Cavalos possuem 18 ossos a mais que humanos",
  "A Lua cheia brilha nove vezes mais do que a Lua minguante ou crescente.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const curiosities = flat.map((curiosity, index) => {
  return { id: index.toString(), curiosity: curiosity };
});

export function getAllCuriositiesId() {
  return curiosities.map((curiosity) => {
    return {
      params: {
        id: curiosity.id
      }
    }
  })
};

export function getCuriosityData(id: number) {
  return curiosities[id];
};
