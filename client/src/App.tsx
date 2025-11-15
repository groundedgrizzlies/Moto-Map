import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

type HealthResponse = {
  status: string;
  timestamp?: string;
};

function MapView() {
  return (
    <section className="card" aria-labelledby="map-view-title">
      <h2 id="map-view-title">Map View</h2>
      <p>Interactive riding maps will appear here.</p>
    </section>
  );
}

function RouteList() {
  const demoRoutes = ['Pacific Coast Highway', 'Tail of the Dragon', 'Blue Ridge Parkway'];
  return (
    <section className="card" aria-labelledby="route-list-title">
      <h2 id="route-list-title">Featured Routes</h2>
      <ul>
        {demoRoutes.map((route) => (
          <li key={route}>{route}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsChecking(true);
    fetch('/api/health')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Server unavailable');
        }
        return (await response.json()) as HealthResponse;
      })
      .then((data) => {
        setHealth(data);
        setError(null);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Unknown error');
      })
      .finally(() => setIsChecking(false));
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero">
          <p className="kicker">Moto Map</p>
          <h1>Plan two-wheeled adventures with confidence</h1>
          <p>
            Discover curated routes, live conditions, and a connected community of riders. The Moto Map
            platform pairs an Express backend with this Vite-powered client for a modern development experience.
          </p>
          <div className="status">
            <span className={`dot ${health ? 'ok' : error ? 'error' : 'pending'}`} aria-hidden />
            <div>
              <p className="status-label">API Status</p>
              <p className="status-value">
                {isChecking && 'Checking…'}
                {!isChecking && health && health.status}
                {!isChecking && !health && error && `Error: ${error}`}
              </p>
              {health?.timestamp && <p className="timestamp">Last checked: {new Date(health.timestamp).toLocaleString()}</p>}
            </div>
          </div>
        </section>
        <div className="grid">
          <MapView />
          <RouteList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
