import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} Moto Map. Crafted with Vite + React. Need an API? Hit{' '}
        <code>GET /api/health</code>.
      </p>
    </footer>
  );
}

export default Footer;
