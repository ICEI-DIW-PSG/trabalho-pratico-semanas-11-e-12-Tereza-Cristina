const dados = [
  {
    "id": 1,
    "titulo": "Nausicaä do Vale do Vento",
    "conteudo": "Em Nausicaä do Vale do Vento, a jovem princesa Nausicaä vive em um futuro devastado por guerras e por uma floresta tóxica habitada por criaturas gigantes. Quando reinos rivais ameaçam destruir o equilíbrio do mundo, ela luta para impedir uma nova tragédia e provar que humanos e natureza podem coexistir em harmonia.",
    "categoria": "Fantasia, Ficção Científica, Aventura.",
    "autor": "Hayao Miyazaki",
    "data": "11-03-1984",
    "imagem": "img/nausicaa.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/nausicaa_sec1.jpg",
      "img/nausicaa_sec2.jpg",
      "img/nausicaa_sec3.jpg",
      "img/nausicaa_sec4.jpg"
    ]
  },
  {
    "id": 2,
    "titulo": "O Castelo no Céu",
    "conteudo": "Sheeta e Pazu embarcam em uma aventura para encontrar a cidade voadora Laputa. Enquanto fogem de piratas e agentes do governo, eles lutam para proteger o poder do castelo flutuante e evitar que ele caia em mãos erradas.",
    "categoria": "Aventura, Fantasia",
    "autor": "Hayao Miyazaki",
    "data": "02-08-1986",
    "imagem": "img/ocastelonoceu.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/ocastelonoceu_sec1.jpg",
      "img/ocastelonoceu_sec2.jpg",
      "img/ocastelonoceu_sec3.jpg",
      "img/ocastelonoceu_sec4.jpg"
    ]
  },
  {
    "id": 3,
    "titulo": "Meu Amigo Totoro",
    "conteudo": "Satsuki e Mei, duas jovens irmãs, se mudam para uma casa antiga no campo com seu pai para ficar mais perto de sua mãe doente. Elas descobrem que a floresta próxima é habitada por criaturas mágicas, incluindo o gentil e enorme Totoro. As irmãs embarcam em aventuras fantásticas com Totoro e seus amigos espíritos da floresta.",
    "categoria": "Animação, Fantasia, Família",
    "autor": "Hayao Miyazaki",
    "data": "16-04-1988",
    "imagem": "img/meuamigototoro.jpg",
    "imagemCarrossel": "img/meuamigototoro_carrossel.jpg",
    "destaque": true,
    "descricaoCurta": "Uma história mágica e leve sobre amizade, infância e a conexão com a natureza.",
    "fotosSecundarias": [
      "img/totoro_sec1.jpg",
      "img/totoro_sec2.jpg",
      "img/totoro_sec3.jpg",
      "img/totoro_sec4.jpg"
    ]
  },
  {
    "id": 4,
    "titulo": "Túmulo dos Vagalumes",
    "conteudo": "Durante os últimos meses da Segunda Guerra Mundial, Seita e Setsuko, dois irmãos órfãos, lutam para sobreviver em meio à devastação do Japão. Eles enfrentam a fome, a doença e a indiferença dos adultos, buscando refúgio em um abrigo abandonado e encontrando consolo na beleza efêmera dos vagalumes.",
    "categoria": "Drama, Guerra",
    "autor": "Isao Takahata",
    "data": "16-04-1988",
    "imagem": "img/tumulodosvagalumes.jpg",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/vagalumes_sec1.jpg",
      "img/vagalumes_sec2.jpg",
      "img/vagalumes_sec3.jpg",
      "img/vagalumes_sec4.jpg"
    ]
  },
  {
    "id": 5,
    "titulo": "O Serviço de Entregas da Kiki",
    "conteudo": "Uma jovem bruxa de 13 anos se muda para uma nova cidade e usa sua habilidade de voar para iniciar um serviço de entregas, aprendendo sobre independência e amadurecimento.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hayao Miyazaki",
    "data": "29-07-1989",
    "imagem": "img/osservicosdeentregadakiki.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/kiki_sec1.jpg",
      "img/kiki_sec2.jpg",
      "img/kiki_sec3.jpg",
      "img/kiki_sec4.jpg"
    ]
  },
  {
    "id": 6,
    "titulo": "Memórias de Ontem",
    "conteudo": "Uma mulher de 27 anos viaja para o campo e começa a relembrar sua infância nos anos 60, refletindo sobre suas escolhas de vida e seu futuro.",
    "categoria": "Drama, Romance",
    "autor": "Isao Takahata",
    "data": "20-07-1991",
    "imagem": "img/memoriasdeontem.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/memorias_sec1.jpg",
      "img/memorias_sec2.jpg",
      "img/memorias_sec3.jpg",
      "img/memorias_sec4.jpg"
    ]
  },
  {
    "id": 7,
    "titulo": "Porco Rosso: O Último Herói Romântico",
    "conteudo": "Um piloto de caça italiano da Primeira Guerra Mundial, amaldiçoado a ter uma cabeça de porco, trabalha como caçador de recompensas no Mar Adriático.",
    "categoria": "Aventura, Comédia",
    "autor": "Hayao Miyazaki",
    "data": "18-07-1992",
    "imagem": "img/porcorosso.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/porcorosso_sec1.jpg",
      "img/porcorosso_sec2.jpg",
      "img/porcorosso_sec3.jpg",
      "img/porcorosso_sec4.jpg"
    ]
  },
  {
    "id": 8,
    "titulo": "Eu Posso Ouvir o Oceano",
    "conteudo": "Um triângulo amoroso se desenvolve entre dois melhores amigos e uma nova estudante transferida de Tóquio, explorando temas de amizade e distância.",
    "categoria": "Drama, Romance",
    "autor": "Tomomi Mochizuki",
    "data": "05-05-1993",
    "imagem": "img/eupossoouvirooceano.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/oceano_sec1.jpg",
      "img/oceano_sec2.jpg",
      "img/oceano_sec3.jpg",
      "img/oceano_sec4.jpg"
    ]
  },
  {
    "id": 9,
    "titulo": "PomPoko: A Grande Batalha dos Guaxinins",
    "conteudo": "Um grupo de guaxinins mágicos (tanuki) usa suas habilidades de transformação para tentar impedir que os humanos destruam sua floresta para construir novos subúrbios.",
    "categoria": "Fantasia, Comédia",
    "autor": "Isao Takahata",
    "data": "16-07-1994",
    "imagem": "img/pompoko.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/pompoko_sec1.jpg",
      "img/pompoko_sec2.jpg",
      "img/pompoko_sec3.jpg",
      "img/pompoko_sec4.jpg"
    ]
  },
  {
    "id": 10,
    "titulo": "Sussurros do Coração",
    "conteudo": "Uma jovem estudante amante de livros descobre que todos os livros que ela pega na biblioteca foram previamente emprestados pelo mesmo garoto, levando-a a uma jornada de autodescoberta.",
    "categoria": "Drama, Romance",
    "autor": "Yoshifumi Kondō",
    "data": "15-07-1995",
    "imagem": "img/sussurrosdocoracao.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/sussurros_sec1.jpg",
      "img/sussurros_sec2.jpg",
      "img/sussurros_sec3.jpg",
      "img/sussurros_sec4.jpg"
    ]
  },
  {
    "id": 11,
    "titulo": "Princesa Mononoke",
    "conteudo": "Ashitaka, um príncipe Emishi, é amaldiçoado após defender sua aldeia de um demônio. Ele viaja para o oeste em busca de uma cura e se encontra no meio de um conflito entre os espíritos da floresta e os humanos que estão destruindo seus recursos. Lá, ele conhece San, a Princesa Mononoke, uma garota criada por lobos que luta para proteger a floresta.",
    "categoria": "Fantasia, Aventura, Drama",
    "autor": "Hayao Miyazaki",
    "data": "12-07-1997",
    "imagem": "img/princesamononoke.jpg",
    "imagemCarrossel": "img/princesamononoke_carrossel.jpg",
    "destaque": true,
    "descricaoCurta": "Uma aventura épica que mistura ação, natureza e espiritualidade, explorando o conflito entre humanidade e meio ambiente.",
    "fotosSecundarias": [
      "img/mononoke_sec1.jpg",
      "img/mononoke_sec2.jpg",
      "img/mononoke_sec3.jpg",
      "img/mononoke_sec4.jpg"
    ]
  },
  {
    "id": 12,
    "titulo": "Meus Vizinhos os Yamadas",
    "conteudo": "Acompanhamos o dia a dia divertido e caótico de uma família japonesa comum. Por meio de pequenas histórias, o filme mostra situações familiares cheias de humor, amor e desafios cotidianos.",
    "categoria": "Comédia, Slice of Life",
    "autor": "Isao Takahata",
    "data": "17-07-1999",
    "imagem": "img/meusvizinhoyamada.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/yamadas_sec1.jpg",
      "img/yamadas_sec2.jpg",
      "img/yamadas_sec3.jpg",
      "img/yamadas_sec4.jpg"
    ]
  },
  {
    "id": 13,
    "titulo": "A Viagem de Chihiro",
    "conteudo": "Chihiro e seus pais estão se mudando para uma nova cidade. No caminho, eles param em um túnel misterioso que os leva a um mundo mágico habitado por deuses, espíritos e criaturas fantásticas. Quando seus pais são transformados em porcos, Chihiro deve trabalhar em uma casa de banhos para espíritos, administrada pela bruxa Yubaba, para encontrar uma maneira de libertá-los e retornar ao seu mundo.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hayao Miyazaki",
    "data": "20-07-2001",
    "imagem": "img/aviagemdechihiro.jpg",
    "imagemCarrossel": "img/aviagemdechihiro_carrossel.jpg",
    "destaque": true,
    "descricaoCurta": "Uma jornada mágica de autodescoberta e coragem em um mundo fantástico.",
    "fotosSecundarias": [
      "img/chihiro_sec1.jpg",
      "img/chihiro_sec2.jpg",
      "img/chihiro_sec3.jpg",
      "img/chihiro_sec4.jpg"
    ]
  },
  {
    "id": 14,
    "titulo": "O Reino dos Gatos",
    "conteudo": "Uma estudante salva um gato de ser atropelado e descobre que ele é um príncipe do Reino dos Gatos. Como recompensa, ela é levada para o seu mundo e prometida em casamento a ele.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hiroyuki Morita",
    "data": "19-07-2002",
    "imagem": "img/oreinodosgatos.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/gatos_sec1.jpg",
      "img/gatos_sec2.jpg",
      "img/gatos_sec3.jpg",
      "img/gatos_sec4.jpg"
    ]
  },
  {
    "id": 15,
    "titulo": "O Castelo Animado",
    "conteudo": "Sophie, uma jovem chapeleira, é amaldiçoada por uma bruxa e transformada em uma velha. Ela foge de casa e encontra refúgio no castelo ambulante do misterioso mago Howl. Lá, ela faz um pacto com um demônio do fogo chamado Calcifer e embarca em uma aventura para quebrar sua maldição e a de Howl.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hayao Miyazaki",
    "data": "20-11-2004",
    "imagem": "img/ocasteloanimado.jpg",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/ocasteloanimado_sec1.jpg",
      "img/ocasteloanimado_sec2.jpg",
      "img/ocasteloanimado_sec3.jpg",
      "img/ocasteloanimado_sec4.jpg"
    ]
  },
  {
    "id": 16,
    "titulo": "Contos de Terramar",
    "conteudo": "Em um mundo desequilibrado, um arquimago e um príncipe exilado se unem para encontrar a fonte do mal que assola a terra de Terramar.",
    "categoria": "Fantasia, Aventura",
    "autor": "Gorō Miyazaki",
    "data": "29-07-2006",
    "imagem": "img/contosdeterramar.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/terramar_sec1.jpg",
      "img/terramar_sec2.jpg",
      "img/terramar_sec3.jpg",
      "img/terramar_sec4.jpg"
    ]
  },
  {
    "id": 17,
    "titulo": "Ponyo",
    "conteudo": "Brunhilde, uma peixinha dourada, foge de sua casa no oceano e é resgatada por um menino de cinco anos chamado Sosuke, que a nomeia Ponyo. Ponyo deseja se tornar humana e, com a ajuda de seus poderes mágicos, ela consegue. No entanto, sua transformação causa um desequilíbrio na natureza, e Sosuke e Ponyo devem trabalhar juntos para restaurar a ordem.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hayao Miyazaki",
    "data": "19-07-2008",
    "imagem": "img/ponyo.png",
    "imagemCarrossel": "img/ponyo_carrossel.jpg",
    "destaque": true,
    "descricaoCurta": "Uma aventura mágica e divertida sobre coragem, amizade e o poder da imaginação.",
    "fotosSecundarias": [
      "img/ponyo_sec1.jpg",
      "img/ponyo_sec2.jpg",
      "img/ponyo_sec3.jpg",
      "img/ponyo_sec4.jpg"
    ]
  },
  {
    "id": 18,
    "titulo": "O Mundo dos Pequeninos",
    "conteudo": "Uma família de seres minúsculos que vivem secretamente nas paredes e assoalhos de uma casa precisa manter sua existência em segredo dos humanos.",
    "categoria": "Fantasia, Drama",
    "autor": "Hiromasa Yonebayashi",
    "data": "17-07-2010",
    "imagem": "img/omundodospequeninos.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/pequeninos_sec1.jpg",
      "img/pequeninos_sec2.jpg",
      "img/pequeninos_sec3.jpg",
      "img/pequeninos_sec4.jpg"
    ]
  },
  {
    "id": 19,
    "titulo": "Da Colina Kokuriko",
    "conteudo": "Dois estudantes se unem para salvar o antigo prédio do clube de sua escola da demolição nos anos 60, enquanto descobrem uma conexão surpreendente em seus passados.",
    "categoria": "Drama, Romance",
    "autor": "Gorō Miyazaki",
    "data": "16-07-2011",
    "imagem": "img/dacolinakokuriko.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/kokuriko_sec1.jpg",
      "img/kokuriko_sec2.jpg",
      "img/kokuriko_sec3.jpg",
      "img/kokuriko_sec4.jpg"
    ]
  },
  {
    "id": 20,
    "titulo": "Vidas ao Vento",
    "conteudo": "Uma biografia ficcional de Jiro Horikoshi, o designer do avião de caça Mitsubishi A6M Zero, que sonhava em projetar belos aviões.",
    "categoria": "Drama, Biografia",
    "autor": "Hayao Miyazaki",
    "data": "20-07-2013",
    "imagem": "img/vidasaovento.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/vidasaovento_sec1.jpg",
      "img/vidasaovento_sec2.jpg",
      "img/vidasaovento_sec3.jpg",
      "img/vidasaovento_sec4.jpg"
    ]
  },
  {
    "id": 21,
    "titulo": "O Conto da Princesa Kaguya",
    "conteudo": "Encontrada dentro de um talo de bambu, uma menina cresce rapidamente e se torna uma jovem de beleza exuberante, mas seu destino misterioso a chama de volta para a Lua.",
    "categoria": "Fantasia, Drama",
    "autor": "Isao Takahata",
    "data": "23-11-2013",
    "imagem": "img/kaguya.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/kaguya_sec1.jpg",
      "img/kaguya_sec2.jpg",
      "img/kaguya_sec3.jpg",
      "img/kaguya_sec4.jpg"
    ]
  },
  {
    "id": 22,
    "titulo": "As Memórias de Marnie",
    "conteudo": "Uma garota solitária e adotada é enviada para o interior e desenvolve uma amizade misteriosa com Marnie, uma garota que vive em uma mansão aparentemente abandonada.",
    "categoria": "Drama, Mistério",
    "autor": "Hiromasa Yonebayashi",
    "data": "19-07-2014",
    "imagem": "img/marnie.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/marnie_sec1.jpg",
      "img/marnie_sec2.jpg",
      "img/marnie_sec3.jpg",
      "img/marnie_sec4.jpg"
    ]
  },
  {
    "id": 23,
    "titulo": "Aya e a Bruxa",
    "conteudo": "Uma órfã obstinada é adotada por uma bruxa egoísta e descobre um mundo de feitiços e poções, tentando controlar seu próprio destino.",
    "categoria": "Fantasia, Comédia",
    "autor": "Gorō Miyazaki",
    "data": "30-12-2020",
    "imagem": "img/ayaeabruxa.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/aya_sec1.jpg",
      "img/aya_sec2.jpg",
      "img/aya_sec3.jpg",
      "img/aya_sec4.jpg"
    ]
  },
  {
    "id": 24,
    "titulo": "O Menino e a Garça",
    "conteudo": "Após a morte de sua mãe, um menino se muda para o campo e descobre uma torre abandonada que o leva a um mundo fantástico com uma garça falante.",
    "categoria": "Fantasia, Aventura",
    "autor": "Hayao Miyazaki",
    "data": "14-07-2023",
    "imagem": "img/omeninoeagarca.png",
    "imagemCarrossel": "",
    "destaque": false,
    "descricaoCurta": "",
    "fotosSecundarias": [
      "img/garça_sec1.jpg",
      "img/garça_sec2.jpg",
      "img/garça_sec3.jpg",
      "img/garça_sec4.jpg"
    ]
  }
];

