import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <span role="img" aria-hidden>
          🏍️
        </span>
        <div>
          <p className="eyebrow">Moto Map</p>
          <p className="tagline">Route intelligence for every ride</p>
        </div>
      </div>
      <nav aria-label="Primary">
        <a href="#map-view-title">Map</a>
        <a href="#route-list-title">Routes</a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          Docs
        </a>
      </nav>
    </header>
  );
}

export default Header;
