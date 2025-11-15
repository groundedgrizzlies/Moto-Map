import { Router } from 'express';
import { getHealth } from '../controllers/healthController';

const router = Router();

router.get('/health', getHealth);

// Future Moto Map routes can be mounted here, e.g.:
// router.use('/rides', ridesRouter);

export default router;