function parseData(str) {
  const [dia, mes, ano] = str.split('-').map(Number);
  return new Date(ano, mes - 1, dia);
}

function carregarHomePage() {
  const filmesContainer = document.getElementById('filmes-container');
  const carouselInnerDestaque = document.getElementById('carousel-inner-destaque');

  if (!filmesContainer || !carouselInnerDestaque) return;

  filmesContainer.innerHTML = '';
  carouselInnerDestaque.innerHTML = '';

  const dadosOrdenados = dados.sort((a, b) => parseData(a.data) - parseData(b.data));
  const filmesDestaque = dadosOrdenados.filter(item => item.destaque);

  filmesDestaque.forEach((item, index) => {
      const carouselItemDiv = document.createElement('div');
      carouselItemDiv.classList.add('carousel-item');
      if (index === 0) {
          carouselItemDiv.classList.add('active');
      }
      const imagemParaCarrossel = item.imagemCarrossel || item.imagem;
      carouselItemDiv.innerHTML = `
      <a href="detalhes.html?id=${item.id}">
        <img src="${imagemParaCarrossel}" class="d-block w-100" alt="${item.titulo}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.titulo}</h5>
          <p>${item.descricaoCurta}</p>
        </div>
      </a>
    `;
      carouselInnerDestaque.appendChild(carouselItemDiv);
  });

  dadosOrdenados.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-3', 'col-sm-6', 'mb-4');
      colDiv.innerHTML = `
      <div class="card h-100">
        <a href="detalhes.html?id=${item.id}" class="text-decoration-none text-dark">
          <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
          <div class="card-body text-center">
            <h6 class="card-title fw-bold">${item.titulo}</h6>
            <p class="text-muted small">${item.data.split('-')[2]}</p>
          </div>
        </a>
      </div>
    `;
      filmesContainer.appendChild(colDiv);
  });
}

