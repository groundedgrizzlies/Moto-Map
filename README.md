# Moto-Map

Motorcycle tracking Map

## Prerequisites

- **Node.js** v18 or newer (the API uses features available in modern Node runtimes and the Vite dev server also expects an up-to-date environment).
- **npm** v9+ (ships with recent Node releases). Using another package manager is fine, but the commands below assume npm.
- Optional: **.env** file in `server/` to override defaults such as `PORT` and `NODE_ENV`.

## Server Setup

```bash
cd server
npm install
npm run dev
```

The server boots an Express API (default port `4000`) with health and future Moto Map endpoints. Key environment variables:

- `PORT` – Port the API listens on (`4000` by default). Update this if the dev proxy should hit a different port.
- `NODE_ENV` – Defaults to `development`, toggling logging verbosity.

Create a `.env` file inside `server/` to customize these values:

```env
PORT=4000
NODE_ENV=development
```

### API Health Endpoint

- `GET /api/health` – Returns `{ status: 'ok', timestamp, service }`, useful for verifying the API is running.
- `GET /` – Simple text response confirming the server is online.

## Client Setup

```bash
cd client
npm install
npm run dev
```

The client runs on Vite's dev server (default port `5173`). During development, requests to `/api/*` are proxied to `http://localhost:3000` per `vite.config.ts`. Adjust the proxy target if your API runs on a different port (e.g., `4000`).

## Running Client & Server Together

1. Open two terminal sessions.
2. In the first, start the API: `cd server && npm run dev`.
3. In the second, start the client: `cd client && npm run dev`.
4. Visit `http://localhost:5173` (or whichever port Vite reports). Client-side `/api/…` requests automatically forward to the configured proxy target, keeping cross-origin concerns out of the way during development.

### Development Proxy Notes

- The proxy only affects development; production builds should call the deployed API URL directly.
- If you change the API port (via `PORT`), also update `client/vite.config.ts` to keep `/api` requests in sync.
- The proxy lets you use relative paths like `fetch('/api/health')` from React components without worrying about CORS while iterating locally.
