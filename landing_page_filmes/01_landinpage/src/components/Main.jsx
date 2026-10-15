
const filmes = [
  { nome: 'Afterlife', imagem: '/imagens/afterlife.jpg' },
  { nome: 'Transformers', imagem: '/imagens/transformers.jpg' },
  { nome: 'Mowgli', imagem: '/imagens/mowgli.jpg' },
  { nome: 'Day Shift', imagem: '/imagens/shift.png' },
  { nome: 'Squid Game', imagem: '/imagens/squidgame.webp' },
  { nome: 'Harry Potter', imagem: '/imagens/harrypotter.jpg' },
];

function Main() {
  return (
    <main className="main-content" id="filmes">
      <section className="intro" id="sobre">
        <h1>Seus Filmes</h1>

        <p>
          Aqui, você pode escolher o filme que deseja assistir.
          <br className="desktop-break" />
          Caso queira escolher mais, clique no botão.
        </p>

        <a href="#lista-filmes" className="more-button">
          Mais
        </a>
      </section>

      <section className="movies" id="lista-filmes">
        <div className="movie-grid">
          {filmes.map((filme) => (
            <article className="movie-card" key={filme.nome}>
              <img
                src={filme.imagem}
                alt={`Pôster de ${filme.nome}`}
                className="movie-poster"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