// === Função de Pesquisa ===
function ativarPesquisa() {
  const form = document.querySelector('form[role="search"]');
  const input = form.querySelector('input[type="search"]');
  
  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede o reload da página

    const termo = input.value.trim().toLowerCase();

    // Se o campo estiver vazio, recarrega todos os filmes
    if (termo === "") {
      carregarHomePage();
      return;
    }

    // Filtra os filmes que contêm o termo no título
    const resultados = dados.filter(filme =>
      filme.titulo.toLowerCase().includes(termo)
    );

    const filmesContainer = document.getElementById('filmes-container');
    if (!filmesContainer) return;

    filmesContainer.innerHTML = ''; // limpa os filmes anteriores

    if (resultados.length === 0) {
      filmesContainer.innerHTML = `<p class="alert alert-warning text-center">Nenhum filme encontrado para "${termo}".</p>`;
      return;
    }

    // Exibe os resultados filtrados
    resultados.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-3', 'col-sm-6', 'mb-4');
      colDiv.innerHTML = `
        <div class="card h-100">
          <a href="detalhes.html?id=${item.id}" class="text-decoration-none text-dark">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body text-center">
              <h6 class="card-title fw-bold">${item.titulo}</h6>
              <p class="text-muted small">${item.data.split('-')[2]}</p>
            </div>
          </a>
        </div>
      `;
      filmesContainer.appendChild(colDiv);
    });
  });
}

