const flat = [
  "Estima-se que 4% da população mundial seja canhota.",
  "Estima-se que o Universo conte com mais de 10 bilhões de galáxias.",
  "Temos cerca de 7 octilhões de átomos no nosso corpo. Cada átomo, a unidade básica da matéria, contém um núcleo maciço e denso rodeado por elétrons. Acontece que o núcleo é bem pequeno em relação ao tamanho do átomo. Por exemplo: se o núcleo fosse do tamanho de uma bola de tênis, os elétrons estariam a 500 metros de distância dele! Assim, a maior parte de um átomo é espaço vazio",
  ""
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
