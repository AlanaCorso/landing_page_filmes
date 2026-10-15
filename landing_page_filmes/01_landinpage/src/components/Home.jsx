
import Header from './Header';
import Main from './Main';

function Home() {
  return (
    <div className="app-container">
      <Header />
      <Main />

      <footer className="footer" id="contato">
        <p>© 2026 MovieCity — Seu universo de filmes.</p>
      </footer>
    </div>
  );
}

export default Home;
