const curiosities = [
  {
    id: "0",
    curiosity: "Estima-se que 4% da população mundial seja canhota.",
    font: "https://brasilescola.uol.com.br/curiosidades"
  },
  {
    id: "1",
    curiosity: "Estima-se que o Universo conte com mais de 10 bilhões de galáxias.",
    font: "https://brasilescola.uol.com.br/curiosidades"
  },
]

export function getAllCuriositiesId() {
  return curiosities.map((curiosity) => {
    return {
      params: {
        id: curiosity.id
      }
    }
  })
}

export function getCuriosityData(id: number) {
  return curiosities[id]
}