function carregarDetalhesPage() {
  const detalheContainer = document.getElementById('detalhe-container');
  const fotosSecundariasContainer = document.getElementById('fotos-secundarias-container');
  if (!detalheContainer || !fotosSecundariasContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get('id'));

  const item = dados.find(d => d.id === itemId);

  if (item) {
      const dataFormatada = item.data.split('-').reverse().join('/');

      detalheContainer.innerHTML = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imagem}" class="img-fluid rounded-start" alt="${item.titulo}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${item.titulo}</h2>
              <p class="card-text"><strong>Sinopse:</strong> ${item.conteudo}</p>
              <p class="card-text"><small class="text-muted"><strong>Categoria:</strong> ${item.categoria}</small></p>
              <p class="card-text"><small class="text-muted"><strong>Diretor:</strong> ${item.autor}</small></p>
              <p class="card-text"><small class="text-muted"><strong>Data de Lançamento:</strong> ${dataFormatada}</small></p>
              <a href="index.html" class="btn btn-primary mt-3">Voltar para a Home</a>
            </div>
          </div>
        </div>
      </div>
    `;

      if (item.fotosSecundarias && item.fotosSecundarias.length > 0) {
          item.fotosSecundarias.forEach(foto => {
              const colDiv = document.createElement('div');
              colDiv.classList.add('col-md-3', 'col-sm-6', 'mb-4');
              colDiv.innerHTML = `
          <div class="card h-100">
            <img src="${foto}" class="card-img-top" alt="Foto de ${item.titulo}">
          </div>
        `;
              fotosSecundariasContainer.appendChild(colDiv);
          });
      } else {
          fotosSecundariasContainer.innerHTML = '<p class="alert alert-info">Nenhuma foto secundária disponível para este item.</p>';
      }

  } else {
      detalheContainer.innerHTML = '<p class="alert alert-warning">Item não encontrado.</p>';
      fotosSecundariasContainer.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('detalhe-container')) {
      carregarDetalhesPage();
  } else {
      carregarHomePage();
      ativarPesquisa();
  }
});
