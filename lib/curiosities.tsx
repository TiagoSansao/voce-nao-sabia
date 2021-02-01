const flat = [
  "Estima-se que 4% da população mundial seja canhota.",
  "Estima-se que o Universo conte com mais de 10 bilhões de galáxias.",
  "opa kkkk"
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
