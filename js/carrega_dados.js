const tabelaCorpo = document.getElementById('corpo-tabela-animes');
const urlDados = 'data/dados.json';

function carregarCatalogoJSON() {

    fetch(urlDados)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            renderizarAnimes(data);
        })
        .catch(error => {
            console.error('Houve um erro ao carregar o catálogo:', error);
            tabelaCorpo.innerHTML = `<tr><td colspan="3">Erro ao carregar os filmes.</td></tr>`;
        });
}

function renderizarAnimes(animes) {

    let htmlAnimes = '';

    filmes.forEach(anime => {
        htmlAnimes += ` 
                    <tr> 
                        <td><img src="${anime.imagem.src}" alt="${anime.imagem.alt}" width="70"></td> 
                        <td>${anime.titulo}</td> 
                        <td>${anime.genero}</td> 
                    </tr> 
                `;
    });

    tabelaCorpo.innerHTML = htmlAnimes;

}

// 4. Inicia o carregamento 
carregarCatalogoJSON(); 