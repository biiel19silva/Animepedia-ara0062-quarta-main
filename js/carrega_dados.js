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
            tabelaCorpo.innerHTML = `<tr><td colspan="3">Erro ao carregar os personagens de animes.</td></tr>`;
        });
}

function renderizarAnimes(animes) {

    let htmlAnimes = '';

    animes.forEach(anime => {
        htmlAnimes += ` 
                    <tr> 
                        <td><img src="${anime.Foto.src}" alt="${anime.Foto.alt}" width="70"></td> 
                        <td>${anime.Nome}</td> 
                        <td>${anime.Idade}</td>
                        <td>${anime.Genero}</td>
                        <td>${anime.Anime}</td> 
                        <td>${anime.Curiosidade}</td>
                    </tr> 
                `;
    });

    tabelaCorpo.innerHTML = htmlAnimes;

}

// 4. Inicia o carregamento 
carregarCatalogoJSON(); 