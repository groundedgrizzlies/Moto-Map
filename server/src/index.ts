import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './config/env';
import apiRoutes from './routes/index';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan(env.nodeEnv === 'development' ? 'dev' : 'combined'));

app.get('/', (_req, res) => {
  res.send('Moto Map API is running');
});

app.use('/api', apiRoutes);

const startServer = (): void => {
  const port = env.port;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Moto Map API listening on port ${port}`);
  });
};

startServer();

export default app;
