import Search from "../shared/Search";

function Header() {
  return (
    <header className="main-header">
      <div className="header-search">
        <Search />
      </div>
      <div className="logo">
        <a href="/pokefetch" className="logo-link" title="home">
          <img
            src="/pokefetch/images/pokeball.png"
            alt="pokemon pokeball"
            className="logo-image"
          />
        </a>
      </div>
      <div className="header-right"></div>
    </header>
  );
}

export default Header;
