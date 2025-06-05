// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const nomeFranquia = params.get("franquia"); // ex: "campinas"

  // Lista completa dos franqueados (somente com nome e história)
  const franqueados = {
    'campinas': {
      nome: 'Franquia Inova Blocos Paredes Prontas Campinas',
      historia: 'A Inova Blocos Paredes Prontas Campinas é a matriz da franquia, oferecendo soluções inovadoras para construção civil com paredes prontas e sustentáveis. Nossa missão é transformar o mercado de construção com eficiência e qualidade.'
    },
    'sorocaba': {
      nome: 'Franquia Inova Blocos Paredes Prontas Sorocaba',
      historia: 'A Inova Blocos Paredes Prontas Sorocaba é uma franquia dedicada a oferecer soluções de construção civil com paredes prontas, focando na sustentabilidade e inovação. Nossa equipe está pronta para atender suas necessidades de construção.'
    },
    'abc': {
      nome: 'Franquia Inova Blocos Paredes Prontas ABC',
      historia: 'A Inova Blocos Paredes Prontas ABC é uma franquia que traz inovação e sustentabilidade para a construção civil na região do ABC Paulista. Oferecemos paredes prontas de alta qualidade, com foco em eficiência e respeito ao meio ambiente.'
    },
    'pindamonhangaba': {
      nome: 'Franquia Inova Blocos Paredes Prontas Pindamonhangaba',
      historia: 'A Inova Blocos Paredes Prontas Pindamonhangaba é uma franquia que se destaca pela inovação na construção civil, oferecendo paredes prontas sustentáveis e eficientes. Nossa missão é transformar o mercado local com soluções de alta qualidade.'
    },
    'curitiba': {
      nome: 'Franquia Inova Blocos Paredes Prontas Curitiba',
      historia: 'A Inova Blocos Paredes Prontas Curitiba é uma franquia que traz inovação e sustentabilidade para a construção civil paranaense. Oferecemos soluções de paredes prontas, focando na eficiência e qualidade dos nossos produtos.'
    },
    'brasilia': {
      nome: 'Franquia Inova Blocos Paredes Prontas Brasília',
      historia: 'A Inova Blocos Paredes Prontas Brasília é uma franquia que se dedica a oferecer soluções inovadoras para a construção civil na capital federal. Nossas paredes prontas são sustentáveis e eficientes, atendendo às necessidades do mercado local.'
    },
    'belo-horizonte': {
      nome: 'Franquia Inova Blocos Paredes Prontas Belo Horizonte',
      historia: 'A Inova Blocos Paredes Prontas Belo Horizonte é uma franquia que traz inovação e sustentabilidade para a construção civil mineira. Oferecemos paredes prontas de alta qualidade, com foco em eficiência e respeito ao meio ambiente.'
    },
    'fortaleza': {
      nome: 'Franquia Inova Blocos Paredes Prontas Fortaleza',
      historia: 'A Inova Blocos Paredes Prontas Fortaleza é uma franquia que se destaca pela inovação na construção civil cearense, oferecendo paredes prontas sustentáveis e eficientes. Nossa missão é transformar o mercado local com soluções de alta qualidade.'
    }
  };

  // Busca diretamente pelo nome da franquia como chave
  const franqueadoEncontrado = franqueados[nomeFranquia];

  // Exibe o conteúdo
  const tituloEl = document.getElementById("titulo");
  const historiaEl = document.getElementById("historia");

  if (franqueadoEncontrado) {
    tituloEl.textContent = franqueadoEncontrado.nome;
    historiaEl.textContent = franqueadoEncontrado.historia;
  } else {
    tituloEl.textContent = "Franqueado não encontrado";
    historiaEl.textContent = "";
  }
});
