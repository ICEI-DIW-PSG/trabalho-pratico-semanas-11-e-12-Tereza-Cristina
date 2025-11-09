

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
